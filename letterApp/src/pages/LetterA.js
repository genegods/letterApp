import React from 'react'
import aImg from '../asserts/images/a.jpg'

const LetterA = () => {
  return (
    <React.Fragment>
    <section>
      <div>
      <img
       src={aImg}alt='img'
       className='letterImage'
       />
      </div>
    </section>
  </React.Fragment>
  )
}

export default LetterA