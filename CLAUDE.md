# page-count

暫定ページ数から台割りの切りの良いページ数を提案し、背幅を概算するツール。編集工程での使用を想定。
公開URL: https://edi-tool.github.io/page-count/ （GitHub Pages）

## 実行コマンド

- プレビュー: `python -m http.server 8000`
- 整形: `npx prettier --write .`

## プロジェクト方針

- 依存なしの Vanilla JS。極限の軽量化・高速化を維持し、ライブラリを追加しない。
- 計算根拠（16/8ページ刻み、背幅 = ページ数÷2×紙厚＋0.8mm 補正）は README に明記。式の変更時は README も更新。
- 軽微な修正での push 禁止。ローカルサーバーで検証し、複数修正を1コミットに集約（GitHub Actions 節約）。
- セッション終了時に `progress.md` を更新。
