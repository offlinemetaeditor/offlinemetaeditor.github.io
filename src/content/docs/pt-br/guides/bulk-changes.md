---
title: Alterações em massa, copiar e desfazer
description: Mude muitas linhas de uma vez, copie e cole campanhas, conjuntos de anúncios e anúncios, e desfaça qualquer edição.
---

Selecione as linhas (<kbd>Ctrl</kbd>+clique, <kbd>Shift</kbd>+clique ou <kbd>Ctrl</kbd>+<kbd>A</kbd> para
todas as linhas visíveis) e as ações para elas aparecem acima da tabela. Tudo o que vem a seguir é edição
local: nada chega à Meta até você [enviar](/pt-br/guides/check-and-push/).

## Status

**▶ Activate** e **⏸ Pause** só aparecem quando mudariam alguma coisa
(<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> e <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).
**More ▾ → Archive** arquiva. **🗑 Delete** (ou a tecla <kbd>Delete</kbd>) marca as linhas para exclusão no
envio. Itens que só existem no seu computador somem na hora.

## Orçamentos

**Budget ▾** (<kbd>Ctrl</kbd>+<kbd>B</kbd>), em campanhas e conjuntos de anúncios:

- **−20%**, **−10%**, **+10%**, **+20%** ou **+50%** em todos os orçamentos selecionados;
- **Set to** (definir como) um valor, por exemplo `75,00`; <kbd>Enter</kbd> aplica o valor.

Só mudam as linhas que têm orçamento próprio: para o orçamento da campanha, selecione a campanha; para
orçamentos de conjuntos de anúncios, selecione os conjuntos. A barra de status diz quantos orçamentos
mudaram.

## Nomes

**Rename ▾** muda todos os nomes selecionados de uma vez:

- **Find** e **Replace with** (<kbd>Ctrl</kbd>+<kbd>H</kbd>), para localizar e substituir;
- **Add prefix** e **Add suffix** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd>), para adicionar prefixo e
  sufixo;
- **Capitalization** (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd>), para maiúsculas e minúsculas:
  *Each Word*, *First letter*, *UPPERCASE* ou *lowercase*. *Each Word* e *First letter* só passam as
  primeiras letras para maiúscula, sem mexer no resto, então siglas como "CBO" ficam como estão.

Aperte <kbd>Enter</kbd> em qualquer caixa ou clique em **Rename selected**.

## Duplicar

**Duplicate ▾ → Only the selected** ou **With everything inside** (uma campanha com seus conjuntos de
anúncios e anúncios, um conjunto de anúncios com seus anúncios). As cópias ganham " - Copy" no fim do nome,
começam pausadas e são criadas no envio.

## Copiar, recortar e colar

- <kbd>Ctrl</kbd>+<kbd>C</kbd> copia as linhas selecionadas. Elas também vão para a área de transferência
  como tabela, então uma planilha cola as linhas como células. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>
  copia só os nomes.
- <kbd>Ctrl</kbd>+<kbd>V</kbd> cola cópias, com o que estiver dentro delas: conjuntos de anúncios vão para as
  campanhas selecionadas no nível Campaigns, e anúncios vão para os conjuntos de anúncios selecionados. Sem
  nada selecionado, ou colando na própria campanha ou no próprio conjunto de anúncios, a cópia fica ao lado
  do original. As cópias coladas mantêm o nome e começam pausadas.
- <kbd>Ctrl</kbd>+<kbd>X</kbd> e depois <kbd>Ctrl</kbd>+<kbd>V</kbd> **move** os itens: as cópias são
  feitas onde você cola, e os originais são excluídos no envio. A Meta não deixa mover um conjunto de
  anúncios para outra campanha nem um anúncio para outro conjunto de anúncios, então mover é sempre copiar e
  excluir, e as cópias começam sem os resultados dos originais.

Linhas copiadas de uma planilha abrem em **Import from text** quando você aperta <kbd>Ctrl</kbd>+<kbd>V</kbd>,
para você ver as linhas antes de elas entrarem. Veja [Planilhas](/pt-br/guides/spreadsheets/).

## Reverter e desfazer

- **↺ Revert** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>) deixa as linhas selecionadas como estão no
  Meta. No painel Properties, o **↺** ao lado de um campo restaura só esse campo.
  **Edit → Revert ALL local changes** descarta todas as alterações pendentes da conta.
- <kbd>Ctrl</kbd>+<kbd>Z</kbd> desfaz a última edição e <kbd>Ctrl</kbd>+<kbd>Y</kbd> (ou
  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>) refaz. O menu Edit mostra o nome do passo, por exemplo
  *Undo rename*. Digitar em um campo conta como um passo só, e o editor guarda 100 passos por conta.

O histórico de desfazer recomeça depois de um download ou de um envio. Criar, renomear ou excluir públicos e
conversões personalizadas acontece na Meta na hora, então isso não pode ser desfeito aqui.
