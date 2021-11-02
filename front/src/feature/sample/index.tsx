// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Button } from '@material-ui/core'

const isEven = (value: number) => {
  return (value % 2 === 0)
}

export const Sample: React.FC = () => {
  // 条件付きレンダー実現用にuseStateを利用する
  // React.useState
  // https://ja.reactjs.org/docs/hooks-overview.html
  const [count, setCount] = useState(0)

  // イベントハンドラ関数
  const buttonHandler = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>count: {count}</p>
      {/** 条件付きレンダー */}
      <p>{isEven(count) ? '偶数' : '奇数'}</p>
      <Button color="primary" onClick={buttonHandler}>Button</Button>
    </div>
  )
}
