
## 概要

-　出納帳を目指したWebアプリケーション、「Mame Foward」です。  
-　使用技術は以下の通りです。  
  -　フロントサイド：React  
  -　サーバー：Express  
  -　データベース：Postgres / Kneｘ  
-　スクリーンショットは以下の通りです。  
![スクリーンショット 2024-05-28 9 35 19](https://github.com/OtokazuOkumura/dig-imr-6-solo-project-otsuichi/assets/154218126/79d0e9ed-05c3-402d-8724-23bdafea9e07)


## セットアップ手順など
- リポジトリのディレクトリ構造は以下の通りです(ファイルは主要なもののみです)。  
```
/
├── back
│   ├── db
│   │   ├── migrations
│   │   │   └─ 20240523065052_create_table_account_book.js ... "account_book" テーブルの作成
│   │   └── seeds
│   │       └─ 001_recent.js ...　サンプルレコードの生成
│   ├── knexfile.js ...　ｋneｘの初期設定
│   ├── package.json ...　"scripts" に node, nodemon, knex のスクリプト記述あり
│   └── src
│       ├── knex.js ...　ｋneｘの初期設定
│       └── server.js ...　expreｓｓサーバの処理
└── front
    ├── dist ...　vite built 結果の出力ファイル格納先。 /back/src/server.js より expreｓｓ の static　として参照している
    ├── package.json ...　"scripｔｓ" に vite　のスクリプト記述あり
    ├── src
    │   ├── App.jsx ...　実質、最上階階層のコンポーネント
    │   ├── Form.jsx ...　入力フォーム用コンポーネント
    │   ├── Th_Td.jsx ...　テーブルのレコードレンダリング用コンポーネント
    │   ├── main.jsx ... root コンポーネント
    │   └── table.css ...　テーブル用css
    └── vite.config.js ...　"/api" を "http://localhost:3000" でルーティングする記述あり。expreｓｓサーバと統一。
```

-　また、`/back/.env` ファイルの内容は以下の通りです。
```
DB_NAME=mame_foward
DB_USER=user
DB_PASSWORD=
```

-　セットアップ手順は以下の通りです。
```
cd $HOME
git clone git@github.com:OtokazuOkumura/dig-imr-6-solo-project-otsuichi.git
cd $HOME/dig-imr-6-solo-project-otsuichi.git/front
npm i
cd ../back
npm i
npm run node-start
```

-　Reactコンポーネント修正後は、以下のようにフロントのコンポーネントをビルドしてください
```
cd $HOME/dig-imr-6-solo-project-otsuichi.git/front
npm run build
```

## リソース
- PostgreSQLのローカルDB "mame_foward" およびテーブル "account_book" を使用します。

## 将来の計画
-　現在は、サンプル記録の表示​のみ可能です。  
-　今後、記録の追加や修正​、削除​、記録のソートを実装する予定です。  
