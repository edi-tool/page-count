# ページ数最適化・背幅概算ツール

暫定のページ数を入力して、台数の最適なページ数の提案と、背幅の概算を行うツールです。

https://edi-tool.github.io/page-count/

## 概要
入力ページ数周辺の、台割りの切りの良いページ数を返します。
また、入力ページ数と、紙の厚さに基づいて、背幅を概算します。
編集工程での使用を想定しています。

## 使用技術
- **Frontend**: HTML5, CSS3 (Modern CSS Reset / Flexbox)
- **Scripting**: Vanilla JavaScript (No frameworks / No dependencies)

## 仕様・計算根拠について

### 1. ページ数の最適化
商業誌の印刷で一般的な「16ページ（全台）」および「8ページ（半台）」刻みを基準に、入力されたページ数に近い「キリの良いページ数」を算出します。

### 2. 背幅計算
以下の計算式に基づき、並製本（無線綴じ）の概算背幅を表示します。
- `(ページ数 ÷ 2) × 紙の厚さ ＋ 0.8mm（表紙・糊代の補正）`

※ 0.8mm の補正値は、一般的な推奨値に基づいています。

## 参考文献 / References

本プロジェクトの開発にあたり、以下の資料およびデータを参照・利用させていただきました。

### デザイン
* [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp)
  * 本ツール（index）のデザインの参考

---
© 2026 ISHIKAWA, Natsuki
