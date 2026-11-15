---
title: Agentes de IA (MCP)
description: "Deixe o Claude ou outro agente de IA ler e alterar as suas contas de anúncios pelo editor. Nada chega à Meta até você enviar."
---

O `mae mcp` transforma o editor em um servidor MCP. O MCP é o jeito padrão de agentes de IA, como o Claude Code e o
Claude Desktop, usarem outros programas. O agente trabalha na mesma cópia da conta que a janela do editor: pode
ler, alterar e pedir à Meta que confira as alterações. Nada chega à Meta até você enviar.

## O que um agente pode fazer

- **Ler** as contas deste computador: campanhas, conjuntos de anúncios e anúncios com status, veiculação,
  orçamento e alterações pendentes, e tudo sobre um item, inclusive os textos de um anúncio, a imagem ou o vídeo de
  cada posicionamento, a página do Facebook e a conta do Instagram.
- **Alterar** campos, status, orçamentos (`+20%`, `-15%` ou `=50.00`), nomes, os textos e as mídias de um anúncio,
  a segmentação (lugares e interesses da busca da Meta, idades, gênero, públicos personalizados), cópias e itens
  novos, e tabelas inteiras de alterações, como a [importação de planilha](/pt-br/guides/spreadsheets/) faz. Cada
  alteração fica pendente, como se você tivesse feito no editor.
- **Revisar**: listar o que um envio mandaria, campo a campo, e pedir à Meta que confira sem aplicar nada, como o
  **Check** faz.
- **Baixar** uma conta ou atualizá-la, ler os pixels e os públicos, os eventos recentes de um pixel e a
  pré-visualização da Meta de um anúncio.

O agente segue as regras do editor: valores na unidade normal da moeda, uma alteração no conteúdo de um anúncio dá
a esse anúncio a sua própria cópia do criativo, e um download mantém as alterações que ainda não foram enviadas. Ele
não tem dados de desempenho (gasto, resultados): o editor não baixa esses dados.

## Adicionar ao seu agente

O agente abre o `mae.exe` sozinho. Diga a ele onde o arquivo está (aqui, em `C:\Programs\Offline Meta Editor`).

**Claude Code.** Rode uma vez no PowerShell:

```powershell
claude mcp add --scope user meta-ads-editor -- "C:\Programs\Offline Meta Editor\mae.exe" mcp
```

**Claude Desktop e outros agentes** leem um arquivo de configuração com uma lista de servidores MCP (no Claude
Desktop, o `claude_desktop_config.json`). Acrescente o editor e reinicie o agente:

```json
{
  "mcpServers": {
    "meta-ads-editor": {
      "command": "C:\\Programs\\Offline Meta Editor\\mae.exe",
      "args": ["mcp"]
    }
  }
}
```

O agente usa o [token de acesso](/pt-br/access-token/) do editor e nunca vê o token. Com várias contas baixadas, o
agente diz qual usar a cada vez, ou você define uma: `mae.exe -a act_1234567890 mcp`.

## Com o editor aberto

O agente e a janela do editor podem trabalhar na mesma conta ao mesmo tempo. O que o agente altera aparece na
janela em um ou dois segundos, como alterações pendentes, e o **Ctrl+Z** na janela desfaz. Um lado não grava por
cima das alterações do outro. Quando os dois mudam o mesmo campo do mesmo item, fica o valor salvo por último, e o
registro da janela avisa.

## Enviar

Por padrão o agente não envia. Quando as alterações dele estiverem prontas, revise no editor e clique em
**Push**, ou rode `mae push`.

Para deixar o agente enviar também, use `mae mcp --allow-push` no comando acima. Aí o agente precisa mostrar
antes a lista de alterações pendentes, e o envio só acontece se as alterações ainda forem exatamente aquelas. Se
algo mudou depois da lista, o agente tem que mostrar de novo. Agentes como o Claude Code também pedem a sua
permissão antes de enviar, a não ser que você tenha liberado de vez.

:::caution
Anúncios que ficam ativos começam a gastar dinheiro. Deixe o envio com você, a não ser que leia cada lista que o
agente mostrar.
:::

## O que pedir

- "Na campanha Black Friday, aumente em 15% o orçamento de todos os conjuntos ativos e pause os de Portugal."
- "Troque o título de todos os anúncios do conjunto Remarketing para 'Último dia' e confira as alterações com a
  Meta."
- "Copie o conjunto Curitiba com os anúncios para a campanha Leads, para mulheres de 25 a 45 anos, e deixe
  pausado."
- "Liste os anúncios que a Meta reprovou e o que ela disse sobre cada um."
