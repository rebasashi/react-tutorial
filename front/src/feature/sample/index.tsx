// eslint-disable-next-line no-use-before-define
import React from 'react'

export const Sample: React.FC = () => {
  // JSX式の導入
  const element = <h1>Hello, world!</h1>

  // JSXに式を埋め込む
  const name = 'Josh Perez'
  const element2 = <h2>Hello, {name}</h2>

  return (
    <div>
      {element}
      {element2}
    </div>
  )
}
