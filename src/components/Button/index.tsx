import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <Container type="button" {...props} />
}

export default Button
