O Angular permite sobrescrever injeções de dependências. Este projeto demontra que podemos trocar um serviço que uma biblioteca usa por um serviço customizado.
```
angular: v17
node: 18.20.4
npm: 10.7.0
```
```
npm i
ng build --project my-lib
npm start app
```
Descomente/comente a linha para ver o comportamento:
```
./projects/app/src/app/app.config.ts:10
```
