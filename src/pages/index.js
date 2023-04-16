import { useState } from 'react'
import { CountUp } from 'use-count-up'

const Home = () => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [errorDay, setErrorDay] = useState(false)
  const [errorMonth, setErrorMonth] = useState(false)
  const [errorYear, setErrorYear] = useState(false)
  const [diffDays, setDiffDays] = useState('--')
  const [diffMonths, setDiffMonths] = useState('--')
  const [diffYears, setDiffYears] = useState('--')
  const today = new Date()

  const isError = () => {
    let error = 0
    if (!month) {
      setErrorMonth('This field is required')
      error += 1
    } else if (month > 12) {
      setErrorMonth('Must be a valid day')
      error += 1
    } else setErrorMonth(false)

    const daysInMonth = new Date(year, month, 0).getDate()
    if (!day) {
      setErrorDay('This field is required')
      error += 1
    } else if (daysInMonth < day) {
      setErrorDay('Must be a valid day')
      error += 1
    } else setErrorDay(false)

    if (!year) {
      setErrorYear('This field is required')
      error += 1
    } else if (today.getFullYear() < year) {
      setErrorYear('Must be in the past')
      error += 1
    } else setErrorYear(false)
    if (error) {
      setDiffDays('--')
      setDiffMonths('--')
      setDiffYears('--')
    }
    return error
  }

  const submitForm = () => {
    if (isError()) return
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day))
    const today = new Date()
    if (
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate())
    ) {
      setDiffYears(today.getFullYear() - birthDate.getFullYear())
    } else {
      setDiffYears(today.getFullYear() - birthDate.getFullYear() - 1)
    }
    const months =
      today.getDate() >= birthDate.getDate()
        ? today.getMonth() - birthDate.getMonth()
        : today.getMonth() - birthDate.getMonth() - 1
    setDiffMonths(months < 0 ? months + 12 : months)
    if (today.getDate() >= birthDate.getDate()) {
      setDiffDays(today.getDate() - birthDate.getDate())
    } else {
      setDiffDays(
        today.getDate() -
          birthDate.getDate() +
          new Date(year, month, 0).getDate()
      )
    }
  }

  return (
    <div
      className="bg-white mx-6 px-6 py-12 w- lg:p-14 rounded-3xl
                  rounded-ee-[100px] lg:rounded-ee-[200px] grid grid-flow-row gap-8"
    >
      <div className="grid grid-flow-col auto-cols-fr gap-4 lg:gap-8 lg:w-[70%]">
        <div className="grid gap-1">
          <label
            className={errorYear || errorMonth || errorDay ? 'text-red' : ''}
          >
            Day
          </label>
          <input
            onChange={(e) => {
              setDay(e.target.value)
            }}
            type="number"
            placeholder="DD"
            value={day}
            className={errorYear || errorMonth || errorDay ? 'border-red' : ''}
          />
          <p className="text-red font-normal italic text-labelS lg:text-label">
            {errorDay}
          </p>
        </div>
        <div className="grid justify-start gap-1">
          <label
            className={errorYear || errorMonth || errorDay ? 'text-red' : ''}
          >
            Month
          </label>
          <input
            onChange={(e) => {
              setMonth(e.target.value)
            }}
            type="number"
            placeholder="MM"
            value={month}
            className={errorYear || errorMonth || errorDay ? 'border-red' : ''}
          />
          <p className="text-red font-normal italic text-labelS lg:text-label">
            {errorMonth}
          </p>
        </div>
        <div className="grid justify-start gap-1">
          <label
            className={errorYear || errorMonth || errorDay ? 'text-red' : ''}
          >
            Year
          </label>
          <input
            onChange={(e) => {
              setYear(e.target.value)
            }}
            type="number"
            placeholder="YYYY"
            value={year}
            className={errorYear || errorMonth || errorDay ? 'border-red' : ''}
          />
          <p className="text-red font-normal italic text-labelS lg:text-label">
            {errorYear}
          </p>
        </div>
      </div>
      <div
        className="flex w-full justify-center items-center lg:justify-end
            before:bg-line before:content-[''] before:inline-block before:h-[1px] before:w-full
            after:bg-line after:content-[''] after:inline-block after:h-[1px] after:w-full lg:after:hidden"
      >
        <button
          onClick={() => submitForm()}
          className="animated-bounce bg-purple hover:bg-black p-5 lg:p-[26px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <div className="italic font-extrabold text-bodyS lg:text-body tracking-[-0.02px]">
        <div className="flex">
          <p className="text-purple mr-2 diff">
            {diffYears === '--' ? (
              diffYears
            ) : (
              <CountUp isCounting easing="linear" end={diffYears} />
            )}
          </p>
          <p>years</p>
        </div>
        <div className="flex">
          <p className="text-purple mr-2 diff">
            {diffMonths === '--' ? (
              diffMonths
            ) : (
              <CountUp isCounting easing="linear" end={diffMonths} />
            )}
          </p>
          <p>months</p>
        </div>
        <div className="flex">
          <p className="text-purple mr-2 diff">
            {diffDays === '--' ? (
              diffDays
            ) : (
              <CountUp isCounting easing="linear" end={diffDays} />
            )}
          </p>
          <p>days</p>
        </div>
      </div>
    </div>
  )
}

export default Home
