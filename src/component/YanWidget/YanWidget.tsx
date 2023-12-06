import React from 'react'

interface WidgetProps {
    title: string,
    children: React.ReactNode
}


/**
 * Функция возвращает компонент - обёртку виджета
 */

export const YanWidget: React.FC<WidgetProps> = (props) => {
    const {title, children} = props;
  return (
    <article className={'widget '+ title}>
        <div className='widget-content '> {children}</div>
    </article>
  )
}
