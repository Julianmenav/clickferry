import { useReducer, useState } from 'preact/hooks'
import GlobalLayout from './layouts/GlobalLayout'
import routesList from './assets/routes.json'
import RouteChooser from './components/RouteChooser'
import DateChooser from './components/DateChooser'
import formatDate from './utils/formatDate'
import PassengerChooser from './components/PassengerChooser'
import usePassengers from './hooks/usePassengers'
import useSearchFerry from './hooks/useSearchFerry'
import ResultTrips from './components/ResultTrips'

export function App() {
  const [currentRoute, setCurrentRoute] = useState(routesList[0])
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()))
  const [currentPassengers, dispatch] = usePassengers()
  const [resultTrips, searchFerry, loading, emptyResult] = useSearchFerry()

  const changeRoute = (index) => {
    setCurrentRoute(routesList[index])
  }

  const changeDate = (date) => {
    setCurrentDate(formatDate(date))
  }

  const changePassengers = (passengerObj) => {
    setCurrentPassengers(passengerObj)
  }


  return (
    <GlobalLayout>
      <section id="searcher" className='rounded-lg bg-zinc-100 p-4 mt-5 w-full sm:max-w-[640px] md:max-w-[900px] flex flex-wrap gap-2 relative'>
        <div className='w-full flex flex-col md:flex-row gap-2'>

          <div className='w-full md:w-[320px] flex justify-center items-center gap-2'>
            <div className='w-1/2'>
              <button className='w-full font-bold rounded-full bg-clickferry border-2 border-clickferry text-white flex justify-center items-center text-center py-1'>Solo Ida</button>
            </div>
            <div className='w-1/2'>
              <button className='w-full font-bold rounded-full bg-white border-2 border-zinc-400 text-zinc-400 flex justify-center items-center text-center py-1' disabled>Ida y vuelta</button>
            </div>
          </div>

          <RouteChooser currentRoute={currentRoute} routes={routesList} changeRoute={changeRoute}/>
 
        </div>
        <div className='w-full flex flex-col md:flex-row gap-2'>

          <DateChooser changeDate={changeDate}/>

          <PassengerChooser currentPassengers={currentPassengers} dispatch={dispatch} />

          <button onClick={() => searchFerry({currentRoute, currentDate, currentPassengers})} className='w-full bg-orange-400 hover:bg-orange-500 font-bold text-white rounded-xl py-3 px-8 flex justify-center items-center'>
            Buscar Ferry
          </button>

        </div>
      </section>
      <section id="results" class='mt-6 w-full flex flex-col items-center gap-10'>
        <ResultTrips loading={loading} resultTrips={resultTrips} emptyResult={emptyResult}/>
      </section>
    </GlobalLayout>
  )
}
