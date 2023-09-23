import useOpen from '../hooks/useOpen'
import sumPassengers from '../utils/sumPassengers'



export default function PassengerChooser({currentPassengers, dispatch}) {

  const [open, setOpen, containerRef] = useOpen()
  

  return (
    <>
      <div className={'w-full rounded-md border py-1 px-2 flex cursor-pointer  ' + (open ? 'border-blue-400' : 'border-zinc-400')}>
        <div onClick={() => {setOpen(!open)}} className='w-full'>
          <p className='text-xs text-zinc-400'>Pasajeros</p>
          <p className='text-zinc-600'>{sumPassengers(currentPassengers)} pasajeros</p>
        </div>

        <div className='w-1/4 flex justify-center items-center'>
        </div>
        {
          open && (
            <div ref={containerRef} className='w-full rounded-lg shadow-xl py-5 px-7 bg-white absolute bottom-0 left-0 translate-y-full'>
              <div className='w-full bg-gray-100 hover:bg-gray-200 rounded-md p-2 my-2 flex justify-between items-center'>
                <p className='' >Adultos:</p>
                <div className='flex items-center justify-around gap-2'>
                  <button onClick={() => dispatch({ type: 'DECREMENT', target: 'adults' })} className='p-0.5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                  <p className='w-5 text-center'>{currentPassengers.adults}</p>
                  <button onClick={() => dispatch({ type: 'INCREMENT', target: 'adults' })} className='p-0.5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='w-full bg-gray-100 hover:bg-gray-200 rounded-md p-2 my-2 flex justify-between items-center'>
                <p className='' >Jovenes:</p>
                <div className='flex items-center justify-around gap-2'>
                  <button onClick={() => dispatch({ type: 'DECREMENT', target: 'children' })}  className='p-0.5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                  <p className='w-5 text-center'>{currentPassengers.children}</p>
                  <button onClick={() => dispatch({ type: 'INCREMENT', target: 'children' })} className='p-0.5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='w-full bg-gray-100 hover:bg-gray-200 rounded-md p-2 my-2 flex justify-between items-center'>
                <p className='' >Niños:</p>
                <div className='flex items-center justify-around gap-2'>
                  <button onClick={() => dispatch({ type: 'DECREMENT', target: 'babies' })}  className='p-0.5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                  <p className='w-5 text-center'>{currentPassengers.babies}</p>
                  <button onClick={() => dispatch({ type: 'INCREMENT', target: 'babies' })}  className='p-0.5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
