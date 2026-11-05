import io
import json
import os
import time
import urllib.request
import zipfile

def deploy_to_netlify():
    cfg_path = os.path.expandvars(r'%APPDATA%\netlify\Config\config.json')
    if not os.path.exists(cfg_path):
        raise FileNotFoundError(f"Config do Netlify não encontrado em: {cfg_path}")

    with open(cfg_path, 'r', encoding='utf-8') as f:
        cfg = json.load(f)

    token = None
    for u in cfg.get('users', {}).values():
        if 'auth' in u and 'token' in u['auth']:
            token = u['auth']['token']
            break

    if not token:
        raise RuntimeError("Token do Netlify não encontrado no config.json")

    # 1. Garante _redirects e _headers na pasta dist
    with open('dist/_redirects', 'w', encoding='utf-8') as f:
        f.write('/*    /index.html   200\n')

    with open('dist/_headers', 'w', encoding='utf-8') as f:
        f.write('/sw.js\n  Cache-Control: no-cache, no-store, must-revalidate\n')
        f.write('/manifest.webmanifest\n  Content-Type: application/manifest+json\n  Cache-Control: no-cache\n')
        f.write('/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n')

    # 2. Cria arquivo zip em memória
    zip_buffer = io.BytesIO()
    file_count = 0
    with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
        for root, dirs, files in os.walk('dist'):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, 'dist').replace('\\', '/')
                zip_file.write(full_path, rel_path)
                file_count += 1

    zip_bytes = zip_buffer.getvalue()
    print(f"[ZIP] Pacote ZIP montado com {file_count} arquivos ({len(zip_bytes)} bytes)")

    # 3. Dispara deploy na API do Netlify
    site_id = 'c60309ed-3ddf-459d-8d95-8f8502be51f5'
    deploy_url = f'https://api.netlify.com/api/v1/sites/{site_id}/deploys'

    req = urllib.request.Request(
        deploy_url,
        data=zip_bytes,
        headers={
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/zip'
        },
        method='POST'
    )

    print("[NETLIFY] Enviando pacote para o Netlify...")
    with urllib.request.urlopen(req) as resp:
        deploy_info = json.loads(resp.read().decode())
        deploy_id = deploy_info.get('id')
        state = deploy_info.get('state')
        ssl_url = deploy_info.get('ssl_url')
        print(f"[OK] Deploy aceito com sucesso! ID: {deploy_id} (Estado: {state})")

    # 4. Aguarda finalização do deploy
    status_url = f'https://api.netlify.com/api/v1/sites/{site_id}/deploys/{deploy_id}'
    for i in range(20):
        time.sleep(2)
        s_req = urllib.request.Request(status_url, headers={'Authorization': f'Bearer {token}'})
        with urllib.request.urlopen(s_req) as s_resp:
            status_info = json.loads(s_resp.read().decode())
            curr_state = status_info.get('state')
            print(f"   Status do deploy ({i+1}/20): {curr_state}")
            if curr_state == 'ready':
                print("\n" + "=" * 70)
                print("[SUCESSO] DEPLOY EM PRODUCAO CONCLUIDO COM SUCESSO!")
                print(f"URL de Producao: {ssl_url}")
                print(f"URL especifica deste deploy: {status_info.get('deploy_ssl_url')}")
                print("=" * 70)
                return True
            elif curr_state == 'error':
                print(f"[ERRO] Falha no deploy: {status_info.get('error_message')}")
                return False

    return False

if __name__ == '__main__':
    deploy_to_netlify()
