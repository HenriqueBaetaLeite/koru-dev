## Referências da aula:

### Prisma

https://www.prisma.io/

## Comandos úteis do prisma

#### Gerar o Prisma Client após mudanças no schema
npx prisma generate

#### Criar e aplicar migration
npx prisma migrate dev --name nome_da_migration

#### Resetar banco de dados (CUIDADO: apaga todos os dados)
npx prisma migrate reset

#### Abrir Prisma Studio (interface visual)
npx prisma studio

#### Ver o status das migrations
npx prisma migrate status

#### Aplicar migrations em produção
npx prisma migrate deploy