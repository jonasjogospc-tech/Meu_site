JPC GAMING — SITE ESTÁTICO PARA GITHUB PAGES

ESTRUTURA
- src/App.jsx: componentes e páginas React.
- src/main.jsx: inicialização do React.
- vite.config.js: build com múltiplas páginas para URLs diretas.
- index.html, páginas legais e jogos/: entradas independentes do site.
- assets/: capas e identidade visual, processadas pelo Vite.
- styles.css: estilos globais e responsivos.

DESENVOLVIMENTO E BUILD
1. Instale Node.js 22.
2. Execute npm ci para instalar as dependências do package-lock.json.
3. Execute npm run dev para iniciar o servidor local.
4. Execute npm run lint e npm run build antes de publicar.
5. O resultado de produção fica em dist/.

PUBLICAR NO GITHUB
1. O workflow fica na raiz do repositório: .github/workflows/deploy.yml.
2. Em Settings > Pages, selecione GitHub Actions como origem de publicação.
3. Envie alterações para a branch main ou execute o workflow Publicar site na aba Actions.
4. Após a publicação, o site deste repositório ficará em https://jonasjogospc-tech.github.io/Meu_site/.
5. A política pública está em https://jonasjogospc-tech.github.io/Meu_site/privacidade.html.

BANCO DE DADOS
O site atual é estático: não tem cadastro, formulário de envio nem painel administrativo. Para publicar políticas e links, não precisa de banco de dados. GitHub Pages não hospeda backend ou banco. Não adicione armazenamento de dados pessoais sem escolher e configurar um serviço de backend, controles de acesso, retenção e uma política correspondente.

ANTES DE USAR NA GOOGLE PLAY
- A coleta de dados de StreamerJPC e AventuraPixel2D ainda não foi confirmada; a política atual é um rascunho e não deve ser enviada à Play Console até ser revisada.
- Audite cada app, seus SDKs/plugins e as configurações exatas do Unity Cloud Diagnostics.
- Preencha o formulário Segurança dos Dados (Data safety) separadamente para cada app, com informações verdadeiras.
- Confirme que a política pública corresponde às práticas de cada app e também seja acessível dentro dele.
- Se um app permite criar conta, publique e implemente o mecanismo de solicitação de exclusão exigido; a página atual ainda depende dessa confirmação.
- Substitua os links “em breve” por URLs reais da Google Play após a publicação.
- Ajuste classificação etária, público-alvo e termos conforme cada jogo.

O deploy técnico não certifica conformidade jurídica nem garante aprovação pela Google Play. As declarações sobre dados devem ser validadas pelo responsável por cada app.
