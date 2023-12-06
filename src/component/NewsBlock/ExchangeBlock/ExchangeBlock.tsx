
interface IExchangeProps {
  data: IExchange[]
}
export interface IExchange {
  currency: string,
  value: number,
  difference: number
}
/**
 * Функция возвращает компонент - курс валют
 */
export const ExchangeBlock = ({ data }: IExchangeProps) => {
  return (
    <div className="exchangeContainer">
      {data.map((curr) => (
          <>
          <span className='exchange'>{curr.currency} MOEX {curr.value }</span><span className='exchangeDiff'>{"+"}{curr.difference}</span>
          </>
      ))}
    </div>

  )
}
