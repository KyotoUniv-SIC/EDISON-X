# README

必要なクラス

- Account
  - 学生
  - 電力使用量を発行するシステム担当
  - 経理担当
- 配電
  - 電力会社
  - 太陽光
- 取引額
- 残高
- 学生の支払手段
- 購入・売却
- トークン発行
- 月初の使用量計算
- 月末の精算

Sequenceに必要な主体

- 学生
- システム
- 経理担当
  - 学生経理担当
  - 大学経理掛
- 電力会社
- ソーラーシステム
- XRP Ledger
- Energy Server

月初

- システムが使用量を計算
- システムが学生にXRPトークン（電力会社の電気）を発行
- システムが学生にXRPトークン（ソーラーの電気）を発行

月中

- 学生が他の学生から電気のXRPトークンを購入する
- システムがXRPトークン（電力会社の電気）を追加発行する
- 取引価格の取引データ（終値など）を表示
- トークン残高を表示
  - 全体の平均、総和の電力使用量表示（電力会社・ソーラー）
  - 学生にのみ、自身の電力使用量を表示
  - 使用量の順位を表示（電力会社・ソーラー）
- 日末、トークン引き落とし

月末

- 月末の精算
  - XRPトークンが余っている場合、システムが割引いて学生から購入
    - 割り引かない可能性あり
  - XRPトークンが足りない場合、システムが割増して学生に売却
  - 価格は上記2項目で差し引きゼロになるように調整
    - 価格調整時、システム運用費用を考慮
- 学生経理担当が大学経理掛にデータを提出
- 前年同月比使用量を通知（使用量が多いなど）
