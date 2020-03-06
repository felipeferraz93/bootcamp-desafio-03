<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>


<h3 align="center">
  Desafio 3: FastFeet, continuando a aplica��o
</h3>

<h3 align="center">
  :warning: Etapa 2/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que � uma aplica��o completa (Back-end, Front-end e Mobile) que � avaliada para emiss�o do Certificado do Bootcamp GoStack</p>

## Sobre o desafio

Aplica��o para uma transportadora fict�cia, o FastFeet.

Abaixo est�o descritas as funcionalidades adicionadas na aplica��o.


### **Funcionalidades do administrador**


### **1. Gest�o de entregadores**

Permite que o administrador possa cadastrar entregadores para a plataforma

Rotas para listagem/cadastro/atualiza��o/remo��o de entregadores;

Obs.: Essa funcionalidade � para administradores autenticados na aplica��o.

### **2. Gest�o de encomendas**

Cadastro deencomendas para os entregadores.

A **data de in�cio** � cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas s� podem ser feitas entre as 08:00 e 18:00h.

A **data de t�rmino** da entrega � cadastrada quando o entregador finalizar a entrega:

Os campos **recipient_id** e **deliveryman_id** s�o cadastrados no momento que for cadastrada a encomenda.

Quando a encomenda � **cadastrada** para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto j� est� dispon�vel para a retirada.

Rotas para listagem/cadastro/atualiza��o/remo��o de encomendas;

Obs.: Essa funcionalidade � para administradores autenticados na aplica��o.


### **Funcionalidades do entregador**


### **1. Visualizar encomendas**

Para que o entregador possa visualizar suas encomendas, ele informa apenas seu ID de cadastro (ID do entregador no banco de dados). Essa funcionalidade retorna as encomendas atribuidas a ele, que **n�o estejam entregues ou canceladas**;

Permite tamb�m que apenas as encomendas que j� foram **entregues** por ele, com base em seu ID de cadastro;

### 2. Alterar status de encomendas

Permite que o entregador tenha rotas para incluir uma data de retirada (start_date) e data de entrega (end_date) para as encomendas. O entregador s� pode fazer **5 retiradas por dia**.

Obs.: Para a funcionalidade de finalizar a entrega, permite o envio de uma imagem que ir� preencher o campo signature_id da tabela de encomendas.

### 3. Cadastrar problemas nas entregas

O entregador nem sempre conseguir� entregar as encomendas com sucesso, algumas vezes o destinat�rio pode estar ausente, ou o pr�prio entregador poder� ter algum problema com seu ve�culo na hora de entregar.


Rota para a distribuidora listar todas as entregas com algum problema;

Rota para listar todos os problemas de uma encomenda baseado no ID da encomenda.

Rota para o entregador cadastrar problemas na entrega apenas informando seu ID de cadastro (ID da encomenda no banco de dados);

Rota para a distribuidora cancelar uma entrega baseado no ID do problema. Quando uma encomenda � cancelada, o entregador recebe um e-mail informando-o sobre o cancelamento.