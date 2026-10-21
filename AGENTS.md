# page-count

暫定ページ数から台割りの切りの良いページ数を提案し、背幅を概算するブラウザツール。編集工程での使用を想定。
公開URL: https://edi-tool.github.io/page-count/ （GitHub Pages）
共通方針は [edi-tool 開発原則](https://github.com/edi-tool/.github/blob/main/PRINCIPLES.md)。`CLAUDE.md` はこのファイルを取り込むだけなので、エージェント共通の規則はここに書く。

## 実行コマンド

- プレビュー: `python -m http.server 8000`
- 整形: `npx prettier --write .`
- テスト: `npm test`（Node.js 22 以上、依存なし）
- HTML 静的チェック: `npm run check`

## 守ること

- 依存なしの Vanilla JS。極限の軽量化・高速化を維持し、ライブラリを追加しない。外部送信しない（テストで確認）。
- 計算根拠（16/8ページ刻み、背幅 = ページ数÷2×紙厚＋0.8mm 補正）は README の「仕様・計算根拠」に明記。計算式・刻みを変えたら、README とテストを同時に更新する。
- `scripts/check-static.mjs` と `tests/helpers.js` は edi-tool/.github の templates からのコピー。直すときは原本も直す。
- 軽微な修正での push 禁止。ローカルサーバーで検証し、複数修正を1コミットに集約する（GitHub Actions 節約）。
- セッション終了時に `progress.md` を更新。
