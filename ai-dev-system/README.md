# ai-dev-system v3 scaffold

Este scaffold traduz a auditoria do agency-agents para uma base v3 mais fluida e menos fragmentada.

## Principios da v3

- Orchestrator-first
- Phase-first
- Playbook-driven
- Scenario-aware
- Evidence-gated
- Poucos pontos de controle fortes
- Specialists densos e uteis

## Nucleo de conducao

- `ENGINE.md`
- `system/control/ORCHESTRATOR.md`
- `system/control/DELIVERY_DOCTRINE.md`
- `system/control/AGENT_ACTIVATION_PROMPTS.md`
- `system/control/HANDOFF_TEMPLATES.md`
- `system/playbooks/*`
- `system/runbooks/*`

## Skills principais

- `skills/orchestrate/` e a entrada principal para iniciar, retomar ou continuar uma jornada.
- `skills/execute-task/` executa uma task ja contratada no loop build/review.
- novas skills devem seguir `skills/SKILL_FORMAT.md`.

Nao existe uma skill `/start` obrigatoria. O bootstrap de memoria acontece dentro de `orchestrate`.

## Memoria operacional

O scaffold nao guarda memoria de produto em `project/`.

`orchestrate` deve criar ou reutilizar um workspace privado externo:

```text
ai-dev-workspace/current/
```

`templates/ai-dev-workspace/current/` e o modelo usado para inicializar esse workspace.

Papeis principais:

- `STATE.md` guarda o momento atual.
- `MEMORY.md` guarda memoria estavel e curada.
- `DESIGN.md` guarda memoria de design do projeto alvo quando design importa.
- `artifacts/` guarda discovery, synthesis, planning, design, architecture, decisions e review.
- `execution/` guarda tasks, ledgers e reviews.

O produto real nao recebe esses arquivos por padrao.

## Upgrade proprio do ai-dev-system

- Discovery mais seria
- Planning mais forte
- Auditabilidade melhor
- Foco em codigo mais clean e manutencao melhor

## Templates

`templates/ai-dev-workspace/current/` is a live bootstrap template for the private operational workspace. Do not delete the `templates` folder wholesale.

`templates/legacy-workspace-backup-*` directories are legacy cleanup candidates. They may be removed only after a cleanup task confirms they have zero references and records the deletion in an audit artifact.

## Raiz operacional

A estrutura recomendada local é:

```text
ai-dev-system/
  ai-dev-system/              # sistema
  ai-dev-workspace/current/   # memória operacional privada
  projects/                   # produtos reais, quando usado
```

`ai-dev-system/ai-dev-system` é o system root.

`ai-dev-system/ai-dev-workspace/current` é o workspace root.

O produto real deve viver em `target_project.root`, nunca dentro do workspace privado sem aprovação explícita.

O orquestrador deve sempre conseguir reconstruir o estado lendo `config.yaml`, `STATE.md`, artifacts, tasks, ledgers e reviews, sem exigir que o usuário cole um prompt longo.