import React from 'react'
import bImg from '../asserts/images/b.jpg'

const LetterB = () => {
  return (
    <React.Fragment>
    <section>
      <div>
      <img
       src={bImg}alt='img'
       className='letterImage'
       />
      </div>
    </section>
  </React.Fragment>
  )
}

export default LetterB