# 進捗: ページ調整さん（page-count）

## 2026-09-24 セッション（SEO）

- `<title>`・`og:title` をキーワード先頭（「{機能名} | {ツール名}」）に変更
- 構造化データを `@graph` 化: WebApplication に `url`・`operatingSystem`・`offers`（無料）・`isPartOf`/`publisher`（ハブの `#website`/`#organization`）を追加し、BreadcrumbList（edi-tool > ツール）を追加

## 2026-07-14 セッション

- **入力改善**: ページ数入力に `min="1" step="1" inputmode="numeric"` を追加
  （スマホで数字キーボード、負数・小数を抑止）。
- **デザイン統一**: `:root` に共通デザイントークンを導入し色を変数化。フォントを実効スタックへ。
  結果カードに薄いシャドウを追加。`:focus-visible`・`prefers-reduced-motion`・`theme-color` 追加。
- **SEO（重要修正）**: `_config.yml` に `url`/`baseurl` が欠落しており canonical・sitemap が
  壊れていたため追加。index.html に `canonical`・`robots`・`og:url`・`og:image`・`og:locale` を補完。

## 2026-09-24 セッション（UI/デザイン改善）

- 入力を `type="text" inputmode="numeric"` に変更。`type=number` では全角数字が入らず `normalizeNumber` が効いていなかった。
- 案A・案Bそれぞれに背幅を併記、増減の少ない案に「近い」バッジ。背幅計算は `spineWidth()` に関数化。
- 見出しを h1 に、ラベルを `<label for>` に、結果に `aria-live`。カードを上寄せに（結果表示時の跳ね防止）。
- **共通**: 見出しの上に「edi-tool」（ハブへのリンク）、フッターに「← edi-tool ツール一覧」を追加。`--text-sub` を #6b6b6b に濃くし、文字用アクセント `--accent-text: #b35f00` を追加（WCAG AA）。

## 2026-09-24 セッション（第2弾: OGP・改行）

- **OGP**: 共有カード用の `ogp.png`（1200×630、Noto Sans JP で生成）を追加し、`og:image` をファビコンから差し替え、`twitter:card` を `summary_large_image` に。
- **改行**: body の `word-break: break-all` を `normal` + `overflow-wrap: anywhere` に変更。和文は従来どおり1字単位で折り返し、英単語（License、Word 等）は途中で割らない。

## 関連

- 組織ハブ: https://edi-tool.github.io/ （`edi-tool/edi-tool.github.io` リポジトリ）
