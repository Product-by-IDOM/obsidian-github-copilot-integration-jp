# GitHub Copilot Integration

[English](README.md) | 日本語

![ビルド](https://github.com/Product-by-IDOM/obsidian-github-copilot-integration-jp/actions/workflows/main.yml/badge.svg)
![最新リリース](https://img.shields.io/github/v/release/Product-by-IDOM/obsidian-github-copilot-integration-jp)
![Obsidian ダウンロード数](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22github-copilot-integration-jp%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)
![ライセンス](https://img.shields.io/github/license/Product-by-IDOM/obsidian-github-copilot-integration-jp)

GitHub Copilot Integration は、GitHub Copilot を Obsidian と連携させるプラグインです。保管庫（Vault）から AI を直接利用して、ドキュメントについてチャットしたり、ノートを生成・書き換えたりできます。

<img src="demo.gif" width="600">

## 機能

- **💬 チャット画面**: ドキュメントについて対話できるサイドバーチャット
  - 回答のリアルタイムストリーミング
  - ドキュメントのコンテキストを自動的に追加
  - 会話履歴の保存
  - AI の回答をコピー、またはドキュメントに直接挿入
  - Obsidian のテーマに対応
- **✏️ インライン編集**: テキストを選択してインライン編集コマンドを実行すると、入力ポップアップが表示されます。指示を入力すると、Copilot がドキュメントに直接内容を追加または置換します
- **📋 チャットに送信**: 選択したテキストを右クリックして Copilot Chat のサイドバーにコンテキストとして送り、その内容について追加の質問ができます
- **Action Palette**: あいまい検索ですべての AI アクションにすばやくアクセスできます（Cmd+P →「Action Palette」）
- **ストリーミング出力**: AI が生成するテキストをインジケーター付きでリアルタイムに確認できます
- **8 つの組み込みアクション**:
  - 🪄 General help（一般的な支援）— 読みやすさや文章の流れを改善
  - ✍️ Continue writing（文章の続き）— 同じ文体やトーンで続きを作成
  - 🍭 Summarize（要約）— 要点を簡潔に要約
  - 📖 Fix spelling and grammar（スペルと文法の修正）— 文章を校正して修正
  - ✅ Find action items（タスクの抽出）— タスクや ToDo をクリック可能なチェックボックスとして抽出
  - 🔄 Rewrite selection（選択範囲の書き換え）— 明瞭さ、文法、文体を改善
  - 💻 Generate code（コード生成）— 説明からコードを生成し、コードブロックで表示
  - 🧠 Plan（計画）— 指定されたコンテキストから詳細なプロジェクト仕様を生成
- **カスタマイズ**: 設定画面で、独自のプロンプトを使ったアクションの編集や新規作成ができます
- **マルチプラットフォーム**: macOS、Windows、Linux に対応

## 必要な環境

- Obsidian デスクトップ版（v1.0.0 以降）
- SDK と**互換性のあるバージョン**の GitHub Copilot CLI がインストールされ、システムの PATH またはカスタム CLI パスから実行できること
  - インストール: `npm install -g @github/copilot`（npm）または `winget install GitHub.Copilot`（Windows）
  - 更新（事前に互換性を確認）: `copilot update` または `npm update -g @github/copilot`
  - 確認: `copilot --version`（v0.0.409 以降であること）
- 有効な GitHub Copilot サブスクリプション
- GitHub Copilot CLI の認証: `copilot login`

> **CLI の互換性:** このプロジェクトの `@github/copilot-sdk` 0.3.0 は、ロックファイルに含まれる CLI 1.0.48 で動作しますが、CLI 1.0.114 のプロトコルには対応していません。ロック済みの CLI が自動的に新しいバージョンを実行しないように、`node_modules/.bin/copilot`（Windows では `node_modules\.bin\copilot.cmd`）の絶対パスを `--no-auto-update` 付きで実行する起動スクリプトを作成します。プラグインの設定で「Use custom CLI path」を有効にし、「Path to Copilot executable」に起動スクリプトを指定して「Apply & reconnect」をクリックしてください。

## 使い方

### はじめに

1. **インストール**: プラグインのフォルダーを保管庫の `.obsidian/plugins` ディレクトリに配置するか、コミュニティプラグインのブラウザーからインストールします（承認後）。
2. **有効化**: 設定 → コミュニティプラグインで GitHub Copilot Integration jp version を有効にします。

### チャット画面を使う

1. **チャットを開く**: 左側のリボンにあるメッセージアイコン（💬）をクリックするか、コマンドパレット（Cmd+P / Ctrl+P）で「Open chat」を検索します。
2. **質問する**: 入力欄に質問や依頼を入力し、Cmd+Enter（Windows/Linux では Ctrl+Enter）で送信します。改行には Enter を使います。
3. **コンテキストの自動追加**: 現在開いているドキュメントの内容が、コンテキストとしてチャットに自動的に追加されます。
4. **回答を挿入する**: AI の回答にカーソルを合わせて「Insert into document」をクリックすると、現在のノートに挿入できます。
5. **新しい会話を始める**: チャットのツールバーにある「+」ボタンをクリックします。
6. **生成を中断する**: 回答の生成中に Escape を押します。

### インライン編集を使う

1. **テキストを選択する**: 編集したいテキストを選択します（または、新しい内容を追加したい位置にカーソルを置きます）。
2. **コマンドを実行する**: コマンドパレットを開いて「Inline edit」を検索します。すばやくアクセスするためにホットキーを割り当てることもできます。
3. **編集内容を指示する**: 選択範囲の上に入力ボックスが表示されるので、希望する編集内容を入力します（例:「箇条書きにする」「エラー処理を追加する」「スペイン語に翻訳する」）。
4. **モードを選ぶ**: 入力欄の下にあるボタンで、**Append**（選択範囲の後に追加）と **Replace**（選択範囲を置換）を切り替えます。
5. **送信する**: Cmd+Enter（Windows/Linux では Ctrl+Enter）を押すか「Go」をクリックします。AI の回答がドキュメントに直接ストリーミング表示されます。

### 選択範囲をチャットに送る

1. **テキストを選択する**: ドキュメント内のテキストを選択します。
2. **右クリックする**: コンテキストメニューから「Send to Copilot Chat」を選びます。
3. **質問する**: 選択したテキストがコンテキストとして添付された状態でチャットのサイドバーが開きます。コンテキストは入力欄の上にチップとして表示されます。質問を入力して送信します。

### クイックアクションを使う

1. **Action Palette**: Cmd+P（または Ctrl+P）を押し、「Action Palette」と入力してアクションを選びます。
2. **ホットキーを設定する（任意）**: すばやくアクセスするために、Action Palette にキーボードショートカットを割り当てられます。設定 → ホットキーで「Action Palette」を検索し、キー（例: Cmd+M / Ctrl+M）を割り当てます。
3. **個別のコマンド**: 各アクションは、コマンドパレットから個別のコマンドとしても実行できます。
4. **選択範囲がある場合**: アクションの実行前にテキストを選択すると、選択範囲を書き換えたり変換したりできます。要約とタスク抽出の結果は、選択範囲の後に追加されます。
5. **選択範囲がない場合**: アクションを実行すると、カーソル位置に新しい内容を生成できます。

## インストール（開発者向け）

1. このリポジトリをクローンします。
2. `cp copy-to-obsidian.sh.sample copy-to-obsidian.sh` を実行し、`OBSIDIAN_PLUGIN_DIR=` 変数を、Obsidian の保管庫内にあるプラグインフォルダーの `github-copilot-integration-jp` ディレクトリを指すように変更します。
3. `npm install` を実行して依存関係をインストールします。
4. `npm run build` を実行すると、プラグインがビルドされ、ファイルが Obsidian のプラグインフォルダーに自動的にコピーされます。
5. （任意）`npm run dev` を実行すると、変更を監視し、変更のたびにファイルを自動的にコピーします。
6. `bash ./copy-to-obsidian.sh` を実行して、ファイルを手動でコピーすることもできます。

## 技術的な詳細

このプラグインは、TypeScript/Node.js 向けの公式 [@github/copilot-sdk](https://github.com/github/copilot-sdk) を使用しています。主な特徴は次のとおりです。

- **CopilotClient**: GitHub Copilot CLI への接続を管理
- **セッション管理**:
  - チャットの会話では、スレッドごとにセッションを保持
  - クイックアクションでは、独立したセッションを使用
- **ストリーミング対応**: `assistant.message_delta` イベントを使ってテキストをリアルタイムに生成
- **チャットの構成**:
  - サイドバーパネルに Obsidian 標準の `ItemView` を使用
  - プラグインのデータに会話履歴を保存
  - ドキュメントのコンテキストを自動的に挿入
  - インラインでのストリーミング表示（アクション）に CodeMirror 6 のデコレーションを使用
  - チャットメッセージの整形に MarkdownRenderer を使用
- **モデル設定**: モデルを選択可能（gpt-4o、claude-sonnet-4.5 など）
- **エラー処理**: 中断されたリクエストの適切なクリーンアップとエラーからの復旧

SDK は以下を自動的に処理します。

- CLI プロセスのライフサイクル（起動、再起動、停止）
- GitHub Copilot の認証
- メッセージの整形とプロトコル通信
- ストリーミングされたチャンクのバッファリングと配信

## ライセンス

MIT

---

> **免責事項:** このプラグイン全体は、GitHub Copilot を使ったバイブコーディングで作成されました。自己責任でご利用ください。
