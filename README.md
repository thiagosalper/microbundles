# POC microbundles


## Briefing

-> https://monorepo.tools

-> https://nx.dev


### Objetivo do time
Otimizar a orquestração e governança dos bundles, definindo padroes de bundles e qualificando o que é um bom bundle ou nao.

### Objetivo da POC
Observar gerenciamento moderno de aplicacoes, bibliotecas e microfrontends organizados num monorepo, objetivando escalar com previsibilidade e abstração de recursos. Por exemplo: 
- Conseguir quebrar um bundle em core e bundles menores que se relacionam.
- Conseguir visualizar a relação entre eles, sem necessariamente ser navegação.
- Conseguir reutilizar microfrontends.
- Conseguir gerir dependencias de um bundle da melhor forma.
- Conseguir orquestrar builds e versionamento individual de pacotes.
- Conseguir observar um ponto de partida do bundle.
- ...


### Desafios a serem experimentados aqui
- Solução para particionar bundle
- Fluxos separados em bundles menores
- Compartilhamento de estrutura rn proposta
- Ferramental visual para arquitetura de um bundle
- Ferramental visual e scripts para governança de crescimento individualizado
- ...


### Ideias pessoais
- Atomic design aplicado a visão macro de apps ... talvez arquitetura exagonal (pesquisar) .... Automatizar processos usando ferramentas de mercado, distribuindo problemas futuros com a comunidade ... como encaixar ideias novas em legados? como testar vias, projetos internos menores, pocs??? ... constelaçao de apps menores (grafos) ... há outros pacotes isolados que geram grafos e relacionamento 


## Motivacao

workspaces e nx podem ajuda a organizar, automatizar e escalar monorepos de forma eficiente.

### Yarn workspace:
- gerenciamento de dependencias compartilhadas
- links simbolicos entre pacotes
- instalacao otimizada
- X nao tem controle de versao entre pacotes
- X nao tem paralelismo
- X nao tem cache de build/test
- X nao tem pipes de ci otimizados
- X nao tem controle de dependencias entre pacotes

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


## Comparativo WORKSPACE <> NX

Workspace resolve X, outra ferramenta resolve Y

| Recurso                        | Yarn Workspaces    | Nx                            |
| ------------------------------ | --------------------- | ----------------------------- |
| Link de dependências locais    | ✅                | ✅ (via Yarn Workspaces)       |
| Execução de scripts por pacote | ❌                      | ✅                             |
| Caching de build/test          | ❌                       | ✅                             |
| Visualização de dependências   | ❌               | ✅                             |
| Build/test incremental         | ❌                  | ✅                             |
| Suporte a plugins/frameworks   | ❌                   | ✅                             |
| Publicação de pacotes          | ❌                 | Parcial (via plugins/scripts) |



## Teste aqui
```
yarn install

// mostra visual o relacionamento dos micropacotes
npx nx graph 

// veja comandos para criar e manipular packages e apps ...

```

