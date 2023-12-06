import  { PropsWithChildren } from 'react'


/**
 * Функция возвращает компонент - обёртку, оборачивает дочерние ноды в главный блок
 */

export const Main = ({children}: PropsWithChildren) => {
  return (
    <main>{children}</main>
  )
}
