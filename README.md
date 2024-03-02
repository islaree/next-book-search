## 書籍の検索アプリケーション
![書籍の検索アプリケーション](https://github.com/daxchx/book-search/assets/149696768/83f8b1ec-4499-48a7-b8e9-6ac5713d5552)

このアプリケーションは、Google Books APIのボリュームコレクションを使用した書籍の検索や書籍リソースの確認ができるアプリケーションです。

## 書籍の検索

![書籍の検索](https://github.com/daxchx/book-search/assets/149696768/81c8d007-5807-45dc-b048-cb2747c262be)

検索バーに書籍に関連するキーワードを入力するすることで、簡単に検索が行なえます。

検索ボタンはなく、キーワードの入力を確認したら瞬時に検索を開始します。

検索結果として最大10件の書籍を一覧表示します。

## 書籍のリソースを確認

![書籍のリソースを確認](https://github.com/daxchx/book-search/assets/149696768/649eef1d-8474-43a6-bdb8-6bbd02c3c959)

検索結果として表示された書籍を選択すると、その書籍のリソースを確認できます。

以下のリソースを提供します。

- タイトル
- ページ数
- 公開日
- 出版社
- 寄稿者
- 概要説明

## 書籍データの一時保存



書籍のリソースページから「マイラブラリに追加する」を選択することで、マイライブラリに一時保存することが可能です。

マイラブラリから書籍を削除するには、書籍のリソースページから「マイライブラリから削除する」を選択します。

※一時保存のため、ブラウザをリロードするとマイライブラリに保存されていた書籍はリセットされます。

## 技術スタック

<table>
  <tr align="left">
    <th>Style</th>
    <td><a href="https://tailwindcss.com/">TailwindCSS</a></td>
  </tr>
  <tr align="left">
    <th>Language</th>
    <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
  </tr>
  <tr align="left">
    <th>Framework</th>
    <td><a href="https://nextjs.org/">Next.js</a></td>
  </tr>
  <tr align="left">
    <th>Library</th>
    <td><a href="https://ja.react.dev/">React</a></td>
  </tr>
  <tr align="left">
    <th>Deploy</th>
    <td><a href="https://vercel.com/">Vercel</a></td>
  </tr>
</table>

## データのフェッチ処理

Next.jsのcache関数を使用してフェッチしました。

cache関数を使用することでフェッチしたデータはcacheに保存されます。

次回のフェッチ時にcache内に同一のデータが存在する場合は、フェッチ処理を行わず、cacheからデータを取得します。

不要なフェッチを省くことにより、データ取得取得速度を削減し、UXを向上させています。

## サスペンスフォールバック

データの取得はサーバコンポーネントで行っています。

サスペンスフォールバックを用いて、フェッチが完了するまでの待機時間にスケルトンを表示しました。

[!NOTE]
Useful information that users should know, even when skimming content.

[!TIP]
Helpful advice for doing things better or more easily.

[!IMPORTANT]
Key information users need to know to achieve their goal.

[!WARNING]
Urgent info that needs immediate user attention to avoid problems.

[!CAUTION]
Advises about risks or negative outcomes of certain actions.

スケルトンを使用することでLCPやCLSが改善され、UXを向上させました。
