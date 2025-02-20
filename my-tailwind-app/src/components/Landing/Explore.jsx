import React from 'react'
import Card from './Card'

const Explore = () => {
  return (
    <div className='mt-5'>
      <div className=''>
        <img className='' src="explore.svg" alt="" />
      </div>

      <div className='flex justify-between mt-8'>

        <Card 
            image="ball.svg" 
            heading="Card Title" 
            text="Understand every article of the Indian Constitution through engaging, simplified stories brought to life with animated videos." 
        />

        <Card 
            image="ball.svg" 
            heading="Story-Based Learning" 
            text="This is a sample description text." 
        />

        <Card 
            image="ball.svg" 
            heading="Gamified Revisions" 
            text="This is a sample description text." 
        />

        <Card 
            image="ball.svg" 
            heading="Mega Quiz" 
            text="This is a sample description text." 
        />

      </div>

    </div>
  )
}

export default Explore
