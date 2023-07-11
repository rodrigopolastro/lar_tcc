# Trabalho de Conclusão de Curso - Análise e desenvolvimento de Sistemas 

# Lar
O projeto se trata de um sistema de listas de tarefas voltado à gestão e organização dos afazeres da casa, no qual as tarefas são associadas à cômodos e móveis e a interação é feita através de um diagrama representativo da residência do usuário.

# Notas Importantes
## Fluxo das páginas
- **/INDEX:** Home estilo landing page que apresenta o site e direciona para as telas de login e cadastro

- **TASKS/INDEX:** Tela onde se carregam as listas de tarefas juntamente com o diagrama que se modifica dinamicamente

- **CONSTRUCTION/INDEX**: Tela onde se modifica o diagrama da casa, alterando o formato dos cômodos, as cores dos pisos e a localização dos móveis.

**OBS: As demais telas menores da aba de construção e tarefas são carregadas dentro do index, na forma de componentes.** 

## Estrutura de arquivos (Arquitetura MVC)
- **DATABASE:** Script do banco de dados, arquivo de conexão e diagramas representativos. (**OBS:** O script original do banco de dados nunca é apagado, mas consultas posteriores no arquivo lar_database.sql modificam tabelas e colunas.)

- **HELPERS:** Arquivos relacionados à facilitações internas para a escrita do código.

- **MODELS:** Consultas ao banco de dados em arquivos referentes à uma tabela.

- **VIEWS:** - Toda a parte visual da aplicação, incluindo componentes individuis, páginas e arquivos css

- **CONTROLLERS:** Intermediação entre as views e os models. Recebe as requests do usuário e realiza a query necessária contida nos models.
____
### Desenvolvido por
- Arthur de Lima
- Giovanna Silva Diogo
- Juan Octávio Soares Barbosa
- Rodrigo Polastro da Silva
- Otávio Casadei