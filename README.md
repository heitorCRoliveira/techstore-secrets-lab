# Problema encontrado

Examinando os arquivos acessíveis do repositório, encontrei problemas concretos de gerenciamento de segredos. 

1. Credenciais armazenadas no arquivo .env

Arquivo: github.com

O arquivo contém senha de banco de dados, chave de API de pagamento e token de comunicação interna. Como está versionado no repositório público, esses valores podem ser consultados por qualquer pessoa. 


Correção: retirar o arquivo real do versionamento, adicionar .env ao .gitignore e manter um .env.example com valores fictícios.

2. Credenciais expostas em arquivo JSON

Arquivo: github.com

O arquivo contém usuário e senha de banco, uma chave de pagamento e um token interno em texto puro. Isso demonstra que proteger apenas o .env não resolve o problema se outras configurações também contiverem segredos. 


Correção: remover as credenciais do JSON e carregá-las de variáveis de ambiente ou de um gerenciador de segredos.

3. Senha fixa no código-fonte

Arquivo: github.com

A configuração do banco contém uma senha literal e um usuário privilegiado chamado techstore_root. Isso dificulta a rotação de credenciais e pode permitir acesso excessivo se os dados forem utilizados em um ambiente real. 


Correção: externalizar as credenciais e usar uma conta de banco com privilégios mínimos.

4. Senhas fixas e configuração arriscada no Docker Compose

Arquivo: github.com

O arquivo apresenta senhas fixas para a aplicação e para o MySQL, incluindo a conta root. Também publica a porta 3306 do banco no host. Isso aumenta a exposição do serviço, especialmente se o computador ou servidor estiver acessível pela rede. 


Correção: usar variáveis de ambiente ou secrets apropriados, restringir a porta do banco e remover credenciais duplicadas ou conflitantes.

5. Possível exposição de segredos nos logs de backup

Arquivo: github.com

O script tenta imprimir um valor identificado como chave de API. Além disso, utiliza uma variável diferente daquela carregada de process.env, o que indica um possível erro de execução. 


Correção: nunca imprimir o valor da chave nos logs, usar a variável de ambiente correta e validar sua existência sem revelar seu conteúdo.

6. Histórico Git potencialmente contendo segredos

Mesmo que você apague uma senha do arquivo atual, ela pode continuar acessível em commits anteriores. O repositório público precisa ser verificado também no histórico, não apenas no estado atual. 


Correção: executar uma ferramenta de varredura histórica, como o Gitleaks. Se houver credenciais reais, revogá-las ou rotacioná-las; apagar o arquivo não invalida uma credencial já exposta.

