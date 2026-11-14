---
title: Linha de comando
description: "O mae.exe faz as mesmas operações do editor pelo PowerShell ou por um script: baixar, editar, conferir e enviar."
---

O `mae.exe` usa o mesmo motor e os mesmos arquivos do editor: uma conta baixada em um fica disponível no
outro, e as edições feitas em um ficam pendentes nos dois. Use-o em scripts, tarefas agendadas ou alterações
rápidas.

## Uma sessão típica

```powershell
mae accounts                                   # as contas de anúncios que o seu token alcança
mae pull act_1234567890                        # baixa uma delas (as edições que você já tem são mantidas)
mae ls adsets --search "remarketing"           # encontra o que mudar
mae set 120200000000000001 status=PAUSED       # faz a alteração
mae budget 120200000000000002,120200000000000003 +20%
mae diff                                       # cada alteração pendente, campo a campo
mae check                                      # a Meta valida as alterações e não aplica nada
mae push                                       # envia (pede confirmação antes)
```

## Escolher a conta

Com uma única conta baixada, todos os comandos usam essa conta. Com mais de uma, escolha qual com
`-a act_1234567890` (ou `-a 1234567890`) ou defina a variável de ambiente `MAE_ACCOUNT`.

## Comandos

| Comando | O que faz |
|---|---|
| `accounts` | Listar as contas de anúncios que o seu token pode acessar |
| `local` | Listar as contas já baixadas neste computador |
| `pull` | Baixar ou atualizar uma conta; suas edições são mantidas. `--archived` também traz os itens arquivados; `--campaign <id>` (pode ser repetido) traz só essas campanhas |
| `status` | Resumo das alterações pendentes |
| `diff` | Cada alteração pendente, campo a campo |
| `ls` | Listar itens: `mae ls adsets`, `mae ls ads --parent <ad set>`; também `--search <text>` e `--changed` |
| `show` | Todos os campos de um item, com o seu valor e o da Meta quando forem diferentes: `mae show <id>` |
| `set` | Definir campos: `mae set <ids> status=PAUSED daily_budget=50,00 name="New name"` |
| `text` | Mudar um texto: `mae text <ad or creative id> <slot> <values>`, em que o slot é `primary_text`, `headline`, `description`, `link` ou `call_to_action` |
| `media` | `mae media <ad id>` lista as mídias de um anúncio por posicionamento; `mae media <ad id> <line or all> <image hash or video id>` coloca uma imagem ou um vídeo em uma linha |
| `budget` | `mae budget <ids> +20%`, `-15%` ou `=50,00` |
| `duplicate` | `mae duplicate <id>` (as cópias começam pausadas); `--deep` copia o que está dentro, `--into <parent>` coloca a cópia sob outra campanha ou outro conjunto de anúncios |
| `new` | `mae new campaign`, `mae new adset --parent <campaign>`, `mae new ad --parent <ad set>`; `--name` dá nome ao item |
| `delete` | Marcar itens para exclusão: `mae delete <ids>` (itens que só existem aqui são removidos na hora) |
| `revert` | Descartar alterações pendentes: `mae revert <ids>` ou `mae revert --all` |
| `export` | Exportar um nível para CSV ou TSV: `mae export adsets adsets.csv`; `--delimiter` aceita `,` `;` ou `tab` |
| `import` | Importar um arquivo editado como alterações pendentes: `mae import adsets.csv`; `--kind` quando o nível não pode ser identificado pelas colunas |
| `check` | Pedir à Meta que valide todas as alterações, sem aplicar nada |
| `push` | Enviar as alterações pendentes; opções abaixo |
| `preview` | Link para a pré-visualização da Meta: `mae preview <ad or creative id>`; `--format INSTAGRAM_STORY` (ou `MOBILE_FEED_STANDARD`, `INSTAGRAM_STANDARD`, `INSTAGRAM_REELS`…), `--open` abre a pré-visualização |
| `limits` | Os limites da API da conta neste momento (uma chamada leve) |
| `library` | Pixels, conversões personalizadas e públicos, e onde são usados; `--refresh` baixa tudo de novo |
| `events` | Contagens de eventos de um pixel, lidas na Meta: `mae events [pixel id] --days 7` |
| `audience` | `mae audience <id>` mostra um público; `mae audience <id> include <ad set ids>` (ou `exclude`, `remove`) muda os conjuntos de anúncios, como edição local |
| `token` | O token de acesso: `status`, `set`, `logout`, `login`, `delete`. Veja [Token de acesso](/pt-br/access-token/) |
| `gui` | Abrir o editor |
| `path` | Mostrar o caminho do arquivo da conta |

Ids separados por vírgula (`id1,id2,id3`) funcionam em qualquer comando que aceite vários ids.

## Detalhes

**Texto com id de anúncio ou id de criativo.** `mae text <ad id> …` muda só aquele anúncio, como o editor faz.
`mae text <creative id> …` muda todos os anúncios que usam aquele criativo. Criativos flexíveis aceitam vários
valores: `mae text 1202… headline "First" "Second"`.

**Valores.** Os orçamentos usam a moeda da conta, com vírgula ou ponto: `50,00` ou `50.00`.

**Opções de envio.** `--yes` pula a confirmação (para scripts). `--force` envia os seus valores mesmo quando
alguém mudou o mesmo campo na Meta depois do seu download. `--only` envia só os itens indicados. `--delay-ms`
é a pausa entre gravações, 300 ms por padrão.

**Opções globais.** `-a, --account` (ou `MAE_ACCOUNT`), `-w, --workspace` para usar outro arquivo de conta e
`--api-version` (ou `MAE_API_VERSION`) para a versão da Graph API, `v26.0` por padrão.

Rode `mae --help`, ou `mae <command> --help`, para ver a lista completa.
