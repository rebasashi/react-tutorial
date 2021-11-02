// eslint-disable-next-line no-use-before-define
import React from 'react'

// コンポーネント名は大文字で始める
const Welcome = (props: { name: string }) => {
  return <h1>Hello, {props.name}</h1>
}

// 小文字で始まるコンポーネントはDOMタグとして扱われる
const element = <Welcome name="Sara" />

export const Sample: React.FC = () => {
  return (
    <div>
      {element}
    </div>
  )
}
