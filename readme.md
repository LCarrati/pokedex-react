# Pokedex:
- **Acesse aqui:** https://lcarrati.github.io/pokedex-react/

## Introdução
O projeto é uma Pokedex construída em React.js em conjunto com Styled-components, React Router e Axios. Permite listar todos os pokemons, capturá-los em sua própria Pokedex e exibir os detalhes de cada Pokemon.

## Características
- **Integração com API**: O app obtém seus dados da PokeAPI utilizando o AXIOS para fazer solicitações HTTP. 

- **Gerenciamento de Estado Global**: Nada de prop drilling aqui!! Os estados que são necessários em vários componentes são gerenciados e disponibilizados globalmente através da React Context API. 

- **Estilização**: O aplicativo foi estilizado utilizando Styled-components e Chakra UI.

- **React Router DOM**: Para navegação e roteamento entre páginas.

- **Custom hooks**: Funções que seriam necessárias em vários componentes foram agrupadas em custom hooks para melhor gerenciamento do código.

- **Paginação**: O app lista 20 pokemons por página e implementa paginação, facilitando a navegação do usuário através dos mais de mil pokemons!

- **Skeleton loading**: Os cards da página principal possuem um skeleton loading básico, um 'esqueleto' do site que reserva o espaço visual onde os cards serão mostrados antes mesmo da requisição estar concluída, ou seja, durante o carregamento.

## Conclusão
Este projeto demonstra algumas habilidades adquiridas durante o bootcamp FullStack Labenu, especificamente no módulo de front end com foco em React.
