---
title: Configurações e pasta de dados
description: O que cada configuração faz, onde o editor guarda suas contas e preferências e quais variáveis de ambiente ele lê.
---

## Configurações

Para abrir as configurações, use o **⚙** na ponta direita da barra de ferramentas, **File → Settings…** ou
<kbd>Ctrl</kbd>+<kbd>,</kbd>. A linha de comando usa as mesmas configurações.

- **Meta account and access token**: testar o token, usar outro (só nesta sessão ou salvo no Gerenciador de
  Credenciais do Windows), fazer logout, fazer login de novo e apagar o token guardado. Você também pode mudar
  de qual variável de ambiente, segredo e cofre o token é lido. Veja [Token de acesso](/pt-br/access-token/).
- **Download and upload**: a versão da Graph API, se os downloads incluem itens arquivados por padrão e a
  pausa entre gravações no envio (300 ms por padrão).
- **Appearance**: o tema (seguir o Windows, Light, Dark ou Frutiger Aero), a fonte do Windows (Segoe UI) e o
  zoom.
- **Data**: a pasta de dados e o tamanho do cache de imagens, com um botão para limpar o cache.

## Pasta de dados

Tudo o que o editor guarda fica em uma única pasta:

```text
%LOCALAPPDATA%\meta-ads-editor
```

Cole esse caminho na barra de endereço do Explorador de Arquivos do Windows para abrir a pasta, ou use
**File → Open data folder**.

| Arquivo ou pasta | O que guarda |
|---|---|
| `workspaces\act_<id>.json` | Um arquivo por conta baixada: os valores da Meta e as suas edições pendentes |
| `settings.json` | Suas configurações |
| `view.json` | Colunas, ordenação e o filtro Show de cada nível |
| `session.json` | As abas abertas |
| `favorites.json` | Seus favoritos |
| `thumbs\` | Imagens vistas nas pré-visualizações e miniaturas, para uso offline |
| `crash.log` | Gravado se o editor fechar sozinho (veja [Solução de problemas](/pt-br/reference/troubleshooting/#o-editor-fechou-sozinho)) |

Suas edições são salvas aqui automaticamente, um instante depois de você fazê-las, e também quando o editor
fecha.

**Fazer backup** é copiar a pasta. **Mudar de computador** é copiar a pasta para o mesmo lugar no outro
computador. **Apagar tudo** é excluir a pasta (um token salvo no Gerenciador de Credenciais continua lá; se
quiser que ele suma também, apague-o antes em Settings).

Para guardar os dados em outro lugar, aponte a variável de ambiente `MAE_DATA_DIR` para outra pasta.

## Variáveis de ambiente

| Variável | O que faz |
|---|---|
| `META_ACCESS_TOKEN` | O token de acesso, consultado antes do Gerenciador de Credenciais |
| `MAE_TOKEN_ENV` | Ler o token de uma variável com outro nome |
| `MAE_SECRET_NAME`, `MAE_SECRET_VAULT` | O segredo e o cofre no Gerenciador de Credenciais (por padrão, `Meta-Long-Lived-Access-Token` em `Local`) |
| `MAE_DATA_DIR` | Outra pasta de dados |
| `MAE_ACCOUNT` | A conta que a linha de comando usa |
| `MAE_API_VERSION` | A versão da Graph API |
| `MAE_PERF` | `1` mostra na barra de título quanto tempo cada quadro leva, para investigar lentidão |
