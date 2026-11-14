---
title: Solução de problemas e perguntas frequentes
description: O que fazer quando o token, os limites da Meta ou um envio atrapalham, e respostas para dúvidas comuns.
---

## Problemas

### "No Meta access token found"

O editor não encontrou nenhum token na variável de ambiente nem no Gerenciador de Credenciais. Cole um token
em **⚙ Settings** e clique em **Use for this session** ou **Save**. Veja [Token de acesso](/pt-br/access-token/).

### O botão Save não guarda o token

O **Save** usa o PowerShell SecretManagement, que o Windows não traz por padrão. Faça uma vez a
[configuração inicial](/pt-br/access-token/#salvar-no-gerenciador-de-credenciais-do-windows) ou, em vez disso,
guarde o token na variável de ambiente `META_ACCESS_TOKEN`.

### Erro 190, ou "invalid or expired" em Settings

O token expirou, foi revogado ou a pessoa que o criou perdeu o acesso. Gere um novo e passe esse token para o
editor. Nada do que está no seu computador se perde.

### "Missing ads_management" (ou ads_read)

Falta uma permissão no token. Sem `ads_read`, nada é baixado; sem `ads_management`, nada é enviado. Gere um
token com as duas.

### "API limited until 18:42"

A Meta bloqueou as chamadas dessa conta por um tempo. Espere até o horário mostrado: tentar de novo deixa o
bloqueio mais longo. Suas edições estão seguras, e um envio interrompido continua de onde parou. Veja
[Limites da API](/pt-br/reference/how-sync-works/#limites-da-api).

### Uma alteração mostra CONFLICT

Alguém mudou o mesmo campo na Meta depois do seu download. Baixe de novo para ver o valor dessa pessoa (suas
outras edições são mantidas) e então decida; ou envie com a opção
**Overwrite even if changed on Meta since download**.

### A Meta se recusa a mudar o evento de conversão ou a atribuição

A Meta trava os dois assim que o conjunto de anúncios é publicado. Duplique o conjunto, defina os dois na
cópia, pause o original e envie.

### Um anúncio voltou para análise depois que mudei o texto

Isso é esperado. A Meta não deixa ninguém editar um criativo, então o anúncio ganha um criativo novo com o seu
texto, e criativos novos passam por análise. O Gerenciador de Anúncios faz a mesma coisa nos bastidores.

### O download parou e diz que um arquivo não pode ser lido

O arquivo da conta no seu computador existe, mas está corrompido ou travado por outro programa. O editor para
em vez de substituir o arquivo, então suas edições pendentes não se perdem. Feche outros programas que possam
estar usando o arquivo, ou tire da pasta `workspaces` o arquivo indicado no log e baixe de novo.

### As imagens não aparecem

Miniaturas e pré-visualizações vêm da Meta na primeira vez que aparecem e depois ficam guardadas para uso
offline. Sem internet, imagens que nunca foram vistas não aparecem. Os links de imagem da Meta expiram, e o
editor pede links novos à Meta quando isso acontece.

### O editor fechou sozinho

Ele gravou o que aconteceu no `crash.log`, na [pasta de dados](/pt-br/reference/settings-and-data/#pasta-de-dados),
e mostra esse registro na aba Log na próxima vez que abrir. Suas edições até aquele momento estão salvas. Se
for relatar o problema, inclua esse arquivo (ele não contém nenhum token).

### O Windows diz que o programa não é seguro

Os programas ainda não têm assinatura de código, então o SmartScreen mostra um aviso na primeira vez que você
abre. Clique em **Mais informações** e depois em **Executar assim mesmo**.

## Perguntas

### Este é um produto oficial da Meta?

Não. O Offline Meta Editor é uma ferramenta independente que usa a Marketing API pública da Meta, com o seu
próprio token de acesso.

### Ele muda alguma coisa na Meta sem eu saber?

Não. Suas edições só chegam à Meta quando você envia, depois de ver a lista e confirmar. As exceções são as
ações para as quais a Meta não tem rascunho: criar, renomear e excluir públicos e conversões personalizadas,
que valem na hora (excluir pede confirmação antes). Os downloads, o Check e as buscas só leem dados.

### Posso usar com várias contas de anúncios?

Sim. Baixe quantas quiser e abra cada uma em uma aba. Cada conta é um arquivo separado.

### Duas pessoas podem editar a mesma conta?

Cada pessoa tem a própria cópia. Se as duas mudarem o mesmo campo, o segundo envio acusa um
[conflito](/pt-br/reference/how-sync-works/#conflitos) em vez de sobrescrever.

### Funciona no Mac ou no Linux?

Por enquanto, não: os programas são para Windows 10 e 11.

### Posso enviar imagens e vídeos novos?

Ainda não. Envie as imagens e os vídeos pelo Gerenciador de Anúncios e depois escolha esses arquivos na seção
Media do anúncio.

### Funciona com um antivírus que inspeciona HTTPS?

Sim. O editor confia nos mesmos certificados que o Windows, então funcionam os antivírus que inspecionam
conexões seguras com um certificado que eles instalaram no Windows.
