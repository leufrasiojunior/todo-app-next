# Projeto Todo de teste

## Tecnologias:

- Tailwind CSS
- Shacdn UI
- Node

## Como utilizar:

O projeto está hospedado temporariamente na vercel: https://todo-app-next-gules.vercel.app/

Utilize o git para clonar o repositótio:

    git clone https://github.com/leufrasiojunior/todo-app-next.git

Rode o `npm i` para instalar as dependências do projeto e `npm run dev` para inicializar.

Usuário e senha de teste:

**Usuário: test@example.com
senha: 123456**

OBS.: Foi incluído um delay proposital de 2 segundos simulando uma consulta a uma API até a sua Resposta.

Como teste, está fixado este login. Existem validações para o login caso ocorra algum erro de digitação.

Após o login bem sucedido, será redirecionado automaticamente para /todolist.
Caso tente acessar esta página sem estar logado, será redirecionado automaticamente para a tela de login.

A página de registro está somente para demonstração e não há funcionamento, somente validações caso tente preencher.

# Tela de Todo:

É possível:

- Completar
- Excluir
- Incluir
- Buscar por palavras Chave

Ordenar por:

- Completos
- Incompletos
- Ordenação de A-Z ou Z-A

Caso a página seja atualizada será perdido os itens, pois não foi feito uma conexão para salvar os itens numa tabela para salvar o conteúdo.
