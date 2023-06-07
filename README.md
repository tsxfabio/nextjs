# NextJS 13

O [NextJS](https://nextjs.org/) surgiu com o objetivo de sanar as dores
geradas/encontradas pelas Single Page Applications (SPA).

## Iniciando um Projeto

É recomendado que para iniciar um novo projeto, seja utilizando o comando
`npx create-next-app@latest`, que irá configurar tudo automaticamente para você.

```
npx create-next-app@latest
```

Por padrão, na configuração do NextJS, é oferecido a opção de utilizar
TypeScript, ESLint e Tailwind CSS.

## Estilização

Suporte a diversas formas de estilização da aplicação, podendo ser usado:

- Global CSS
- CSS Modules
- [Tailwind CSS](https://tailwindcss.com/)
- [Stitches](https://stitches.dev/)
- [SASS](https://sass-lang.com/)
- [CSS-in-JS](https://cssinjs.org/?v=v10.10.0)

Ponto de destaque para o Tailwind, que de acordo com a documentação, funciona
extremamente bem junto ao NextJS.

## Arquivos Padrões

### Page

- Arquivo que permite deixar as rotas acessíveis e contem as informações que
  serão apresentadas.
- Arquivo exclusivo para uma rota.

```
export default function Home() {
  return (
    <div>
    <h1>Hello Ivory</h1>
    </div>
  )
}
```

### Layout

![Screen layout.tsx](./public/img-layout-tsx.png "layout.tsx screen")

- O layout.tsx que possui a function `RootLayout` (normalmente o da camada mais
  externa) define a estrutura que vai ser repetida em todas as páginas da
  aplicação.
- Mesmo durante a troca de rotas, as informações contidas no layout.tsx não são
  recarregadas (isso inclui requisições HTTP), o NextJS entende que essas
  informações devem ser persistentes.
- Posso ter vários arquivos layout.tsx, de acordo com a minha necessidade nas
  páginas da aplicação e suas exibições podem ser concatenadas.

## Rotas
