// Architecture diagrams keyed by project id
export const architectureDiagrams: Record<number, string> = {
  // The Orchestrator
  1: `User (Web / CLI)
        |
        v
    Smart Router
    conversational → LLM
    task → Agent Pipeline
        |
        v
    LangGraph StateGraph

    parse_objective
        |
        v
    supervisor_entry (routing strategy)
    ├──→ Research Agent ──→ Secret Filter ──┐
    ├──→ Context Core   ──→ Secret Filter ──┤
    └──→ PR-Agent       ──→ HITL Gate    ──┘
        |
    supervisor_route
        |
        v
    finalize ──→ Save to Vault
        |
        v
    Redis (Shared State)
    SSE Event Queue → Browser`,

  // PR Agent
  2: `GitHub Issue Opened
        |
        v
    GitHub Webhook (POST /webhook)
        |
        v
    listener.py (FastAPI server)
        |
        v
    agent.py
    ├── scanner.py  →  Ollama identifies the relevant file
    ├── Ollama generates the code fix
    ├── git commit & push to new branch
    └── gh pr create  →  Pull Request opened`,

  // Context Core
  3: `CLI (Click)
    vault add | ingest | search | chat | watch | stats
         |                        |
         v                        v
    The Vault                 The Oracle
    (Phase 1)            ←    (Phase 3)

    ChromaDB                  RAG
    Embeddings                Pipeline
    Ingest                    Ollama LLM
         ^
         |
    The Watcher
    (Phase 2)

    File Watch
    Clipboard
    Zsh History
    SQLite State`,

  // Swarm-Tune
  6: `Node A (Docker)                    Node B (Docker)
  Train on local shard               Train on local shard
       |                                   |
       v                                   v
  Extract ∇W manually               Extract ∇W manually
  (no DDP — raw tensor)             (no DDP — raw tensor)
       |                                   |
       +──────────→ libp2p mesh ←──────────+
                        |
              Gradient Aggregator
              ∇W_avg = (∇W_A + ∇W_B + ...) / N
              async timeout → straggler skip
                        |
              All nodes update:
              W = W − lr × ∇W_avg
                        |
                        v
              Node C (Docker)   Node D (Docker)
              (same cycle repeats across 4 containers)`,

  // Sentinel-Shield
  5: `Your App ──→ Sentinel-Shield ──→ OpenAI / Anthropic / Ollama
                       |
                       ├── Strip PII & secrets from prompts
                       ├── Block jailbreak / prompt-injection attempts
                       ├── Scan LLM responses for leaked data
                       ├── Enforce rate limits (per-user / per-project)
                       ├── Persist full audit trail (SQLite)
                       └── Emit Prometheus metrics + webhook alerts

  FastAPI Proxy (drop-in, Docker Compose)
       |
       ├── PII Scanner  ──→ regex + spaCy NER
       ├── Injection Guard ──→ pattern + classifier
       ├── Response Filter ──→ mirrors inbound rules
       ├── Rate Limiter ──→ token-bucket per key
       ├── Audit Logger ──→ SQLite (append-only)
       └── Metrics ──→ /metrics (Prometheus) + POST webhooks`,

  // The Autonomous Researcher
  4: `Browser (http://localhost:8000)
    |
    |  GET  /                         → Dark-mode SPA
    |  POST /api/research             → Start research job
    |  GET  /api/research/{id}/stream → SSE real-time progress
    |  GET  /api/reports              → List saved reports
    |  GET  /api/reports/{id}         → Get report content
    |  DELETE /api/reports/{id}       → Delete report
    |  GET  /api/health               → Check Ollama connectivity
    v
FastAPI Server (web/server.py)
    |
    v
Job Runner (web/runner.py)
    | asyncio.Lock  — one job at a time
    | asyncio.Queue — progress events → SSE
    v
LangGraph Pipeline (main.py)

    START → search_node → scrape_node → END
                |               |
                v               v
         DeepSearcher       DeepFetcher
        ┌────────────┐    ┌─────────────┐
        │ Ollama     │    │  Crawl4AI   │
        │ + DDG      │    │  (async)    │
        └────────────┘    └─────────────┘
    |
    v
Report Store (reports/*.md + *.json)`,
};
