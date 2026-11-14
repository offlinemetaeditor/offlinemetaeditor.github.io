---
title: Events Manager e Audiences
description: Os pixels, a atividade de eventos e as conversões personalizadas da conta, e os públicos dela, com os conjuntos de anúncios que usam cada um.
---

**Events Manager** e **Audiences** ficam na barra de ferramentas e no menu **Tools**. Cada um abre em uma
janela própria, ao lado do editor: leve a janela para outro monitor, mude o tamanho dela e deixe aberta
enquanto trabalha. O título da janela mostra a conta da aba ativa e muda junto quando você troca de aba.

Pixels, conversões personalizadas e públicos são baixados junto com a conta, então as duas janelas funcionam
offline. **⟳ Refresh from Meta** baixa tudo isso de novo.

## Events Manager

- **Datasets (pixels)**, ou conjuntos de dados: último evento recebido, correspondência avançada automática,
  cookies próprios e a empresa dona de cada um.
- **Event activity** (atividade de eventos): quantas vezes cada evento chegou nos últimos 7 dias, com uma
  barra por dia. Esses números são lidos da Meta quando você abre o pixel (as contagens da Meta chegam com
  algumas horas de atraso) e ficam guardados para uso offline.
- **Ad sets optimizing on the pixel** (conjuntos de anúncios que otimizam com o pixel), agrupados por
  evento. Clique em um para mostrá-lo no editor.
- **Custom conversions** (conversões personalizadas): o que cada uma conta (por exemplo
  *Purchase where URL contains /thanks*), o último evento dela e os conjuntos de anúncios que otimizam para
  ela. Você pode criar, renomear e excluir conversões.

## Audiences

- **Públicos personalizados, semelhantes e salvos**, com tipo, tamanho, status e quantos conjuntos de
  anúncios incluem ou excluem cada um. Ordene clicando no título de uma coluna, filtre por tipo e pesquise
  por nome ou id.
- **Details** de um público: o que ele coleta (por exemplo
  *website visitors where URL contains /checkout, 14 days*), a origem de um público semelhante e os
  conjuntos de anúncios que usam o público.
- **Include**, **Exclude** ou **Remove** coloca o público nos conjuntos de anúncios selecionados na janela
  principal, ou tira o público deles. É uma edição normal da segmentação desses conjuntos: confira e envie
  como qualquer outra alteração.

### Novos públicos

- **Website visitors** (visitantes do site): um pixel, um evento ou qualquer página, um filtro de URL
  opcional e de 1 a 180 dias.
- **Lookalike** (público semelhante): o público de origem, o país e de 1% a 10%.
- **Customer list** (lista de clientes) a partir de um arquivo CSV. Colunas de e-mail, telefone e nome são
  reconhecidas em inglês ou em português. Cada valor é normalizado (os telefones ganham o código do país a
  partir da moeda da conta) e transformado em hash SHA-256 **no seu computador**: a Meta recebe só os
  hashes.

:::caution[Essas ações valem na Meta na hora]
A Meta não tem rascunho para públicos e conversões personalizadas. Criar, renomear e excluir acontece na
hora, como no Gerenciador de Anúncios (a exclusão pede confirmação antes), e não dá para desfazer com
<kbd>Ctrl</kbd>+<kbd>Z</kbd>. Públicos salvos só podem ser lidos pela API da Meta.
:::
