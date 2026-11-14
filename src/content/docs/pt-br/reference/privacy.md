---
title: Privacidade e segurança
description: Onde ficam seus dados e seu token de acesso, o que o editor envia e para quem, e como apagar tudo.
---

O Offline Meta Editor roda no seu computador. Você não precisa criar conta com a gente, e não existe nenhum
servidor nosso no meio do caminho: o editor fala direto com a Meta, usando o seu token.

## Com quem o editor fala

- **A Graph API da Meta** (`graph.facebook.com`): para baixar suas contas, conferir e enviar suas
  alterações, pesquisar locais e interesses, e ler contagens de eventos e públicos.
- **Os servidores de imagem da Meta**: para mostrar miniaturas e pré-visualizações, a partir dos links que o
  Meta manda nas respostas.

Só isso. O editor não envia analytics, dados de uso nem relatórios de falhas. Quando você clica em
**Meta's preview** ou em um link para uma publicação, a página abre no seu navegador.

## Seu token de acesso

- Ele é lido da variável de ambiente ou do Gerenciador de Credenciais do Windows, ou usado só durante a
  sessão, quando você cola o token dessa forma.
- O editor nunca mostra o token (Settings mostra os três primeiros caracteres e o tamanho dele), nunca o
  grava em arquivo e nunca o coloca nos logs.
- Ele só é enviado à Meta, junto com cada requisição.
- Para salvar o token no Gerenciador de Credenciais, o editor entrega o token ao PowerShell pela entrada
  padrão, nunca numa linha de comando que outros programas poderiam ver.

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
