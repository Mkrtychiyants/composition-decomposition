
export interface INewsItem {
  imgSrc: string,
  linkTitle: string,
  linkSrc: string
}
interface INewsItemProps {
  newsItem : INewsItem
}
/**
 * Компонент отдельной новости
 */
export const NewsItem = ({ newsItem}:  INewsItemProps) => {
  const {imgSrc, linkTitle, linkSrc} = newsItem;
  return (
    <li>
      <img src={imgSrc}></img>
      <a href={linkSrc}>{linkTitle}</a>
    </li>
  )
}
