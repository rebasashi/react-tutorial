// eslint-disable-next-line no-use-before-define
import React, { SyntheticEvent } from 'react'
import { Button } from '@material-ui/core'

// イベントハンドラ関数
const buttonHandler = (e: SyntheticEvent) => {
  // Reactでイベントハンドラ引数を用いる場合SyntheticEventインスタンスが渡される
  // 参考：https://ja.reactjs.org/docs/events.html
  // 不要であれば引数eを付けなくても良いと思われる
  console.log(e)
}

export const Sample: React.FC = () => {
  return (
    <div>
      <Button color="primary" onClick={buttonHandler}>Hello World</Button>
    </div>
  )
}
