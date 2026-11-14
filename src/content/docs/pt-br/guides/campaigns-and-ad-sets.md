---
title: Campanhas e conjuntos de anúncios
description: Como editar nomes, status, orçamentos e programação, além da conversão, da segmentação, da atribuição e do limite de frequência de um conjunto de anúncios.
---

Clique em uma campanha ou em um conjunto de anúncios e os campos dele aparecem em **Properties**, à direita.
Toda edição fica no seu computador, marcada como pendente, até você [enviar](/pt-br/guides/check-and-push/).

## Nome, status e orçamento

- **Status**: clique no status e escolha Active, Paused, Archived ou Deleted. Na tabela, o status de cada
  linha funciona do mesmo jeito.
- **Orçamentos** são digitados na moeda da conta, com vírgula ou ponto: `50,00` e `50.00` são a mesma
  coisa. Moedas sem centavos (como JPY ou PYG) aceitam só números inteiros. Para não definir orçamento,
  deixe o campo vazio. Quando a campanha tem orçamento próprio, os conjuntos de anúncios dela ficam sem
  orçamento.
- **Bid strategy** (estratégia de lance), **bid amount** (valor do lance) e **spend cap** (limite de gastos)
  ficam na mesma lista.

Os campos que a Meta não deixa mudar depois da criação aparecem em cinza, com uma nota quando você passa o
mouse sobre eles.

## Início e término

Você vê e escolhe os horários pelo **relógio do seu computador**: um calendário e a hora, enviados à Meta
com o fuso horário do seu computador. Quando a conta de anúncios usa outro fuso horário, o horário no fuso
dela aparece embaixo do campo. Com o término vazio, o conjunto de anúncios roda até você parar. Um término
antes do início aparece sinalizado.

## Novas campanhas e conjuntos de anúncios

**➕ New campaign** (no nível Campaigns) cria uma campanha pausada para você preencher. **➕ New ad set** cria
um conjunto de anúncios na campanha selecionada, e **➕ New ad** cria um anúncio no conjunto de anúncios
selecionado. Itens novos têm um id temporário (`new_1`, `new_2`…) até o envio criá-los na Meta.

**Duplicate ▾** copia as linhas selecionadas: **Only the selected** ou **With everything inside** (uma
campanha com seus conjuntos de anúncios e anúncios). As cópias começam pausadas, e datas de início ou término
que já passaram ficam de fora.

## Conversão

Em conjuntos de anúncios que otimizam para conversões, **Conversion** define o **pixel** e o **event**
(evento):

- os eventos padrão que o objetivo da campanha aceita (uma campanha de Leads não aceita Purchase);
- os eventos personalizados que o seu pixel recebe, ou **Another custom event** para digitar um nome exato;
- as conversões personalizadas desse pixel.

**How often does the pixel receive it?** lê os últimos 7 dias do pixel e mostra a contagem de cada evento,
para você ver se algum evento nunca chegou.

:::caution[A Meta trava a conversão depois da publicação]
Depois que um conjunto de anúncios é publicado, a Meta não deixa ninguém mudar o pixel ou o evento dele. Use
**Duplicate** no conjunto de anúncios, escolha o evento na cópia, pause o antigo e envie.
:::

## Segmentação

**Targeting** mostra o público do conjunto de anúncios do jeito que o Gerenciador de Anúncios mostra:

- **Advantage+ audience** (público Advantage+) ligado ou desligado.
- **Places** (localizações), mostradas como etiquetas. Pesquise locais na Meta (países, regiões, cidades e
  outros) para incluir ou excluir. Clique em uma cidade ou em um alfinete para mudar o raio (de 17 a 80 km,
  ou de 10 a 50 mi, para cidades).
- **Age** (idade), idade sugerida, **gender** (gênero) e **languages** (idiomas).
- **Custom audiences** (públicos personalizados) para incluir ou excluir. Eles vêm da janela
  [Audiences](/pt-br/guides/events-and-audiences/).
- **Detailed targeting** (segmentação detalhada): pessoas que correspondem a qualquer item de uma
  lista, *and also* (e também) a qualquer item de outra, *excluding* (excluindo) outras. Pesquise
  interesses, comportamentos, cargos e outras opções da Meta.
- **Placements** (posicionamentos): Advantage+ ou manuais, por plataforma e posição, e **devices**
  (dispositivos).

As pesquisas consultam a Meta enquanto você digita (precisam de internet) e guardam as respostas durante a
sessão. O resto da segmentação continua como está e aparece listado em *Also set*. **Edit as JSON** muda
qualquer parte dela no formato do próprio Meta.

## Atribuição e limite de frequência

- **Attribution** (atribuição: janelas de clique, de visualização e de visualização engajada) pode ser
  definida em conjuntos de anúncios novos e duplicados. A Meta não aceita uma janela nova em um conjunto de
  anúncios que já existe, por isso nesses conjuntos ela fica só para leitura.
- **Frequency cap** (limite de frequência: impressões por pessoa a cada tantos dias) vale para conjuntos de
  anúncios otimizados para alcance.

## Avançado

Campos sem formulário próprio ficam em **Advanced**, no formato JSON da Marketing API. A campanha e o
conjunto de anúncios a que um item pertence ficam em **Details**.
