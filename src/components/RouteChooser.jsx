import useOpen from '../hooks/useOpen'

export default function RouteChooser({currentRoute, routes, changeRoute}) {

  const [open, setOpen, containerRef] = useOpen()
  

  return (
    <>
      <div className={'w-full rounded-md border py-1 px-2 flex cursor-pointer  ' + (open ? 'border-blue-400' : 'border-zinc-400')}>
        <div onClick={() => {setOpen(!open)}} className='w-full'>
          <p className='text-xs text-zinc-400'>Ruta</p>
          <p className='text-zinc-600'>{currentRoute.name}</p>
        </div>

        <div className='w-1/4 flex justify-center items-center'>
        </div>
        {
          open && (
            <div ref={containerRef} className='w-full rounded-lg shadow-xl py-5 px-7 bg-white absolute bottom-0 left-0 translate-y-full'>
              {
                routes.map((route, index) => (
                  <div key={index} className='w-full bg-gray-100 hover:bg-gray-200 rounded-md p-2 my-2' onClick={() => changeRoute(index)}>
                    
                    <p>{route.name}</p>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}
