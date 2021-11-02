// eslint-disable-next-line no-use-before-define
import React from 'react'

export const Sample: React.FC = () => {
  const formatName = (user: { firstName: string; lastName: string }) => {
    return user.firstName + ' ' + user.lastName
  }
  const user = {
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
