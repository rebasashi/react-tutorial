// eslint-disable-next-line no-use-before-define
import React from 'react'

// コンポーネント名は大文字で始める
const Welcome = (props: { name: string }) => {
  return <h1>Hello, {props.name}</h1>
}

export const Sample: React.FC = () => {
  // コンポーネントを組み合わせる
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}
