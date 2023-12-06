
import { DateTime } from '../DateTime/DateTime'
import { INewsItem, NewsItem } from '../NewsItem/NewsItem'

interface INewsItemsListProps {
    newsItemsList: INewsItem [],
    activeTitle: string,
    titles: string [] ,
}
/**
 * Функция возвращает список переключения между блоками новостей
 */
export const NewsItemList = ({newsItemsList, activeTitle, titles}: INewsItemsListProps) => {

  return (
    <div className="newsContainer">
        <div className="newsContainerHeader">
        {
            titles.map((title)=>(
               title===activeTitle ? <a href={title} className='newsTitle active'>{title}</a> : <a href={title} className='newsTitle'>{title}</a>
            ))
        }
        <DateTime currentTime = {Date.now()}/>
        </div>
         <ul className = "newsBlog" >
        {
            newsItemsList.map((item)=>(
                <NewsItem key={item.imgSrc} newsItem = {item}></NewsItem>
            ))
        }
    </ul>
    </div>
  )
}
