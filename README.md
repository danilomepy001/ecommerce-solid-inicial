## Como rodar

```
npm install
npm run prisma:migrate
npm run prisma:seed
cp .env.example .env
npm run dev
```

### Modos de execução

O modo é escolhido pela variável `APP_ENV` no arquivo `.env`.

- `APP_ENV=test`: ___ (explique: e-mail no console, pedidos em memória, funciona sem internet)
- `APP_ENV=dev`: ___ (explique: e-mail pelo Ethereal, pedidos no SQLite, precisa de internet)

Para trocar de modo, altere o `.env` e reinicie o servidor.