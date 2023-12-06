interface ITime {
    currentTime: number
}
/**
 * Функция возвращает компонент - текущее время, принимает пропсы - текущее время date.now
 */
export const DateTime = ({currentTime}: ITime) => {
    const time = new Date(currentTime)
    const date = time.getDate();
    const month = time.getMonth();
    const monthNames = ["January", "February", "March","April","May", "June","July", "August", "September", "October", "November","December"];
    const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday"];
    const weekDay = dayNames[time.getDay()]
    const timeHours = time.getHours() < 10 ? '0'+ time.getHours(): time.getHours();
    const timeMinutes = time.getMinutes() < 10 ? '0'+ time.getMinutes(): time.getMinutes();
 
  return (
 
    <div   className="todaysDate">{date} {monthNames[month]} , {weekDay} {timeHours}:{timeMinutes}</div>
  )
}
