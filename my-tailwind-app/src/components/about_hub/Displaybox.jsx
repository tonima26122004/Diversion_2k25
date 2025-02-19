import React from 'react'

const Displaybox = (read) => {
  return (
  <div>
    <div className='flex flex-col gap-4'>

      <h1 className='text-3xl font-md font-libra '>Article 1 of the Indian Constitution states:</h1>
      <div><h1 className='text-xl font-libra'>1.Name and Territory of the Union:</h1></div>

      <div>
        <ul className='list-disc font-libra text-xl ml-10'>
          <li>India, that is Bharat, shall be a Union of States.</li>
          <li>The States and the territories thereof shall be as specified in the First Schedule.</li>
          <li>The territory of India shall comprise:</li>
        </ul>
        <div className='ml-16 '>
            <li className='font-libra text-xl'>The territories of the States;</li>
            <li className='font-libra text-xl'>The Union territories specified in the First Schedule;</li>
            <li className='font-libra text-xl'>Such other territories as may be acquired.</li>
        </div>
        <div>
        <p className='text-xl font-libra mt-4'>
        This article establishes the official name of the country ("India, that is Bharat") and lays down the composition of India in terms of its states and union territories.
        </p>
        </div>
        
      </div>
    </div>
  </div>
    
  )
}

export default Displaybox
