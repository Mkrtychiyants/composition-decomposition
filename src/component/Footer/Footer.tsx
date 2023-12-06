import  { PropsWithChildren } from 'react'

/**
 * Функция возвращает компонент - обёртку, оборачивает дочерние ноды в футер
 */
export const Footer = ({children}: PropsWithChildren) => {
  return (
    <footer>{children}</footer>
  )
}
