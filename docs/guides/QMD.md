# QMD – Query Markup Documents

[QMD](https://github.com/tobi/qmd) adalah mesin pencari on-device untuk markdown: dokumentasi, catatan, dan knowledge base. Di repo ini QMD dipakai agar AI (Cursor/agent) dan developer bisa mencari isi `docs/` dengan cepat (keyword, semantic, atau hybrid + reranking).

## Setup di project ini

- **Install (sekali):** `bun install -g github:tobi/qmd`
- Pastikan `~/.bun/bin` ada di PATH (agar perintah `qmd` dan MCP bisa jalan).
- Koleksi yang dipakai:
  - **bizops-docs** → `docs/` (panduan, migrasi, runbook, arsip)
  - **bizops-core** → file markdown di root (README, CHANGELOG, dll)

## Perintah dari project (npm)

Script di `scripts/qmd.sh` memastikan binary `qmd` dipakai dari PATH atau `~/.bun/bin`, jadi tidak perlu path penuh.

```bash
# Lihat status index & koleksi
npm run qmd:status

# Re-index semua koleksi (setelah menambah/mengubah file .md)
npm run qmd:update

# Generate embedding untuk semantic search (setelah update)
npm run qmd:embed

# Keyword search (contoh: query dalam tanda kutip setelah --)
npm run qmd:search -- "pricing calculator"
```

## Integrasi MCP (Cursor)

Di `.mcp.json` sudah ada server **qmd** yang menjalankan `qmd mcp` lewat `scripts/qmd-mcp.sh`. Setelah Cursor reload/restart, tool MCP QMD (mis. `qmd_search`, `qmd_get`, `qmd_query`) bisa dipakai oleh AI untuk mencari isi dokumentasi tanpa Anda harus copy-paste manual.

- **Restart Cursor** atau reload window setelah mengubah `.mcp.json`.
- Jika MCP QMD tidak muncul, pastikan `qmd` bisa dijalankan di shell (PATH atau `~/.bun/bin`).

## Cara search (CLI)

```bash
# Full-text (BM25), cepat
qmd search "authentication"

# Semantic (vector), cocok untuk pertanyaan alami
qmd vsearch "cara deploy ke production"

# Hybrid + reranking (kualitas terbaik)
qmd query "pricing calculator assessment steps"

# Batasi ke satu koleksi
qmd search "migration" -c bizops-docs

# Ambil satu dokumen
qmd get docs/guides/TESTING.md
qmd get "#abc123"   # pakai docid dari hasil search
```

## Menambah koleksi / konteks

Jika Anda menambah folder markdown baru atau ingin konteks lebih jelas:

```bash
# Tambah koleksi (jalan di direktori project)
qmd collection add ./path/to/md --name nama-koleksi --mask "**/*.md"

# Beri konteks agar hasil search lebih relevan
qmd context add qmd://bizops-docs/guides "Panduan teknis: testing, deployment, a11y"

# Setelah itu
npm run qmd:update
npm run qmd:embed
```

## Referensi

- [QMD README](https://github.com/tobi/qmd/blob/main/README.md) – instalasi, model GGUF, dan opsi lengkap
- Index & cache: `~/.cache/qmd/` (SQLite + model)
