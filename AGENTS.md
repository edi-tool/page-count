# page-count

台割りに合うページ数の提案と背幅の概算を行うブラウザツール。公開URL: https://edi-tool.github.io/page-count/
詳しい方針は CLAUDE.md、共通方針は [edi-tool 開発原則](https://github.com/edi-tool/.github/blob/main/PRINCIPLES.md)。

## 実行コマンド

- プレビュー: `python -m http.server 8000`
- テスト: `npm test`（Node.js 22 以上、依存なし）
- HTML 静的チェック: `npm run check`

## 守ること

- 依存なしの Vanilla JS を維持する。外部送信しない（テストで確認）。
- 計算式・刻みを変えたら、README の「仕様・計算根拠」とテストを同時に更新する。
- `scripts/check-static.mjs` と `tests/helpers.js` は edi-tool/.github の templates からのコピー。直すときは原本も直す。
- 軽微な修正での push 禁止。複数修正をまとめてから push する。
