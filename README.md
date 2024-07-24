<p align="center">
  <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/licenciamento/" target="blank"><img src="https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/chamadas/URBANISMO_E_LICENCIAMENTO_HORIZONTAL_FUNDO_CLARO_1665756993.png" width="200" alt="SMUL Logo" /></a>
</p>

<p align="center">Teste técnico - SMUL/ATIC</p>

## Descrição

Repositório de teste técnico.
Documentação de tecnologia utilizada:

- NESTJS: https://docs.nestjs.com/
- PRISMAIO: https://www.prisma.io/docs/getting-started

## Instalação

```bash
npm install
```

## Criando o banco de dados

```bash
npx prisma migrate dev
```

## Rodando o app

```bash
# modo de monitoramento
npm run dev
```

## O Teste

A ideia do teste foi de criar um sistema básico de calculadora, que execute as 4 operações básicas. <br />
Como exemplo, a operação de adição já estava implementada na URL:

```bash
/operacoes/adicao
```

Além de delvover o resultado da operação como resposta para a request, também é necessário salvar os registros das operações feitas em banco de dados (SQLite). <br />
Para consultar o que foi inserido em banco de dados, foi criado um endpoint que retorne todas as operações salvas. <br />
Caso o usuário queira, também é possível filtrar pelo tipo de operação. Mas caso contrário, retorna todas, independente do tipo. <br />

## Tarefa 1

Criar os endpoints para as demais operações matemáticas básicas:
  - subtração: o usuário pode fazer cálculos de subtração de dois números, através do endpoint
  ```bash
  /operacoes/subtracao
  ```
  - multiplicação: o usuário pode fazer cálculos de multiplicação de dois números, através do endpoint
  ```bash
  /operacoes/multiplicacao
  ```
  - divisão: o usuário pode fazer cálculos de divisão de dois números, através do endpoint
  ```bash
  /operacoes/divisão
  ```

Registrando as operações realizadas em banco de dados e seguindo o exemplo de urls:
  - /operacoes/adicao
  - /operacoes/subtracao
  - /operacoes/multiplicacao
  - /operacoes/divisao

## Tarefa 2

Foi criado um endpoint para consultar todas as operações registradas, com a possibilidade de filtragem por tipo de operação:
  - /operacoes/listar?tipo=1

Onde:
  - 1 = Adição
  - 2 = Subtração
  - 3 = Multiplicação
  - 4 = Divisão

## Dificuldades encontradas no projeto

Quando fiz o método de "listar" dentro da class OperacoesService, coloquei o argumento tipo com tipagem de number, e quando eu chamava o método no Insominia , ele entrava somente no else de listar todas as operações, e quando eu colocava um tipo para ser listado , ele me retornava um erro 500, mencionando que ele estava aguardando um tipo string no lugar do number. Foi onde entendi que uma Query é sempre uma string, mesmo que no código seja number. 