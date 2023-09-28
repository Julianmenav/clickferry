import { useState } from "preact/hooks";

export default function useSearchFerry() {
  const [resultTrips, setResultTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyResult, setEmptyResult] = useState(false);

  const searchFerry = async ({ currentRoute, currentDate, currentPassengers }) => {
    const departuresURL = `https://tadpole.clickferry.app/departures?route=${currentRoute.code}&time=${currentDate}`;

    setLoading(true);
    setEmptyResult(false);
    setResultTrips([]);

    try {
      const departuresResponse = await fetch(departuresURL);
      const departures = await departuresResponse.json();

      departures.forEach(async (departure) => {
        const departureDate = departure.time.split("Z")[0];
        const accommodationURL = `https://tadpole.clickferry.app/accommodations?route=${currentRoute.code}&time=${departureDate}&adults=${currentPassengers.adults}&children=${currentPassengers.children}&babies=${currentPassengers.babies}`;

        const accommodationResponse = await fetch(accommodationURL);
        const accommodations = await accommodationResponse.json();

        accommodations.forEach(async (accommodation) => {
          const priceURL = `https://tadpole.clickferry.app/price?route=${currentRoute.code}&time=${departureDate}&adults=${currentPassengers.adults}&children=${currentPassengers.children}&babies=${currentPassengers.babies}&accommodation=${accommodation.code}`;

          const priceResponse = await fetch(priceURL);
          const price = await priceResponse.json();

          const resultTrip = {
            ...departure,
            ...accommodation,
            ...price,
            from: currentRoute.from,
            to: currentRoute.to,
          };

          setResultTrips((resultTrips) => [...resultTrips, resultTrip]);
        });
      });

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setEmptyResult(true);
      }, 600);
    }
  };

  return [resultTrips, searchFerry, loading, emptyResult];
}
