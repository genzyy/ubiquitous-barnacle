import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

// type ButtonProps = {
//   children: ReactNode
// } & ButtonHTMLAttributes<HTMLButtonElement>

// export function Button(props: ButtonProps) {
//   return <Container type="button" {...props} />
// }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <Container type="button" {...props} />
}

export default Button
