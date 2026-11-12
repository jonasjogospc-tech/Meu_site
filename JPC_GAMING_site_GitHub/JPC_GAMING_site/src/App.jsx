import { useEffect, useState } from 'react'
import logo from '../assets/jpc-gaming-logo.jpg'
import streamerCover from '../assets/streamerjpc-capa.jpg'
import adventureCover from '../assets/aventurapixel2d-capa.jpg'

const email = 'Jonasjogospcpcpc@gmail.com'
const currentPath = window.location.pathname
const pageName = document.body.dataset.page || currentPath.split('/').filter(Boolean).at(-1) || 'index.html'
const gamesDirectory = currentPath.lastIndexOf('jogos/')
const siteRoot = gamesDirectory >= 0
  ? currentPath.slice(0, gamesDirectory)
  : currentPath.slice(0, currentPath.lastIndexOf('/') + 1)
const siteLink = (path) => `${siteRoot}${path}`

const pageMeta = {
  'index.html': ['JPC GAMING | Jogos e Aplicativos', 'Jogos e aplicativos independentes da JPC GAMING. Conheça nossos lançamentos.'],
  'privacidade.html': ['Política de Privacidade | JPC GAMING', 'Saiba como os aplicativos da JPC GAMING podem tratar dados técnicos e de diagnóstico.'],
  'termos.html': ['Termos de Uso | JPC GAMING', 'Termos de uso do site, jogos e aplicativos da JPC GAMING.'],
  'suporte.html': ['Suporte e Contato | JPC GAMING', 'Entre em contato com o suporte da JPC GAMING.'],
  'exclusao-de-dados.html': ['Solicitação de exclusão de dados | JPC GAMING', 'Informações sobre solicitações relacionadas a dados dos aplicativos JPC GAMING.'],
  'streamerjpc.html': ['StreamerJPC | JPC GAMING', 'Conheça o aplicativo StreamerJPC, da JPC GAMING.'],
  'aventurapixel2d.html': ['AventuraPixel2D | JPC GAMING', 'Conheça o jogo AventuraPixel2D, da JPC GAMING.'],
}

function Brand({ footer = false }) {
  return (
    <a className="brand" href={siteLink('index.html')}>
      <img src={logo} alt={footer ? '' : 'Logo JPC Gaming'} />
      <span>JPC <b>GAMING</b></span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <Brand />
      <button
        className="menu"
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
      </button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
        <a href={siteLink('index.html#inicio')} onClick={closeMenu}>Início</a>
        <a href={siteLink('index.html#jogos')} onClick={closeMenu}>Jogos</a>
        <a href={siteLink('privacidade.html')} onClick={closeMenu}>Privacidade</a>
        <a href={siteLink('termos.html')} onClick={closeMenu}>Termos</a>
        <a href={siteLink('suporte.html')} onClick={closeMenu}>Suporte</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <Brand footer />
      <p>© {new Date().getFullYear()} JPC GAMING</p>
      <div>
        <a href={siteLink('privacidade.html')}>Política de Privacidade</a>
        <a href={siteLink('termos.html')}>Termos de Uso</a>
        <a href={siteLink('exclusao-de-dados.html')}>Exclusão de dados</a>
        <a href={siteLink('suporte.html')}>Suporte</a>
      </div>
    </footer>
  )
}

function GameCard({ image, imageAlt, number, title, description, href, action }) {
  return (
    <article className="card">
      <a href={siteLink(href)} aria-label={`Conheça ${title}`}>
        <img src={image} alt={imageAlt} loading="lazy" />
      </a>
      <div className="card-body">
        <span className="number">LANÇAMENTO {number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="more" href={siteLink(href)}>
          {action}<b aria-hidden="true">→</b>
        </a>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-text">
            <p className="eyebrow">ESTÚDIO INDEPENDENTE • BRASIL</p>
            <h1>O próximo nível<br /><span>começa aqui.</span></h1>
            <p>Conheça os jogos e aplicativos da JPC GAMING. Novas experiências, criatividade e diversão em um só lugar.</p>
            <a className="btn" href="#jogos">EXPLORAR JOGOS <b aria-hidden="true">↗</b></a>
          </div>
        </section>
        <section className="catalog" id="jogos">
          <div className="heading">
            <div><p className="eyebrow">NOSSO UNIVERSO</p><h2>Jogos em destaque</h2></div>
            <p>Primeiros lançamentos da JPC GAMING</p>
          </div>
          <div className="cards">
            <GameCard
              image={streamerCover}
              imageAlt="Capa do aplicativo StreamerJPC"
              number="01"
              title="StreamerJPC"
              description="Aplicativo de memes e conteúdo para streamer."
              href="jogos/streamerjpc.html"
              action="VER APLICATIVO"
            />
            <GameCard
              image={adventureCover}
              imageAlt="Capa do jogo AventuraPixel2D"
              number="02"
              title="AventuraPixel2D"
              description="Uma aventura em pixel art para explorar e jogar."
              href="jogos/aventurapixel2d.html"
              action="VER JOGO"
            />
          </div>
          <p className="note">Os links da Google Play serão ativados quando cada aplicativo estiver publicado.</p>
        </section>
        <section className="banner">
          <div><p className="eyebrow">JPC GAMING</p><h2>Feito para quem ama jogar.</h2><p>Acompanhe os projetos e novidades do estúdio.</p></div>
          <a className="btn secondary" href={siteLink('suporte.html')}>FALE CONOSCO</a>
        </section>
      </main>
    </>
  )
}

const documents = {
  'privacidade.html': {
    eyebrow: 'TRANSPARÊNCIA E DADOS',
    title: 'Política de Privacidade',
    updated: true,
    warning: <><strong>Rascunho — não enviar à Play Console:</strong> a coleta por app, os SDKs e as configurações de diagnóstico ainda não foram confirmados. Revise e complete esta política antes de cadastrar seu link na Play Console. Preencha também a declaração Segurança dos Dados separadamente para cada app.</>,
    sections: [
      ['1. Quem é responsável', <>Os jogos e aplicativos são publicados sob a marca JPC GAMING. Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail <a className="inline" href={`mailto:${email}`}>{email}</a>.</>],
      ['2. Dados de diagnóstico e falhas', 'Ainda não foi confirmado se StreamerJPC ou AventuraPixel2D utilizam Unity Cloud Diagnostics, quais recursos estão ativos ou quais dados são processados. Antes da publicação, verifique a configuração de cada app, os dados e identificadores envolvidos, as finalidades e os prazos de retenção. Não presuma que os apps não coletam dados.'],
      ['3. Contas e publicidade', 'A existência de cadastro/login e a exibição de anúncios não foram confirmadas para cada app. Esta seção precisa ser completada após revisar os recursos de cada app e todos os SDKs de publicidade ou autenticação usados.'],
      ['4. Compartilhamento e fornecedores', <>Os serviços de terceiros usados por cada app ainda não foram confirmados. Identifique cada fornecedor e os dados que recebe antes da publicação. Se o Unity Cloud Diagnostics for usado, consulte também a <a className="inline" href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidade da Unity</a>.</>],
      ['5. Armazenamento e retenção', 'Os períodos de retenção dependem do serviço, do plano e das configurações aplicáveis. Consulte as configurações e condições atuais da Unity para confirmar os prazos. Não presumimos um prazo único para todos os aplicativos.'],
      ['6. Crianças e público-alvo', 'A classificação etária e o público-alvo são definidos individualmente para cada aplicativo na Google Play. Aplicativos direcionados a crianças ou participantes do programa Famílias devem cumprir os requisitos adicionais aplicáveis.'],
      ['7. Direitos e contato', <>Para dúvidas sobre o tratamento de dados, escreva para <a className="inline" href={`mailto:${email}`}>{email}</a>. A existência de criação de conta em cada app ainda não foi confirmada. Se um app permitir criar conta, publique e implemente um mecanismo adequado para solicitar a exclusão, conforme os requisitos aplicáveis da Google Play.</>],
      ['8. Alterações', 'Esta política poderá ser atualizada quando os aplicativos, recursos, SDKs ou práticas de dados forem alterados. A versão vigente ficará disponível nesta página.'],
    ],
  },
  'termos.html': {
    eyebrow: 'JPC GAMING',
    title: 'Termos de Uso',
    updated: true,
    warning: <><strong>Modelo:</strong> revise este documento para cada aplicativo e substitua ou complemente as condições conforme os recursos reais, licenças e regras aplicáveis.</>,
    sections: [
      ['1. Aceitação', 'Ao acessar este site ou utilizar um jogo/aplicativo da JPC GAMING, você concorda com estes termos e com as condições específicas apresentadas na página do aplicativo e na loja de distribuição.'],
      ['2. Uso permitido', 'O usuário compromete-se a utilizar os aplicativos de forma lícita, sem tentar comprometer seu funcionamento, explorar falhas, distribuir conteúdo malicioso ou violar direitos de terceiros.'],
      ['3. Propriedade intelectual', 'Marcas, identidade visual, textos, elementos gráficos, código e demais materiais dos aplicativos pertencem à JPC GAMING ou são utilizados sob licença, conforme aplicável. Nenhum direito é transferido ao usuário além da licença limitada necessária para utilizar o aplicativo.'],
      ['4. Disponibilidade e atualizações', 'Os aplicativos podem receber atualizações, correções ou alterações de recursos. A disponibilidade pode variar conforme dispositivo, sistema operacional e loja de distribuição.'],
      ['5. Serviços de terceiros', 'Os aplicativos podem depender de plataformas ou serviços de terceiros, como lojas de aplicativos e ferramentas de diagnóstico. O uso desses serviços também pode estar sujeito aos termos e políticas de seus respectivos fornecedores.'],
      ['6. Limitação e contato', <>Na extensão permitida pela legislação aplicável, a JPC GAMING não garante funcionamento ininterrupto ou ausência total de erros. Para suporte, entre em contato pelo e-mail <a className="inline" href={`mailto:${email}`}>{email}</a>.</>],
      ['7. Alterações destes termos', 'Estes termos podem ser atualizados. A versão atualizada será publicada nesta página, com a data da revisão.'],
    ],
  },
}

function DocumentPage({ document }) {
  return (
    <main className="page">
      <p className="eyebrow">{document.eyebrow}</p>
      <h1>{document.title}</h1>
      {document.updated && <p><strong>Última atualização: 12 de novembro de 2026</strong></p>}
      {document.warning && <div className="panel warning">{document.warning}</div>}
      {document.sections.map(([heading, content]) => (
        <section key={heading}>
          <h2>{heading}</h2>
          <p>{content}</p>
        </section>
      ))}
    </main>
  )
}

function SupportPage() {
  return (
    <main className="page">
      <p className="eyebrow">ESTAMOS AQUI PARA AJUDAR</p>
      <h1>Suporte e contato</h1>
      <div className="panel">
        <h2>JPC GAMING</h2>
        <p>Para dúvidas, sugestões ou problemas com StreamerJPC e AventuraPixel2D, envie uma mensagem para nosso e-mail de suporte.</p>
        <p><strong>E-mail:</strong> <a className="inline" href={`mailto:${email}`}>{email}</a></p>
        <a className="btn" href={`mailto:${email}?subject=Suporte%20JPC%20GAMING`}>ENVIAR E-MAIL</a>
      </div>
      <p>Ao entrar em contato, informe o nome do aplicativo, a versão e uma descrição do problema. Não envie senhas ou dados de pagamento.</p>
    </main>
  )
}

function DataDeletionPage() {
  return (
    <main className="page">
      <p className="eyebrow">PRIVACIDADE</p>
      <h1>Solicitação de exclusão de dados</h1>
      <div className="panel">
        <p>A existência de criação de conta/login em StreamerJPC e AventuraPixel2D ainda não foi confirmada. Antes de publicar na Google Play, verifique cada app. Se um app permitir criar conta, esta página precisa oferecer instruções e um mecanismo web para solicitar a exclusão de conta e dados.</p>
        <p>Se você deseja fazer uma pergunta sobre dados técnicos de diagnóstico ou solicitar informações relacionadas à privacidade, entre em contato:</p>
        <p><a className="inline" href={`mailto:${email}?subject=Privacidade%20-%20JPC%20GAMING`}>{email}</a></p>
      </div>
      <p>Se algum aplicativo passar a permitir criação de conta, esta página será atualizada com um mecanismo de solicitação de exclusão de conta e dados, conforme os requisitos aplicáveis do Google Play.</p>
    </main>
  )
}

function GamePage({ title, number, image, imageAlt, description }) {
  return (
    <main className="page">
      <p className="eyebrow">LANÇAMENTO {number}</p>
      <h1>{title}</h1>
      <img className="game-hero" src={image} alt={imageAlt} fetchPriority="high" />
      <div className="panel">
        <p>{description}</p>
        <p><strong>Status:</strong> lançamento em preparação.</p>
      </div>
      <p><a className="inline" href={siteLink('privacidade.html')}>Política de Privacidade</a> · <a className="inline" href={siteLink('suporte.html')}>Suporte</a></p>
      <a className="btn" href={siteLink('index.html#jogos')}>VOLTAR AO CATÁLOGO</a>
    </main>
  )
}

function PageContent() {
  if (pageName === 'index.html') return <HomePage />
  if (documents[pageName]) return <DocumentPage document={documents[pageName]} />
  if (pageName === 'suporte.html') return <SupportPage />
  if (pageName === 'exclusao-de-dados.html') return <DataDeletionPage />
  if (pageName === 'streamerjpc.html') {
    return <GamePage title="StreamerJPC" number="01" image={streamerCover} imageAlt="Capa do StreamerJPC" description="Conheça o StreamerJPC, aplicativo da JPC GAMING. Esta página será atualizada com descrição completa, recursos, imagens e link oficial assim que o app estiver publicado." />
  }
  if (pageName === 'aventurapixel2d.html') {
    return <GamePage title="AventuraPixel2D" number="02" image={adventureCover} imageAlt="Capa do AventuraPixel2D" description="Prepare-se para explorar AventuraPixel2D, jogo em pixel art da JPC GAMING. Esta página será atualizada com descrição completa, recursos, imagens e link oficial assim que o jogo estiver publicado." />
  }
  return <main className="page"><h1>Página não encontrada</h1><a className="inline" href={siteLink('index.html')}>Voltar ao início</a></main>
}

export default function App() {
  useEffect(() => {
    const [title, description] = pageMeta[pageName] || ['Página não encontrada | JPC GAMING', 'A página solicitada não foi encontrada.']
    document.title = title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', description)
  }, [])

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  )
}