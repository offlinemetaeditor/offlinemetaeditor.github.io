---
title: Conferir e enviar
description: Como o Check valida suas alterações com a Meta, o que a janela do Push mostra e o que acontece quando a Meta recusa algo ou o limite da API é atingido.
---

Cada edição que você faz fica esperando no seu computador como uma alteração pendente. A barra de
ferramentas conta quantas são: **⬆ Push 3 changes**. Dois botões enviam essas alterações para a Meta.

## Conferir

**✔ Check** (<kbd>Ctrl</kbd>+<kbd>K</kbd>) manda todas as alterações pendentes para a Meta no modo
*validate only* (só validar): a Meta faz todas as verificações dela (orçamentos, segmentação, políticas,
campos obrigatórios) e não aplica nada. A resposta de cada alteração aparece na aba **Results**, embaixo.
Confira quantas vezes quiser.

## Enviar

**⬆ Push N changes** (<kbd>Ctrl</kbd>+<kbd>P</kbd>) abre a janela **Upload changes to Meta**, com tudo o que
vai acontecer, agrupado por tipo: quantos itens serão criados, atualizados e excluídos e, para cada item, os
campos com os valores antigos e novos. Nessa janela:

- **✔ Check first (validate only)** faz uma conferência sem sair da janela;
- **Overwrite even if changed on Meta since download**: veja [Conflitos](#conflitos);
- **Pause between writes (ms)**: a Meta limita rajadas de edições, e o padrão (300 ms) fica longe desse
  limite;
- **⬆ Push N change(s) now** envia as alterações; **Cancel** fecha a janela sem enviar nada.

O editor envia primeiro as campanhas, depois os conjuntos de anúncios, depois os criativos e por fim os
anúncios, para que conjuntos de anúncios novos possam entrar em campanhas novas. Os ids temporários
(`new_1`…) são trocados pelos ids reais da Meta à medida que os itens são criados. A conta é salva no seu
computador depois de cada gravação bem-sucedida: se o envio parar no meio, envie de novo e ele continua de
onde parou.

**✖ Cancel**, na barra de ferramentas, interrompe o envio depois que terminam as requisições que já estão a
caminho.

## Quando a Meta recusa algo

Uma alteração que a Meta recusa continua pendente, com um **!** vermelho na tabela e *Last error* no painel
Properties, com a mensagem da Meta. O resto do envio segue, menos o que depende dela: os anúncios de um
conjunto de anúncios que a Meta se recusou a criar esperam por ele. Corrija o campo e envie de novo.

Recusas comuns e o que fazer:

| A Meta diz | O que fazer |
|---|---|
| O pixel ou o evento de um conjunto de anúncios publicado não pode mudar | Duplique o conjunto de anúncios, defina o evento na cópia e pause o antigo |
| A janela de atribuição de um conjunto de anúncios que já existe não pode mudar | O mesmo: defina a janela em um conjunto duplicado |
| O conjunto de anúncios tem orçamento próprio, mas a campanha dele usa orçamento da campanha | Tire o orçamento do conjunto de anúncios ou o da campanha |
| O token não tem `ads_management` | Use um token com essa permissão ([Token de acesso](/pt-br/access-token/)) |

## Conflitos

Antes de gravar, o editor lê de novo os itens que vai mudar. Se alguém mudou **o mesmo campo** no
Gerenciador de Anúncios depois do seu download, essa alteração é pulada e aparece como **CONFLICT**, para
você não sobrescrever o trabalho da outra pessoa sem querer. Baixe de novo para ver o valor dela (suas outras
edições continuam), ou marque **Overwrite even if changed on Meta since download** para enviar o seu mesmo
assim.

## Limites da API

A Meta limita quantas chamadas cada conta de anúncios e cada app podem fazer. A barra de ferramentas mostra
o uso da conta depois do nome dela (**API 52%**; âmbar a partir de 75%, vermelho a partir de 90%). O editor
desacelera a partir de 75% e, quando a Meta bloqueia a conta, para na hora, guarda o que já foi feito e avisa
quando as chamadas voltam a funcionar, por exemplo *API limited until 18:42*. Espere até lá: tentar de novo
deixa o bloqueio da Meta mais longo. Veja
[Como funciona a sincronização](/pt-br/reference/how-sync-works/#limites-da-api).

## Depois do envio

As alterações enviadas deixam de ser pendentes, os itens novos recebem os ids reais e a aba **Results** lista
o que foi feito. Anúncios com conteúdo novo passam de novo pela análise da Meta, como aconteceria no
Gerenciador de Anúncios.
