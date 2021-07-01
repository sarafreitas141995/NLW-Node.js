# NLW Valoriza

Api em node.js com acesso a base de dados SQLite. Esta base de dados armazena os utilizadores, tags e elogios. 

## Regras

- Registo do utilizador

 [X] Não é permitido registar mais do que um utilizador com o mesmo e-mail.

 [X] Não é permido registar um utilizador sem email. 


- Registo de TAG

 [X] Não é permitido registar mais do que uma tag com o mesmo nome.

 [X] Não é permitido registar uma tag sem nome.

 [X] Não é permitido o registo das tags ser feito por utilizadores que nao são administradores .

- Registo de elogio 

 [X] Não é permitido um utilizador registar um elogio para si.

 [X] não e permitido registar elogios para utilizadores inválidos.

 [X] o utilizador precisa de estar autenticado na aplicação.
