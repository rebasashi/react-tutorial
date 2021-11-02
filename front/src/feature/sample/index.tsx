// eslint-disable-next-line no-use-before-define
import React from 'react'
import { NameType } from './types'
import { formatName } from './utils'

export const Sample: React.FC = () => {
  const user: NameType = {
    firstName: 'Harper',
    lastName: 'Perez'
  }

  // JSX式にTypeScript関数の結果を埋め込む
  const element = <h1>Hello, {formatName(user)}</h1>

  return (
    <div>
      {element}
    </div>
  )
}
