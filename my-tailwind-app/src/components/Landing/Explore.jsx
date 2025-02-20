import React from 'react'
import Card from './Card'

const Explore = () => {
  return (
    <div className='mt-5'>
      <div className=''>
        <img className='' src="explore.svg" alt="" />
      </div>

      <div className='flex justify-between mt-8 gap-6'>

        <Card 
            image="ball.svg" 
            heading="Story-Based Learning" 
            text="Understand every article of the Indian Constitution through engaging, simplified stories brought to life with animated videos." 
        />

        <Card 
            image="ball.svg" 
            heading="Gamified Revisions" 
            text="Boost retention and motivation with word scramble quizzes, earning badges and levels to track progress after each story." 
        />

        <Card 
            image="ball.svg" 
            heading="Real-Time Legal Aid" 
            text="Access instant legal support through an AI-powered chatbot, trained in CPC law, for guidance during unforeseen situations." 
        />

        <Card 
            image="ball.svg" 
            heading="Mega Quiz" 
            text="Test your knowledge and reinforce learning with a comprehensive Mega Quiz at the end of your journey.  " 
        />

      </div>

    </div>
  )
}

export default Explore
