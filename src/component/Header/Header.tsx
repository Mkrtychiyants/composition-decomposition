import  { PropsWithChildren } from 'react'


/**
 * Функция возвращает компонент - обёртку, оборачивает дочерние ноды в хидер
 */
export const Header = ({children}: PropsWithChildren) => {
  return (
    <header>{children}</header>
  )
}
