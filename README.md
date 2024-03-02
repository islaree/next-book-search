## 書籍の検索アプリケーション

<img src="https://github.com/daxchx/book-search-app/assets/149696768/a7b9553b-ac2b-49cb-9485-2351dd4675c1" alt="thumbnail" />

このアプリケーションは、Google Books APIのボリュームコレクションを使用した書籍の検索や書籍リソースの確認ができるアプリケーションです。

## 書籍の検索

![image](https://github.com/daxchx/book-search-app/assets/149696768/f66affc2-4d57-420e-9b88-7b4f8d976644)

検索バーに書籍に関連するキーワードを入力するすることで、簡単に検索が行なえます。

検索ボタンはなく、キーワードの入力を確認したら瞬時に検索を開始します。

検索結果として最大10件の書籍を一覧表示します。

## 書籍のリソースを確認

<div>
  <img src="https://github.com/daxchx/book-search-app/assets/149696768/27ffff60-a423-4005-8282-b54b26928a36" alt="image" width="400" height="auto" />
</div>

検索結果として表示された書籍を選択すると、その書籍のリソースを確認できます。

以下のリソースを提供します。

- タイトル
- ページ数
- 公開日
- 出版社
- 寄稿者
- 概要説明

## 書籍データの一時保存
<div>
  <img src="https://github.com/daxchx/book-search-app/assets/149696768/2d26cfd2-8727-4ed8-b978-69e80fc10f17" alt="image" width="400" height="auto" />
</div>

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
