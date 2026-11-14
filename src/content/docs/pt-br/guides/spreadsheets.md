---
title: Planilhas
description: Exporte um nível para o Excel ou o Google Sheets, edite lá e importe de volta, ou cole linhas direto de uma planilha.
---

Qualquer nível pode ir para uma planilha e voltar como edições locais. É o jeito mais rápido de mudar muitos
valores diferentes de uma vez, como um orçamento diferente para cada conjunto de anúncios.

## Exportar

Em **File → Export to CSV** você escolhe o nível (Campaigns, Ad sets ou Ads). Para exportar só algumas linhas,
selecione as linhas e use **More ▾ → Export selection to CSV**. Os arquivos terminam em `.csv` (vírgula) ou
`.tsv` / `.txt` (tabulação) e são salvos em UTF-8 com BOM, para o Excel mostrar os acentos corretamente.

O arquivo do nível Ads inclui os textos e os parâmetros de URL de cada anúncio. Textos com várias variações são
gravados como uma lista JSON: `["text 1","text 2"]`.

## Importar

**File → Import CSV…** (<kbd>Ctrl</kbd>+<kbd>I</kbd>) lê o arquivo de volta como edições locais, que você depois
confere e envia como sempre.

- Vírgula, ponto e vírgula (o que o Excel salva em português e em outros idiomas) e tabulação são detectados
  automaticamente; o formato "Texto Unicode" do Excel também funciona.
- **Uma célula vazia quer dizer "deixe como está".** Só as células com valor mudam alguma coisa.
- **Uma linha com o `id` vazio cria um item novo.** Conjuntos de anúncios novos precisam de `campaign_id`, e
  anúncios novos precisam de `adset_id`.
- Valores em dinheiro aceitam `1.234,56` e `1,234.56`.
- O nível é identificado pelos nomes das colunas.
- Mudar os textos ou os parâmetros de URL de um anúncio muda só aquele anúncio, como no editor.

A importação termina com um resumo (linhas lidas, itens alterados, criados, erros), os erros vão para o Log e a
tabela passa para **Show: pending changes**, para você ver o que entrou.

## Importar de texto

**File → Import from text…** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>, ou
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>, *Make multiple changes*) pega as linhas da área de transferência
em vez de um arquivo. Copie as linhas no Excel ou no Google Sheets, com a linha de cabeçalho, e pressione
<kbd>Ctrl</kbd>+<kbd>V</kbd> na janela (ou clique em **📋 Paste**). Antes do **Import**, ela mostra quantas linhas
e colunas leu, as primeiras linhas e o nível que encontrou.

Se você pressionar <kbd>Ctrl</kbd>+<kbd>V</kbd> na janela principal com linhas copiadas de uma planilha, esta
janela também abre.

## Copiar linhas do editor

<kbd>Ctrl</kbd>+<kbd>C</kbd> nas linhas selecionadas coloca as linhas na área de transferência como uma tabela, com
as mesmas colunas da exportação. Cole numa planilha, mude o que precisar, copie de volta e cole em **Import from
text**. Dentro do editor, <kbd>Ctrl</kbd>+<kbd>V</kbd> cola cópias dos próprios itens; veja
[Alterações em massa, copiar e desfazer](/pt-br/guides/bulk-changes/#copiar-recortar-e-colar).

Cada importação é um único passo de desfazer: <kbd>Ctrl</kbd>+<kbd>Z</kbd> desfaz a importação inteira.
