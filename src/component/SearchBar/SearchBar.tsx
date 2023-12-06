
/**
 * Функция возвращает компонент - главную строку поиска и кнопку отправки запроса
 */

export const SearchBar = () => {
    return (
        <div className="searchBarContainer">
            <div className="searchBarLogo">
                <img className="searchBarLogoImg" src="https://placehold.co/600x400/png" alt="" />
            </div>
            <div className="searchBarBody">
                <ul className="searchType" >
                    <li className="searchTypeLink"><a href="">Видео</a></li>
                    <li className="searchTypeLink"><a href="">Картинки</a></li>
                    <li className="searchTypeLink"><a href="">Новости</a></li>
                    <li className="searchTypeLink"><a href="">Карты</a></li>
                </ul>
                <form className="searchTypeForm"  >
                    <input className="searchInput"  type="text" />
                    <button type="submit">Найти</button>
                </form>
                <div>
                   <span>Найдётся всё </span><a href="">например</a>
                </div>
            </div>
        </div>
    )
}
