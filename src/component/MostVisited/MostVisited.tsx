
/**
 * Функция возвращает компонент - ссылки на популярные ресурсы
 */

export const MostVisited = () => {
  return (
    <div className='mostVisitedContainer'>
        <a href="" className="vidTitle"><h3>Most visited</h3></a>
        <ul className="mostVisitedList" >
                    <li className="mostVisitedLink"><a href="">Недвижимость</a><span>- о сталинках</span></li>
                    <li className="mostVisitedLink"><a href="">Маркет</a><span>- люстры и светильники</span></li>
                    <li className="mostVisitedLink"><a href="">Авто.ру</a><span>- привод 4х4</span></li>
                </ul>
    </div>
  )
}
