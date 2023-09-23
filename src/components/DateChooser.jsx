import { useState } from 'preact/hooks'
import React from 'react'
import DatePicker from 'tailwind-datepicker-react'

const options = {
  theme: {
    input: "border-none bg-zinc-100",
  },

  language: "es",
}

export default function DateChooser({changeDate}) {

  const [show, setShow] = useState(false)
  
	const handleClose = (state) => {
		setShow(state)
	}
  



  return (
    <>
      <div className={'w-full rounded-md border px-2 flex items-center justify-center cursor-pointer  ' + (open ? 'border-blue-400' : 'border-zinc-400')}>
        <DatePicker options={options} onChange={changeDate} show={show} setShow={handleClose} />
      </div>
    </>
  )
}
