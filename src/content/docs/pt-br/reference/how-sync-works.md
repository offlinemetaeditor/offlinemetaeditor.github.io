---
title: Como funciona a sincronização
description: O que um download mantém e substitui, em que ordem um envio é feito, como os conflitos são detectados e como o editor lida com os limites da API da Meta.
---

## Duas versões de tudo

Para cada campanha, conjunto de anúncios, anúncio e criativo, o arquivo da conta guarda duas versões:
**a da Meta**, do último download, e **a sua**. Uma alteração pendente é um campo em que as duas são
diferentes. É por isso que o editor consegue mostrar o valor da Meta ao lado do seu, reverter um único campo e
saber exatamente o que enviar.

Itens novos existem só na sua versão, com um id temporário (`new_1`, `new_2`…), até que um envio os crie.

## Baixar de novo

Um download junta três coisas: o que a Meta tem agora, o que a Meta tinha no seu último download e as suas
edições.

- Os campos que você **não** mudou recebem o valor atual da Meta.
- Os campos que você **mudou** ficam com o seu valor.
- Se a Meta também mudou um campo que você mudou, aparece um aviso de conflito no log, e o seu valor é mantido.
- Itens excluídos na Meta desaparecem, a menos que você tenha editado esses itens.

Por isso você pode baixar de novo a qualquer momento sem perder trabalho. Se o arquivo da conta existe mas não
pode ser lido, o download para em vez de substituí-lo, e o log indica qual arquivo mover para outro lugar.

**Velocidade.** Campanhas, conjuntos de anúncios e anúncios são baixados em paralelo, e o conteúdo de cada
criativo é buscado uma vez só, não importa quantos anúncios o compartilhem. A Meta nunca muda o conteúdo de um
criativo, então os downloads seguintes pulam os criativos que já têm: o primeiro download de uma conta com
2.000 anúncios leva cerca de 20 segundos, e os seguintes, poucos segundos.

## Enviar

1. O editor monta a lista de operações a partir das suas alterações pendentes: o que criar, atualizar e excluir.
2. Ele lê de novo na Meta os itens que vai mudar, para encontrar [conflitos](#conflitos).
3. Ele envia primeiro as campanhas, depois os conjuntos de anúncios, os criativos e os anúncios, para que um
   conjunto de anúncios novo possa entrar em uma campanha nova, e um anúncio novo, em um conjunto novo. Os ids
   temporários são trocados pelos ids da Meta à medida que os itens são criados.
4. Depois de cada gravação bem-sucedida, ele salva o arquivo da conta. Um envio interrompido simplesmente
   continua de onde parou na próxima vez.

**Criativos nunca são editados.** A Meta não permite. Um anúncio alterado ganha um criativo novo com o seu
conteúdo, criado logo antes de o anúncio ser atualizado; os links das imagens são renovados imediatamente antes,
porque os links de imagem da Meta expiram.

## Conflitos

Se alguém mudou **o mesmo campo** no Gerenciador de Anúncios depois do seu download, o envio pula essa
alteração e mostra **CONFLICT**, para você não sobrescrever o trabalho da outra pessoa sem ver. Baixe de novo
para ver o valor novo (suas outras edições continuam), ou envie com a opção
**Overwrite even if changed on Meta since download** (`--force` na linha de comando).

## Limites da API

A Meta limita as chamadas que cada conta de anúncios e cada app podem fazer, e informa o uso em cada resposta.
O editor:

- mostra o uso da conta depois do nome dela na barra de ferramentas, **API 52%** (âmbar a partir de 75%,
  vermelho a partir de 90%); passe o mouse em cima para ver todos os contadores;
- vai mais devagar conforme o uso aumenta (2 segundos entre chamadas a partir de 75%, 8 segundos a partir de
  90%);
- **para na hora** quando a Meta bloqueia a conta, mantém o que já foi feito e mostra quando as chamadas
  voltam a funcionar, por exemplo *API limited until 18:42*. O bloqueio da Meta costuma durar de 15 a 30
  minutos, e tentar de novo deixa o bloqueio mais longo;
- espera passar os limites curtos da Meta por chamada (como "1 call per 30 seconds") e tenta mais uma vez.

`mae limits` lê o uso da conta com uma chamada leve. Apps no nível de acesso de desenvolvimento da Meta têm
limites bem menores que os apps com acesso padrão.

Downloads e envios podem ser cancelados com **✖ Cancel** na barra de ferramentas. Um download cancelado
enquanto busca os criativos mantém todo o resto, e o próximo download busca os criativos que faltaram.
