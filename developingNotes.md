# Notas Importantes
## Fluxo das páginas
- **/INDEX:** Home estilo landing page que apresenta o site e direciona para as telas de login e cadastro

- **TASKS/INDEX:** Tela onde se carregam as listas de tarefas juntamente com o diagrama que se modifica dinamicamente

- **CONSTRUCTION/INDEX:** Tela onde se modifica o diagrama da casa, alterando o formato dos cômodos, as cores dos pisos e a localização dos móveis.

**OBS: As demais telas menores da aba de construção e tarefas são carregadas dentro do respectivo arquivo index, na forma de componentes.** 

## Estrutura de arquivos (Arquitetura MVC)
- **/DATABASE/:** Script do banco de dados, arquivo de conexão e diagramas representativos. (**OBS:** O script original do banco de dados nunca é apagado, mas consultas posteriores no arquivo lar_database.sql modificam tabelas e colunas.)

- **HELPERS/:** Arquivos relacionados à facilitações internas para a escrita do código.

- **MODELS/:** Consultas ao banco de dados em arquivos referentes à uma tabela.

- **VIEWS/:** Páginas da aplicação: Sessão de tarefas, sessão de construção, componentes individuais reutilizáveis, login, cadastro e home.

- **CONTROLLERS/:** Intermediação entre as views e os models. Recebe as requests do usuário e realiza a query necessária contida nos models.

- **ASSETS/:** Arquivos CSS, arquivos JS, imagens e icones da aplicação.

## Atualizações 'on-the-fly' utilizando requisições AJAX 
Para atualizar certas páginas com dados do servidor sem que toda a página seja recarregada(tornando, então a aplicação mais rápida e interativa), utilizamos a técnica de Asynchronous Javascript and XML (AJAX).

- **GERAR MODAL COM DADOS DA TAREFA A SER EDITADA:** (*getTaskForEdition.js*) Ao clicar no botão de edição de uma tarefa, o id da tarefa é passado como parâmetro para uma função que enviará uma request HTTP ao controller das tarefas, que por sua vez buscará no banco de dados as informações da tarefa em questão e as retornará em formato JSON. Por fim, os atributos 'value' dos inputs dos dados da tarefa (contidos no modal bootstrap) são carregados com os resultados retornados. 

- **FILTRAR A EXIBIÇAO DE TAREFAS POR MEIO DE MENUS DE OPÇÕES:** (*generateTaskList.js*) O evento 'change' do select para a data e cômodo da tarefa envia uma request HTTP para o controller das tarefas com esses valores. Assim, a consulta ao banco de dados é realizada com um 'filtro' e os elementos HTML das tarefas são geradas dinamicamente via javascript. **OBS: Para gerar elementos já estilizados via javascript mais facilmente, o helper *elementWithAttributes.js* foi criado.**

- **ATUALIZAR QUANTIDADE DE TAREFAS REALIZADAS:** Conforme os elementos HTML das tarefas selecionadas pelo filtro (especificado na requisição anterior)selecionado, é feita uma contagem do número total de tarefas selecionadas e quantas dessas estão completas. Ao final, um elemento contador tem seu valor atualizado.
