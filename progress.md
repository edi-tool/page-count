# 進捗: ページ調整さん（page-count）

## 2026-07-14 セッション

- **入力改善**: ページ数入力に `min="1" step="1" inputmode="numeric"` を追加
  （スマホで数字キーボード、負数・小数を抑止）。
- **デザイン統一**: `:root` に共通デザイントークンを導入し色を変数化。フォントを実効スタックへ。
  結果カードに薄いシャドウを追加。`:focus-visible`・`prefers-reduced-motion`・`theme-color` 追加。
- **SEO（重要修正）**: `_config.yml` に `url`/`baseurl` が欠落しており canonical・sitemap が
  壊れていたため追加。index.html に `canonical`・`robots`・`og:url`・`og:image`・`og:locale` を補完。

## 関連

- 組織ハブ: https://edi-tool.github.io/ （`edi-tool/edi-tool.github.io` リポジトリ）
