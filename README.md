# 書籍の検索アプリケーション

![書籍の検索アプリケーション](https://github.com/daxchx/book-search/assets/149696768/d7e1de76-5eb9-4e31-9ee8-29b8b848df27)

このアプリケーションは、<a href="https://developers.google.com/books?hl=ja">Google Books API</a>を使用した書籍の検索やリソース確認、お気に入り保存ができるアプリケーションです。

以下からアプリケーションをご利用ください。

- <a href="https://book-app-roan.vercel.app/">アプリケーションを使用する</a>
- <a href="https://github.com/daxchx/book-search/wiki">使用方法を確認する</a>


## プロジェクトの目的

現在のフロントエンド開発では、Reactが数多くのプロジェクトで採用されています。

そこで、実際のプロジェクトを想定したSPAアプリケーションをReactを使用して構築することを目標にこのプロジェクトに取り組みました。

## 技術スタック一覧

<div style="display:inline;margin-bottom:100;">
    <img src="https://img.shields.io/badge/react-black?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=next.js" />
    <img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript" />
    <img src="https://img.shields.io/badge/tailwindcss-black?style=for-the-badge&logo=tailwindcss" />
    <img src="https://img.shields.io/badge/node.js-black?style=for-the-badge&logo=node.js" />
    <img src="https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel" />
    <img src="https://img.shields.io/badge/figma-black?style=for-the-badge&logo=figma" />
</div>

&nbsp;

**React**： 選定した理由はプロジェクトの背景に記載しています。

**Next.js**： 選定した理由は以下のようなメリットがあったためです。
- ルーティングの実装が簡単
- Reactの環境構築が容易
- 公式ドキュメントが充実している

**Tailwind CSS**：選定した理由は以下のようなメリットがあったためです。
- 他のCSSフレームワークと比較して、カスタマイズ性が高い
- クラス名を考える時間を削減できる

**Google Books API**：選定した理由は以下のようなメリットがあったためです。
- 基本的な本の検索や本のリソース取得は、APIキーやOAuth認証が不要
- 無料で使用できる書籍のAPIの中でたくさんの書籍リソースを保持している
- 公式ドキュメントが充実している

**Figma**：レイアウトの作成やオブジェクトのエクポートが無料で使用することができるため選定しました。

## 問題解決と工夫

プロジェクトにおける具体的な課題や難点に対するアプローチや工夫、解決策を説明します。

### （1）マイライブラリ機能

マイライブラリに保存した書籍のデータは複数のページで状態を共有する必要があったため、React Hooksの`useContext`を使用してアプリケーション全体で状態を共有するアプローチを選択しました。

### （2）書籍データの取得

Google Books APIでは書籍の検索やリソースの取得が可能で、以下のように行いました。

書籍の検索：
```
GET https://www.googleapis.com/books/v1/volumes?q={search terms}
```
書籍のリソース取得：
```
GET https://www.googleapis.com/books/v1/volumes/volumeId
```

### （3）フェッチの最適化

フェッチ処理を行うと、レスポンスを取得が完了するまでの間、描画が行われず、一時的にフリーズしたような状態になってしまいました。

そこで、Next.jsのSuspenseコンポーネントを使用してローディングスケルトンの実装を追加しました。

フェッチが完了するまでの間、ローディングスケルトンを描画することによって、UXが向上しました。

しかし、もう一つ改善点として、フェッチ速度が気になりました。

検索する際に、新たなキーワードを入力した際にはフェッチ処理が実行されデータが取得されますが、同じキーワードで検索した際にもフェッチ処理が実行され、データ取得に時間がかかっていることに気づきました。

Next.jsのcache関数を使用してフェッチしました。

cache関数を使用することでフェッチしたデータはcacheに保存されます。

次回のフェッチ時にcache内に同一のデータが存在する場合は、フェッチ処理を行わず、cacheからデータを取得します。

不要なフェッチを省くことにより、データ取得時間を削減し、UXを向上させています。

## 学びと成長

### （1）SPAの開発

App RouterはPage Routerと比較してUI/UXを考慮した機能が非常に多く、今回使用したキャッシュ機能やサスペンスフォールバックといったデータ取得の際に役立つスキルを取得することができました。

### （2）TypeScriptを使用

オブジェクト指向プログラミングを触っていたため、型の定義に関しては慣れていました。

React特有のpropsも型の指定を行うことができ、ReactでのTypeScriptの使用にも慣れることができました。

## コードの品質と構造

### **styleのルール**

tailwindCSSをjsxのclassNameに記述することで簡単にスタイルを割り当てることができますが、簡単に割当が可能なため、スタイルの順番が不揃になっていました。

そのため、npmパッケージを使用して、tailwindスタイルの並び順を整形するパッケージを使用して、tailwindcssのスタイルにルールを設け、コードの可読性をを保ちました。

### **コンポーネントの管理**

今回はapp routerを使用したため、サーバーコンポーネントとクライアントコンポーネントをファイルで分割して、同一ファイルにインポートして管理しています。

その他にも、再利用が可能なコンテンツは積極的にコンポーネントを使用しました。

## 今後の展望

このプロジェクトでは、クライアント依存のデータ共有を行っていますが、Supabaseなどのデータベースを使用して、認証機能やユーザー別の情報を保持したアプリケーションの実装も行っていきたいです。

検索した瞬間に簡易的に検索ができる機能を実装したが、特定のキーワードを入力している間に無駄なfetch処理が行われているため、fetch処理が走るまでのバリデーションを設けて、不要なfetchを改善させたいです。
