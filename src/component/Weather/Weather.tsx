
/**
 * Функция возвращает компонент - прогноз погоды
 */

export const Weather = () => {
  return (
    <div className='weatherContainer'>
        <h3>Погода</h3>
        <div className="weather">
            <div className="weatherNow">
                <img className="weatherNowImg" src="https://placehold.co/600x400/png" alt="" />
                <div className="weatherTemp">+20</div>
            </div>
            <div className="weatherLater">
                <div className="morningWeather">Утром +15</div>
                <div className="eveningWeather">Днём +20</div>
            </div>
        </div>
    </div>
  )
}
