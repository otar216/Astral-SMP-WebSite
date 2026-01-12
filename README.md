# ASTRAL-SMP Official Website

ASTRAL-SMPの公式Webサイトプロジェクト。
HTML/CSS/JSのみで構成された静的Webサイト。

## ディレクトリ構成
```text
/
 ├ index.html        (Homeページ)
 ├ contents.html     (Contentsページ: 建築紹介など)
 ├ members.html      (Membersページ: メンバー紹介など)
 ├ history.html      (Historyページ: 沿革)
 ├ css/style.css     (デザイン全般のスタイル)
 ├ js/main.js        (ナビゲーション動作などのスクリプト)
 └ assets/
     ├ images/       (画像ファイル.png)
        └ contents/     (コンテンツ用の画像)
        └ members/      (鯖メンのアイコン用の画像)
        └ history/      (沿革用の画像)
        └ screenshots/  (スクリーンショット用の画像)
     └ icons/        (SNSアイコン.svg)
     └ fonts/        (フォント格納用)
```

## 更新ガイド

### 画像の差し替え
`assets/images` フォルダ内に必要なファイルを配置する。

- **背景画像**: `assets/images/home_bg.png` (推奨サイズ: 1920x1080以上)
- **コンテンツ画像**: `assets/images/contents/` 内のファイル
- **メンバー画像**: `assets/images/members/` 内のファイル
- **沿革画像**: `assets/images/history/` 内のファイル
- **スクリーンショット画像**: `assets/images/screenshots/` 内のファイル

## テキストの変更
各HTMLファイルをテキストエディタで開き、該当する文字を直接編集。サーバー人数が大幅に増えることもなく、テキストエディタの補完が優秀なため手動で保守できると判断。

## コンテンツの追加 (Contentsページ)
`contents.html` 内の `<article class="content-card">...</article>` のブロックをコピー&ペーストし、画像パスとテキストを変更。

## メンバーの追加 (Membersページ)
`members.html` 内の `<article class="member-card">...</article>` のブロックをコピー&ペーストし、画像パスとテキストを変更。

[Avatar Maker](https://mcskins.top/avatar-maker) と``MCID``からプレイヤーのスキンの画像素材を取得できる。

## 沿革の追加 (Historyページ)
`history.html` 内の `<div class="timeline-item">...</div>` のブロックをコピー&ペーストして画像パスとテキストを変更。

## カラーテーマの変更
`css/style.css` の冒頭にある `:root` 内の変数を変更することで、サイト全体の色味を一括調整。
```css
:root {
  --color-bg-deep: #0f0f4d; /* メイン背景色 */
  --color-accent: #4d4dff; /* アクセントカラー */
  ...
}
```

---
Author: @Futo210_MCJE