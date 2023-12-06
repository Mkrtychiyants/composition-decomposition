
/**
 * Функция возвращает компонент - программа телепередач
 */

export const OnAir = () => {
  return (
    <div className='OnAirContainer'>
        <a href="" className="OnAirTitle"><h3>Эфир</h3></a>
        <ul className="OnAirList" >
                    <li className="OnAirLink"><a href="">Управление как искусство </a><span>Успех</span></li>
                    <li className="OnAirLink"><a href="">Ночь. Мир в это время </a><span> Earth.TV</span></li>
                    <li className="OnAirLink"><a href="">Андрей Вознесётся </a><span>Совершенно секретно</span></li>
                </ul>
    </div>
  )
}
