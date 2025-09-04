export type blog = {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
}

export const blogs: blog[] = [
  {
    id: 1,
    titulo: "Aprendendo Next.js",
    conteudo: `
      Next.js é um framework poderoso baseado em React que traz diversas vantagens para o
      desenvolvimento de aplicações web modernas. Ele combina renderização no servidor (SSR),
      geração de páginas estáticas (SSG) e rotas dinâmicas de forma simples e prática.
      
      Uma das maiores vantagens do Next.js é a performance, já que muitas páginas podem ser
      pré-geradas no servidor e entregues de forma extremamente rápida para o usuário. Além disso,
      o suporte nativo a rotas e a API simplifica bastante o processo de desenvolvimento.
      
      Em resumo, aprender Next.js abre portas para criar aplicações escaláveis, rápidas e bem
      organizadas, aproveitando todo o ecossistema do React, mas com muito mais produtividade.
    `,
    autor: "Fulano da Silva",
  },
  {
    id: 2,
    titulo: "Server Components na prática",
    conteudo: `
      Os Server Components são um dos recursos mais revolucionários introduzidos no React e
      incorporados ao Next.js. A ideia é simples: parte do código roda exclusivamente no servidor,
      sem ser enviado ao navegador, o que reduz drasticamente o tamanho do bundle e melhora a
      performance da aplicação.
      
      Com eles, podemos buscar dados diretamente no servidor, acessar bancos de dados ou APIs
      privadas sem expor credenciais no cliente e ainda entregar HTML já pronto para o usuário.
      Isso garante maior segurança e eficiência.
      
      Para o desenvolvedor, a principal mudança é pensar em quais componentes realmente precisam
      ser "Client Components" (com interatividade, estado, eventos) e quais podem continuar
      sendo "Server Components". Essa divisão resulta em aplicações muito mais otimizadas.
    `,
    autor: "Beltrano Oliveira",
  },
  {
    id: 3,
    titulo: "App Router vs Pages Router",
    conteudo: `
      O Next.js evoluiu bastante desde as primeiras versões. Até a versão 12 (e parte da 13),
      o sistema de rotas era baseado na pasta "pages". Cada arquivo virava uma rota e o modelo
      funcionava bem, mas tinha limitações em layouts e aninhamento de rotas.
      
      O App Router chegou para mudar esse cenário. Agora, as rotas são definidas dentro da pasta
      "app", onde cada diretório pode ter um arquivo "page.tsx" (ou "page.js") e também arquivos
      especiais como "layout.tsx", "error.tsx" e "loading.tsx". Essa estrutura permite criar
      layouts compartilhados, rotas aninhadas e usar de forma natural os Server Components.
      
      Embora o Pages Router ainda funcione e seja mantido, o App Router é considerado o futuro do
      Next.js e já é recomendado para novos projetos. Ele oferece muito mais flexibilidade e
      performance, além de estar alinhado com a visão moderna do React.
    `,
    autor: "Ciclano Pereira",
  },
  {
    id: 4,
    titulo: "Copia do artigo acima",
    conteudo: `
      O Next.js evoluiu bastante desde as primeiras versões. Até a versão 12 (e parte da 13),
      o sistema de rotas era baseado na pasta "pages". Cada arquivo virava uma rota e o modelo
      funcionava bem, mas tinha limitações em layouts e aninhamento de rotas.
      
      O App Router chegou para mudar esse cenário. Agora, as rotas são definidas dentro da pasta
      "app", onde cada diretório pode ter um arquivo "page.tsx" (ou "page.js") e também arquivos
      especiais como "layout.tsx", "error.tsx" e "loading.tsx". Essa estrutura permite criar
      layouts compartilhados, rotas aninhadas e usar de forma natural os Server Components.
      
      Embora o Pages Router ainda funcione e seja mantido, o App Router é considerado o futuro do
      Next.js e já é recomendado para novos projetos. Ele oferece muito mais flexibilidade e
      performance, além de estar alinhado com a visão moderna do React.
    `,
    autor: "Ciclano Pereira",
  },
];