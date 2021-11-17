# plantao-server
Plantão virtual servidor

Pré-requisitos:

- Nodejs
- Docker

Instalação:

- yarn (Para instalar as dependencias)

- Altere o ormconfig.example para ormconfig.json

Docker: docker-compose up -d

- yarn typeorm migration:run (Roda as migrations)
- yarn dev (Para iniciar a aplicação)

Para testar você pode utilizar a rota /operators, que lista os operadores. Não é exigido autenticação
Ex: localhost:3005/operators.
