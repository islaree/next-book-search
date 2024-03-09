# 書籍の検索アプリケーション

![書籍の検索アプリケーション](https://github.com/daxchx/book-search/assets/149696768/d7e1de76-5eb9-4e31-9ee8-29b8b848df27)

このアプリケーションは、Google Books APIのボリュームコレクションを使用した書籍の検索や書籍リソースの確認ができるアプリケーションです。

<a href="https://book-app-roan.vercel.app/">アプリケーションを利用してみる</a>

このアプリケーションの使用方法についての詳細はWikiを確認してください。

## プロジェクトの背景と目的

現在のフロントエンド開発では、Reactが数多くのプロジェクトで採用されています。

そこで、実際のプロジェクトを想定したSPAアプリケーションをReactを使用して構築することを目標にこのプロジェクトに取り組みました。

## 役割と貢献

このプロジェクトは、技術選定、デザイン、フロントエンドの実装を一人で行いました。

## 技術的な側面

<div style="display:inline;">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/typescript-white?style=for-the-badge&logo=typescript">
    <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript">
    <img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/figma-white?style=for-the-badge&logo=figma">
    <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/badge/figma-black?style=for-the-badge&logo=figma">
    <img src="https://img.shields.io/badge/figma-black?style=for-the-badge&logo=figma" />
  </picture>
</div>

使用した技術やプログラミング言語、フレームワーク、ライブラリについて具体的に記述します。技術的な決定の理由や他の選択肢との比較も含めると良いです。

#### React

Reactを選定した理由はプロジェクトの背景に記載しています。

#### Next.js

Next.jsを選定した理由は以下のようなメリットがあったためです。

- SPA開発時のルーティングの実装が簡単
- 機能のアップデートが頻繁に行われている
- 公式ドキュメントが充実している

#### Tailwind CSS

Tailwind CSSを選定した理由は以下のようなメリットがあったためです。

- 他のCSSフレームワークと比較して、カスタマイズ性が高い
- クラス名を考える時間を削減できる

#### Google Books API

Google Books APIを選定した理由は以下のようなメリットがあったためです。

- 基本的な本の検索や本のリソース取得は、APIキーやOAuth認証が不要
- 無料で使用できる書籍のAPIの中でたくさんの書籍リソースを保持している
- 公式ドキュメントが充実している

#### Figma

デザイン案の作成やオブジェクトのエクポートが無料で使用することができるためFigmaを選定しました。

## 問題解決と工夫

プロジェクトにおける具体的な課題や難点に対するアプローチや工夫、解決策を説明します。自身の問題解決能力や発想力を強調します。

#### アプリケーション全体での状態の共有

このアプリケーションの機能には、マイライブラリという機能があり、検索した本をマイライブラリに追加することで書籍のリソースに素早くアクセスし、確認することができます。

最初、このお気に入り機能の実装に、stateのリフトアップを使用して実装をしようと考えていましたが、component間で状態の共有はできても、page間で状態の共有ができませんでした。

マイライブラリが持つ書籍のデータはコンポーネントが持つべき状態ではなく、アプリケーション全体で共有する必要のある状態です。

そこで、いくつか候補に上がったのが、Zustand, useContextを検討しました。

採用理由は、ZustandはuseContextよりも複雑なデータをコンポーネント間で共有する際に適していますが、今回は簡単な書籍のオブジェクトリソースを共有するだけなので、useContextを採用しました。

#### フェッチ処理

フェッチ処理を行うと、レスポンスを取得が完了するまでの間、描画が行われず、一時的にフリーズしたような状態になってしまいました。

そこで、Next.jsのSuspenseコンポーネントを使用してローディングスケルトンの実装を追加しました。

フェッチが完了するまでの間、ローディングスケルトンを描画することによって、UXが向上しました。

しかし、もう一つ改善点として、フェッチ速度が気になりました。

検索する際に、新たなキーワードを入力した際にはフェッチ処理が実行されデータが取得されますが、同じキーワードで検索した際にもフェッチ処理が実行され、同じデータを取得するのに時間がかかっていることに気づきました。

Next.jsのcache関数を使用してフェッチしました。

cache関数を使用することでフェッチしたデータはcacheに保存されます。

次回のフェッチ時にcache内に同一のデータが存在する場合は、フェッチ処理を行わず、cacheからデータを取得します。

不要なフェッチを省くことにより、データ取得時間を削減し、UXを向上させています。

## 学びと成長

### Next.jsのapp routerでアプリケーションを構築する

App RouterはPage Routerと比較してUI/UXを考慮した機能が非常に多く、今回使用したキャッシュ機能やサスペンスフォールバックといったデータ取得の際に役立つスキルを取得することができました。

### React, Next.jsにおけるTypeScriptの使用

オブジェクト指向プログラミングを触っていたため、型の定義に関しては慣れていました。

React特有のpropsも型の指定を行うことができ、ReactでのTypeScriptの使用にも慣れることができました。

## コードの品質と構造

### **Tailwind CSS について**

tailwindCSSをjsxのclassNameに記述することで簡単にスタイルを割り当てることができますが、簡単に割当が可能なため、スタイルの順番が不揃になっていました。

そのため、npmパッケージを使用して、tailwindスタイルの並び順を整形するパッケージを使用して、tailwindcssのスタイルにルールを設け、コードの可読性をを保ちました。

### **コンポーネントの分け方**

今回はapp routerを使用したため、サーバーコンポーネントとクライアントコンポーネントをファイルで分割して、同一ファイルにインポートして管理しています。

その他にも、再利用が可能なコンテンツは積極的にコンポーネントを使用しました。

## 今後の展望

このプロジェクトでは、クライアント依存のデータ共有を行っていますが、Supabaseなどのデータベースを使用して、認証機能やユーザー別の情報を保持したアプリケーションの実装も行っていきたいです。

検索した瞬間に簡易的に検索ができる機能を実装したが、特定のキーワードを入力している間に無駄なfetch処理が行われているため、fetch処理が走るまでのバリデーションを設けて、不要なfetchを改善させたいです。
