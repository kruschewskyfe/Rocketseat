------- Desafio 1 -------

Configure uma aplica��o utilizando ExpressJS, Nunjucks, EditorConfig e ESLint.

----- *Rotas* -----
/ : Rota inicial que renderiza uma p�gina com um formul�rio com um �nico campo age
que representa a idade do usu�rio;
/check : Rota chamada pelo formul�rio da p�gina inicial via m�todo POST que checa se a
idade do usu�rio � maior que 18 e o redireciona para a rota /major , caso contr�rio o
redireciona para a rota /minor (Lembre de enviar a idade como Query Param no
redirecionamento);
/major : Rota que renderiza uma p�gina com o texto: Voc� � maior de idade e
possui x anos , onde x deve ser o valor informado no input do formul�rio;
/minor : Rota que renderiza uma p�gina com o texto: Voc� � menor de idade e
possui x anos , onde x deve ser o valor informado no input do formul�rio;

----- *Middlewares* -----
Deve haver um middleware que � chamado nas rotas /major e /minor e checa se a
informa��o de idade n�o est� presente nos Query Params. Se essa informa��o n�o existir deve
redirecionar o usu�rio para a p�gina inicial com o formul�rio, caso contr�rio o middleware deve
apenas continuar com o fluxo normal.