
import './App.css';
import { Header } from './component/Header/Header';
import { YanWidget } from './component/YanWidget/YanWidget';
import { Main } from './component/Main/Main'; 
import { Footer } from './component/Footer/Footer';
import { NewsItemList } from './component/NewsBlock/NewsItemList/NewsItemList';
import { INewsItem } from './component/NewsBlock/NewsItem/NewsItem';
import { DateTime } from './component/NewsBlock/DateTime/DateTime';
import { ExchangeBlock } from './component/NewsBlock/ExchangeBlock/ExchangeBlock';
import { IExchange } from './component/NewsBlock/ExchangeBlock/ExchangeBlock';
import { Rutube } from './component/RutubeBlock/Rutube/Rutube';
import { SearchBar } from './component/SearchBar/SearchBar';
import { MainBanner } from './component/MainBanner/MainBanner';
import { MostVisited} from './component/MostVisited/MostVisited';
import { Weather } from './component/Weather/Weather';
import { Maps } from './component/Maps/Maps';
import { TV } from './component/TV/TV';
import { OnAir } from './component/OnAir/OnAir';

const news: INewsItem[] = [
  {
  imgSrc: "string1",
  linkTitle: "Путин упростил получение пули в затылок",
  linkSrc: "string1"
  },
  {
    imgSrc: "string2",
    linkTitle: "В команде Зеленского раскрыли окно",
    linkSrc: "string2"
    }
]
const titles: string[] = [
  'Now in social media',
  'Local social media',
  'Recommended'
]
const exchange: IExchange[] = [
  {
    currency: "USD",
    value: 63.43,
    difference: 0.02
  },
  {
    currency: "EUR",
    value: 63.43,
    difference: 0.02
  },
  {
  currency: "OIL",
  value: 63.43,
  difference: 0.02
  },
]

function App() {
  return (
   <div className='container'>
    <Header>  
      <YanWidget title='news'>
          <NewsItemList newsItemsList = {news} titles={titles} activeTitle = "Now in social media" />
          <ExchangeBlock data = {exchange}/>
      </YanWidget>
      <YanWidget title='rutube'>
        <Rutube />
      </YanWidget>
    </Header>
    <Main>
    <SearchBar></SearchBar>
    <MainBanner></MainBanner>
    </Main>
    <Footer>
    <YanWidget title='weather'>
        <Weather></Weather>
      </YanWidget>
      <YanWidget title='mostVisited'>
        <MostVisited/>
      </YanWidget>
      <YanWidget title='Maps'>
       <Maps></Maps>
      </YanWidget>
      <YanWidget title='TV'>
        <TV></TV>
      </YanWidget>
      <YanWidget title='Air'>
        <OnAir></OnAir>
      </YanWidget>
    </Footer>
  
   </div>
  );
}

export default App;
