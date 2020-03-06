<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>


<h3 align="center">
  Desafio 3: FastFeet, continuando a aplicação
</h3>

<h3 align="center">
  :warning: Etapa 2/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack</p>

## Sobre o desafio

Aplicação para uma transportadora fictícia, o FastFeet.

Abaixo estão descritas as funcionalidades adicionadas na aplicação.


### **Funcionalidades do administrador**


### **1. Gestão de entregadores**

Permite que o administrador possa cadastrar entregadores para a plataforma

Rotas para listagem/cadastro/atualização/remoção de entregadores;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

### **2. Gestão de encomendas**

Cadastro deencomendas para os entregadores.

A **data de início** é cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h.

A **data de término** da entrega é cadastrada quando o entregador finalizar a entrega:

Os campos **recipient_id** e **deliveryman_id** são cadastrados no momento que for cadastrada a encomenda.

Quando a encomenda é **cadastrada** para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.

Rotas para listagem/cadastro/atualização/remoção de encomendas;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.


### **Funcionalidades do entregador**


### **1. Visualizar encomendas**

Para que o entregador possa visualizar suas encomendas, ele informa apenas seu ID de cadastro (ID do entregador no banco de dados). Essa funcionalidade retorna as encomendas atribuidas a ele, que **não estejam entregues ou canceladas**;

Permite também que apenas as encomendas que já foram **entregues** por ele, com base em seu ID de cadastro;

### 2. Alterar status de encomendas

Permite que o entregador tenha rotas para incluir uma data de retirada (start_date) e data de entrega (end_date) para as encomendas. O entregador só pode fazer **5 retiradas por dia**.

Obs.: Para a funcionalidade de finalizar a entrega, permite o envio de uma imagem que irá preencher o campo signature_id da tabela de encomendas.

### 3. Cadastrar problemas nas entregas

O entregador nem sempre conseguirá entregar as encomendas com sucesso, algumas vezes o destinatário pode estar ausente, ou o próprio entregador poderá ter algum problema com seu veículo na hora de entregar.


Rota para a distribuidora listar todas as entregas com algum problema;

Rota para listar todos os problemas de uma encomenda baseado no ID da encomenda.

Rota para o entregador cadastrar problemas na entrega apenas informando seu ID de cadastro (ID da encomenda no banco de dados);

Rota para a distribuidora cancelar uma entrega baseado no ID do problema. Quando uma encomenda é cancelada, o entregador recebe um e-mail informando-o sobre o cancelamento.