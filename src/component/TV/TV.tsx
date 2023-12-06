
/**
 * Функция возвращает компонент - программа телепередач
 */

export const TV = () => {
  return (
    <div className='TVContainer'>
        <a href="" className="TVTitle"><h3>Телепрограмма</h3></a>
        <ul className="TVList" >
                    <li className="TVLink"><span>02.20 </span><a href="">ТНТ.Best </a><span>ТНТ international</span></li>
                    <li className="TVLink"><span>02.15 </span><a href="">Жинглики </a><span>ТНТ Карусель</span></li>
                    <li className="TVLink"><span>02.25 </span><a href="">наедине со всеми </a><span>Первый</span></li>
                </ul>
    </div>
  )
}
