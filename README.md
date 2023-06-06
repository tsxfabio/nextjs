# NextJS

O [NextJS](https://nextjs.org/) surgiu com o objetivo de sanar as dores
geradas/encontradas pelas Single Page Applications (SPA).

## Arquivos Padrões

- layout.tsx -> Define a estrutura que vai ser repetida em todas as páginas da
  aplicação.  
  É o único arquivo que tem a função 'RootLayout'.

  Característica IMPORTANTE desse arquivo, é que mesmo durante a troca de rotas,
  as informações contidas no layout.tsx não são recarregadas (isso inclui
  requisições HTTP), o NextJS entende que essas informações devem ser
  persistentes.

## Rotas
