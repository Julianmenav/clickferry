import React from "react";

export default function ResultTrips({ loading, resultTrips, emptyResult }) {
  return (
    <>
      {loading ? (
        <div className="m-auto">
          <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : resultTrips.length > 0 ? (
        resultTrips
          .sort((a, b) => a.total - b.total)
          .map((trip, index) => (
            <div className="tripResult w-full max-w-[900px] rounded-lg bg-white shadow-md p-5 hover:scale-105 hover:shadow-lg transition-transform duration-700">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full flex flex-col sm:flex-row items-center">
                  <div className="w-full flex justify-between sm:flex-col sm:w-1/3">
                    <div className="flex gap-2 w-full">
                      <div className="rounded-full py-1 px-4 text-xs text-white bg-blue-600 h-min">
                        Ida
                      </div>
                      <p className="text-sm font-zinc-400">{trip.ship}</p>
                    </div>
                    <p className="font-bold text-xl p-3">{trip.operator}</p>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <div className="">
                      <p className="text-lg text-gray-900">{trip.from}</p>
                      <p className="text-xl font-bold">
                        {trip.time.split("T")[1].substring(0, 5)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {trip.time.split("T")[0]}
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    <div className="px-10 py-4">
                      <p className="text-lg text-gray-900">{trip.to}</p>
                      <p className="text-xl font-bold">
                        {trip.time.split("T")[1].substring(0, 5)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {trip.arrival.split("T")[0]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-1/4 text-black font-bold text-2xl sm:text-4xl flex justify-center items-center">
                  {trip.total} €
                </div>
              </div>
              <div className="w-full h-0.5 border-t-2 border-zinc-600 border-dotted" />
            </div>
          ))
      ) : emptyResult ? (
        <p className="text-center m-auto text-gray-400 font-bold">
          No se han encontrado resultados
        </p>
      ) : null}
    </>
  );
}
