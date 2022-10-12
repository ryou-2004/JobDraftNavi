# JobDraftNavi

モジュールが入っていないので[SampleApp-0.0.1.tgz]を使用して、追加してください。

react-nativeを初めて触り1週間で製作しました。

良かった点

求人情報や、検索画面の絞り込みなどをjsonファイルから読み込み、書き出しをしている点
求人詳細の部分を{配列.map}を使用して、短い行数で書いた点
Unityで培ったコンポーネント指向を活かした点

反省点

ライブラリを多用した点。
Jsonの形がバックエンドのことを考えていない点。
MySqlに手を出したが、実装できなかった点。

実装したもの

ホーム画面
検索画面(検索機能はなし)
求人一覧表示
求人詳細画面

コピペではなく、リファレンスを読み少しは理解して書いたライブラリ

上下のタブや画面遷移

@react-navigation/material-top-tabs

@react-navigation/bottom-tabs

@react-navigation/native

@react-navigation/stack

検索画面、ライン登録画面などのポップ表示

react-native-modal

画像のスライド

react-native-swiper
