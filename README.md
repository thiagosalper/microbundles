# POC Bundle microbundles


## Briefing

--> https://monorepo.tools
--> https://lerna.js.org
--> https://nx.dev


Objetivo: Otimizar a orquestração e governança dos bundles, definindo padroes de bundles e qualificando o que é um bom bundle e um mal bundle.
- Rever questoes ainda nao bem resolvidas ou estruturadas como: 
    - Entrypoint dos bundles;
    - Uso de deeplinks, menus;
    - Navegação entre os bundles mais simples, com intuito de se precisar mudar a navegação, direcionando para outro lugar, seja simples e factivel;
    - Contrato/Interface de abertura de bundles, como quais parametros necessarios e quais telas conseguem iniciar o bundle
- Trabalhos estatísticos:
    - Quais os bundles temos hoje, e como visualizar isso de forma facil;
    - Quais os bundles sao maiores e o que implica seu tamanho;
    - Numa visao de futuro - 1 a 5 anos - qual sera o tamanho de cada bundle, quantos bundles teremos, qual o tamanho que os apps que o consomem terao;

- Tendo essas informacoes bem resolvidas:
    - Podemos disponibilizar dados de quando uma tela nao esta navegando bem pela falta de parametro ou excesso de parametros ( validacao de tsc em tempo de execucao);
    - Tamabem vamos poder disponilizar deeplinks ja prontos, sendo entrypoint de um bundle, automaticamente ele ja podera ser acessado via item de menu ou deeplink;
    - Vamos poder ter uma visao de futuro do app com o uso dos bundles e pensar no que queremos antes que aconteça e criar ferramentas que direcionem a este futuro - complemento: o desenvolvedor a criar bundles melhores, mais otimizados e com uma boa governança.


## Justificativas
- Por que é importante? Vamos poder enender e julgar o que é um bom bundle, um bundle que objetivamos e vamos poder ter solucoes prontas aos problemas comuns que bundles ruins terão que enfrentar. Vamos estar um passo a frente nos casos em que um bundle grande precisar se particionar em outros menores, ou ate mesmo por estrategia um bundle queira apartar um fuxo inteiro dele, num unico bundle e o restante em outro.
- Qual o ganho? Vamos criar ferramentas, analises, definicoes de arquitetura de um bundle, o que hoje temos é muito mais algo sobre bundle business, e como transformar bundles, nao temos definicoes do que é um bundle bem construido, e precisamos perseguir esse entendimento se vamos incentivar o uso desses.
- Qual o problema que pode acontecer se nao resolvermos? Com o crescimento do numero de bundles, caso esse assunto nao esteja bem resolvido, vamos ter diversas estruturas distintas, um universo sem controle, crescendo a merce de cenario nao previstos, podemos ate num enario caotico encontrar situacoes de total incompatibilidade entre bundles.
- O que essa implementacao destrava na estrategia? Podemos incentivar que os bundles se tornem menores, bem resolvidos e governaveis, podemos disponibilizar ferramenta aos donos dos bundles que exibam problemas legados que precisam ser resolvidos, melhorando o desempenhodeles no app, trazendo valor ao cliente final.

## Ideias pessoais
- Bundles deveriam ser constelacoes, constelacoes estas que possuam cometas (libs proprias), planetas (microbundles) e estrelas (bundles principais) e satelites (pontos de navegacao com dependencia invertida) ... talvez arquitetura exagonal (pesquisar). Validacao de navegacao e integracao usando JSON Schemas com alertar. Automatizar processos usando ferramentas de mercado, distribuindo problemas futuros com a comunidade.



workspace aliado ao lerna e com nx pra graphos 

## Motivacao

workspaces, lerna e nx podem ajuda a organizar, automatizar e escalar monorepos de forma eficiente.

### Yarn workspace:
- gerenciamento de dependencias compartilhadas
- links simbolicos entre pacotes
- instalacao otimizada
- X nao tem controle de versao entre pacotes
- X nao tem paralelismo
- X nao tem cache de build/test
- X nao tem pipes de ci otimizados
- X nao tem controle de dependencias entre pacotes

### Lerna (oq contribui para workspace)
- Executacao de scripts por pacotes
- publicacao com controle de versao
- filtro de pacotes afetados por alteracoes no git
- integracao simples com workspace
- X nao tem sistema nativo de cache
- X nao tem funcionalidade de build incremental
- X comunidade mais lenta que o NX
- Indicado se ja usa yarn workspace e quer melhorar automacoes basicas em scripts publicacao e ci simples

### NX 
- Cache inteligente
- Build incremental com rastreamento de dependencias
- Visualizacao de grafo de dependencias
- Executores paralelos com otimizacao
- Pode ser usado com o yarn workspace
- suporte a scaffolding de novos pacotes
- X curva de aprendizado maior
- X arquitetura mais opinativa
- X complexo para projetos menores
- Indicado se o monorepo esta crescendo e precisa de performance em builds, testes, e ferramentas avancadas para DX e CI.


## Comparativo de ferramentas
| Recurso                        | Yarn Workspaces | Lerna                | Nx                            |
| ------------------------------ | --------------- | -------------------- | ----------------------------- |
| Link de dependências locais    | ✅               | ✅                    | ✅ (via Yarn Workspaces)       |
| Execução de scripts por pacote | ❌               | ✅                    | ✅                             |
| Caching de build/test          | ❌               | ❌                    | ✅                             |
| Visualização de dependências   | ❌               | Parcial (via plugin) | ✅                             |
| Build/test incremental         | ❌               | ❌                    | ✅                             |
| Suporte a plugins/frameworks   | ❌               | ❌                    | ✅                             |
| Publicação de pacotes          | ❌               | ✅                    | Parcial (via plugins/scripts) |



```
npx nx graph // mostra visual o relacionamento dos micropacotes
```


versionamento dos pacotes usando convensional commits

```
https://lerna.js.org/docs/features/version-and-publish
```