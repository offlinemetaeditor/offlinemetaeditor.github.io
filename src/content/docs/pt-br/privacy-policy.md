---
title: Política de privacidade
description: Como o Offline Meta Editor e o login com o Facebook dele, o Offline Ads Editor, tratam os seus dados.
---

_Última atualização: 16 de novembro de 2026_

Esta política vale para o Offline Meta Editor, um programa de computador que edita contas de anúncio da
Meta, e para o login com o Facebook dele, que o Facebook mostra como **Offline Ads Editor**. Quem publica o
editor é a **Gorgal Marketing LTDA**, no Brasil, responsável pelos dados descritos aqui.

Contato: [lucas@gorgal.com](mailto:lucas@gorgal.com)

## Resumo

- O editor roda no seu computador, e o que ele baixa da Meta fica lá.
- Não guardamos seus dados em servidor nenhum, não vendemos nem compartilhamos esses dados, e o editor não
  envia analytics.
- O único servidor nosso é o de login. Ele conclui o seu login com o Facebook e não guarda nada.

## O que o editor recebe da Meta

Quando você entra com o Facebook e aprova o Offline Ads Editor, a Meta entrega ao editor um token de acesso
com estas permissões:

| Permissão | O que o editor faz com ela |
|---|---|
| `public_profile` | Mostra o seu nome, para você saber qual conta do Facebook está conectada |
| `ads_read` | Baixa suas contas de anúncio, campanhas, conjuntos de anúncios, anúncios, públicos e pixels, e os resultados deles |
| `ads_management` | Confere suas alterações com a Meta e envia essas alterações quando você pede |
| `business_management` | Lista as contas de anúncio dos seus portfólios empresariais |
| `pages_show_list` | Lista as Páginas do Facebook em nome das quais seus anúncios podem rodar |
| `pages_read_engagement` | Lê o nome e a foto dessas Páginas e as contas do Instagram ligadas a elas |

O editor usa esses dados só para mostrar suas contas a você e fazer as alterações que você pedir. Ele não
muda nada na Meta até você enviar.

## Onde ficam seus dados

- **No seu computador.** As contas que você baixa, suas edições, suas configurações e as miniaturas de
  imagens ficam na pasta de dados do editor (`%LOCALAPPDATA%\meta-ads-editor` no Windows, veja
  [Configurações e pasta de dados](/pt-br/reference/settings-and-data/)).
- **Seu token de acesso** fica no cofre de senhas do sistema (o Gerenciador de Credenciais do Windows). O
  editor só envia o token à Meta e, durante o login, ao nosso servidor de login.
- O editor fala com a Graph API da Meta (`graph.facebook.com`) e carrega imagens dos servidores da Meta. Ele
  não envia nada para nós.

## O servidor de login

Quando você clica em **Log in with Facebook**, a Meta manda o seu navegador de volta para um pequeno
servidor nosso no Cloudflare Workers (`offline-ads-editor.lucas1gorgal.workers.dev`). Ele entrega a resposta
da Meta ao editor no seu computador e, quando precisa, usa o segredo do app para estender o seu token para
cerca de 60 dias. Ele não tem banco de dados e não registra nem guarda tokens. A Cloudflare roda esse
servidor como nossa prestadora de serviço.

## Compartilhamento

Não vendemos, alugamos nem compartilhamos seus dados. Além da Meta, que fornece os dados, a única empresa
envolvida é a Cloudflare, que roda o servidor de login. Se você conectar um agente de IA ao editor
(`mae mcp`), esse agente lê seus dados locais sob o seu controle e conforme os termos do fornecedor dele.

## Por quanto tempo guardamos

Não guardamos nenhum dado seu da Meta: eles ficam no seu computador até você apagar. Se você nos mandar um
e-mail, guardamos esse e-mail só pelo tempo necessário para responder.

## Exclusão dos seus dados

Veja [Exclusão de dados](/pt-br/data-deletion/). Em resumo: apague o token salvo no editor, apague a pasta
de dados e remova o Offline Ads Editor das integrações comerciais do seu Facebook.

## Seus direitos

Você pode nos perguntar, em [lucas@gorgal.com](mailto:lucas@gorgal.com), quais dados temos sobre você e
pedir que sejam corrigidos ou apagados. A LGPD, no Brasil, e leis como o GDPR, na União Europeia, garantem
esses direitos e o direito de reclamar à autoridade de proteção de dados (no Brasil, a ANPD).

## Menores de idade

O editor é uma ferramenta para quem gerencia anúncios de empresas. Ele não é destinado a menores de 18 anos.

## Mudanças

Quando esta política mudar, atualizamos esta página e a data no topo.
