---
title: Token de acesso
description: De qual token de acesso da Meta o editor precisa, como conseguir um e as três formas de passá-lo ao editor.
---

O editor se comunica com a Marketing API da Meta por meio de um token de acesso: uma sequência longa de
caracteres que começa com `EAA`. Ele age com as suas permissões, então chega às mesmas contas de anúncios que você
acessa no Gerenciador de Anúncios.

## Permissões

| Permissão | Necessária para |
|---|---|
| `ads_read` | Baixar contas, conferir alterações, buscar localizações e interesses |
| `ads_management` | Enviar alterações e criar públicos e conversões personalizadas |

A janela Settings mostra um aviso vermelho quando falta alguma das duas ao token. Dependendo de como o seu negócio
está configurado, nomes de páginas, fotos de perfil ou nomes de usuário do Instagram podem exigir também permissões
de página ou do Instagram; sem elas, esses dados aparecem como ids, e a edição continua funcionando.

## Como conseguir um token

A Meta muda essas telas com frequência, então os nomes abaixo podem ser um pouco diferentes.

**Para o dia a dia: um token de usuário do sistema.** No Meta Business Suite, abra *Configurações do negócio →
Usuários → Usuários do sistema*, adicione um usuário do sistema, dê a ele acesso às suas contas de anúncios (e às
páginas em nome das quais os anúncios rodam) e clique em **Gerar novo token**. Selecione o seu app, marque
`ads_read` e `ads_management` e escolha a validade. O token de um usuário do sistema pode ser configurado para
nunca expirar. Para isso você precisa de um app da Meta, que você cria uma única vez em
[developers.facebook.com](https://developers.facebook.com/apps/).

**Para um teste rápido: o Explorador da Graph API.** Abra o
[Explorador da Graph API](https://developers.facebook.com/tools/explorer/), escolha o seu app, adicione as
permissões `ads_read` e `ads_management` e clique em **Generate Access Token**. Esse token dura cerca de uma hora.
Cole o token no [Depurador de Token de Acesso](https://developers.facebook.com/tools/debug/accesstoken/) e clique
em **Extend Access Token** para conseguir um que dure cerca de 60 dias.

:::tip
Todo token também tem uma data de *acesso aos dados*, depois da qual a Meta pede que a pessoa autorize o app de
novo. O **Test token**, na janela Settings, mostra as duas datas.
:::

## Como passar o token para o editor

Um token colado para a sessão é usado até o editor fechar. Fora isso, o editor procura um token nesta ordem:

1. A variável de ambiente `META_ACCESS_TOKEN`.
2. O Gerenciador de Credenciais do Windows, lido por meio do PowerShell SecretManagement.

### Colar só para esta sessão

Abra **⚙ Settings** (<kbd>Ctrl</kbd>+<kbd>,</kbd>), cole o token em *Use a different access token* e clique em
**Use for this session**. Nada fica guardado: quando o editor fecha, o token vai embora. Esse é o jeito mais
simples de começar.

### Guardar numa variável de ambiente

Defina `META_ACCESS_TOKEN` para o seu usuário do Windows, no PowerShell:

```powershell
[Environment]::SetEnvironmentVariable('META_ACCESS_TOKEN', 'EAA...your token...', 'User')
```

Feche e abra o editor de novo para ele enxergar a variável. A variável é verificada primeiro, então ela tem
prioridade sobre um token salvo. Lembre-se de que as variáveis de ambiente ficam em texto puro no seu perfil do
Windows: qualquer programa que você executar consegue lê-las.

### Salvar no Gerenciador de Credenciais do Windows

O botão **Save**, na janela Settings, guarda o token no Gerenciador de Credenciais do Windows por meio do
PowerShell SecretManagement. Isso exige uma configuração única no PowerShell (responda *Yes* se ele pedir para
instalar o NuGet ou para confiar na PowerShell Gallery):

```powershell
Install-Module Microsoft.PowerShell.SecretManagement -Scope CurrentUser
Install-Module SecretManagement.JustinGrote.CredMan -Scope CurrentUser
Register-SecretVault -Name Local -ModuleName SecretManagement.JustinGrote.CredMan
```

Depois disso, o **Save** guarda o token como o segredo `Meta-Long-Lived-Access-Token` no cofre `Local`, e o editor
lê o token de lá toda vez que abre. Outros scripts que leem o mesmo segredo também passam a receber o token novo.
Em *Where the token is read from*, na janela Settings, você pode usar outro nome de variável, de segredo ou de
cofre.

Na linha de comando, é a mesma coisa:

```powershell
Get-Clipboard | mae token set     # store the token you copied
mae token status                  # where it comes from, whose it is, permissions, expiry
```

## Testar, sair e excluir

- **Test token** pergunta à Meta a quem o token pertence, por qual app, com quais permissões e quando ele e o
  acesso aos dados dele expiram.
- **Log out** faz o editor parar de usar o token. Um token salvo continua salvo para as suas outras ferramentas, e
  **Log in with the stored token** volta a usá-lo.
- **Delete the stored token…** remove o token do Gerenciador de Credenciais depois de uma confirmação. Todas as
  ferramentas que leem esse token param de funcionar até que um token novo seja salvo.

Linha de comando: `mae token logout`, `mae token login`, `mae token delete --yes`.

## Quando o token para de funcionar

A Meta responde com o erro **190** quando um token expirou, foi revogado ou perdeu o acesso, e o editor avisa isso
no log. Gere um token novo e passe para o editor de qualquer uma das formas acima. As suas contas baixadas e as
edições pendentes não são afetadas: elas continuam no seu computador.

O editor nunca mostra o token (a janela Settings mostra os três primeiros caracteres e o tamanho dele), nunca grava
o token no disco e só o envia para a Meta. Veja [Privacidade e segurança](/pt-br/reference/privacy/).
