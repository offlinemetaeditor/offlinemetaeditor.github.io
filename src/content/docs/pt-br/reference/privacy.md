---
title: Privacidade e segurança
description: Onde ficam seus dados e seu token de acesso, o que o editor envia e para quem, e como apagar tudo.
---

O Offline Meta Editor roda no seu computador. Você não precisa criar conta com a gente, e seus dados nunca
passam por um servidor nosso: o editor fala direto com a Meta, usando o seu token. A versão formal é a
[política de privacidade](/pt-br/privacy-policy/), e a página [Exclusão de dados](/pt-br/data-deletion/)
explica como apagar tudo.

## Com quem o editor fala

- **A Graph API da Meta** (`graph.facebook.com`): para baixar suas contas, conferir e enviar suas
  alterações, pesquisar locais e interesses, e ler contagens de eventos e públicos.
- **Os servidores de imagem da Meta**: para mostrar miniaturas e pré-visualizações, a partir dos links que a
  Meta manda nas respostas.
- **O nosso servidor de login**, só quando você clica em **Log in with Facebook**: a Meta manda o seu
  navegador de volta para ele, ele entrega a resposta da Meta ao editor e, quando precisa, estende o token
  para cerca de 60 dias. Ele não guarda nada.

Só isso. O editor não envia analytics, dados de uso nem relatórios de falhas. Quando você clica em
**Meta's preview** ou em um link para uma publicação, a página abre no seu navegador.

## Seu token de acesso

- Ele é lido da variável de ambiente ou do Gerenciador de Credenciais do Windows, ou usado só durante a
  sessão, quando você cola o token dessa forma.
- O editor nunca mostra o token (Settings mostra os três primeiros caracteres e o tamanho dele), nunca o
  grava em arquivo e nunca o coloca nos logs.
- Ele só é enviado à Meta, junto com cada requisição, e ao nosso servidor de login durante o login com o
  Facebook.
- O editor salva o token no Gerenciador de Credenciais sozinho, pelas funções de credenciais do próprio
  Windows, então nenhum outro programa vê o token.

## Seus dados

Tudo o que o editor baixa (as contas, pixels, públicos, miniaturas) e tudo o que você edita fica na
[pasta de dados](/pt-br/reference/settings-and-data/#pasta-de-dados) no seu computador,
`%LOCALAPPDATA%\meta-ads-editor`. Apague essa pasta para remover tudo.

## Listas de clientes

Quando você cria um público a partir de uma lista de clientes, e-mails, telefones e nomes são normalizados e
**transformados em hash SHA-256 no seu computador**. Só os hashes vão para a Meta, como a Meta exige.

## Este site

Esta documentação é um site estático hospedado no GitHub Pages. Ela não tem cookies nem analytics próprios.
O GitHub pode registrar as visitas, conforme a declaração de privacidade dele.
