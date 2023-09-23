import { useState } from "preact/hooks"


export default function useSearchFerry() {
  const [resultTrips, setResultTrips] = useState([])
  const [loading, setloading] = useState(false)
  const [emptyResult, setEmptyResult] = useState(false)

  const searchFerry = ({currentRoute, currentDate, currentPassengers}) => {
    const departuresURL = `https://tadpole.clickferry.app/departures?route=${currentRoute.code}&time=${currentDate}`

    setloading(true)
    setEmptyResult(false)
    setResultTrips([])

    fetch(departuresURL)
      .then((res) => res.json())
      .then((departures) => {
        departures.forEach((departure) => {
          const departureDate = departure.time.split("Z")[0]
          const accommodationURL = `https://tadpole.clickferry.app/accommodations?route=${currentRoute.code}&time=${departureDate}&adults=${currentPassengers.adults}&children=${currentPassengers.children}&babies=${currentPassengers.babies}`

          fetch(accommodationURL)
            .then((res) => res.json())
            .then((accommodations) => {
              accommodations.forEach((accommodation, index, arr) => {
                const priceURL = `https://tadpole.clickferry.app/price?route=${currentRoute.code}&time=${departureDate}&adults=${currentPassengers.adults}&children=${currentPassengers.children}&babies=${currentPassengers.babies}&accommodation=${accommodation.code}`
                fetch(priceURL)
                  .then((res) => res.json())
                  .then((price) => {
                    const resultTrip = {
                      ...departure,
                      ...accommodation,
                      ...price,
                      "from": currentRoute.from,
                      "to": currentRoute.to
                    }
                    console.log(resultTrip)
                    setResultTrips((resultTrips) => [...resultTrips, resultTrip])
                  })
              })
            })
        })
      }).finally(() => {
        setTimeout(() => {
          setloading(false)
          setEmptyResult(true)
        }, 600)
      })
  }



  return [resultTrips, searchFerry, loading, emptyResult]
}
