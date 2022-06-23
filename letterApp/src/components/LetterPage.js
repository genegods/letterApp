import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LetterA from '../pages/LetterA'
import LetterB from '../pages/LetterB'
import LetterC from '../pages/LetterC'
import LetterD from '../pages/LetterD'
import LetterE from '../pages/LetterE'
import LetterF from '../pages/LetterF'
import LetterG from '../pages/LetterG'
import LetterH from '../pages/LetterH'
import LetterI from '../pages/LetterI'
import LetterJ from '../pages/LetterJ'
import LetterK from '../pages/LetterK'
import LetterL from '../pages/LetterL'

const LetterPage = () => {
  return (
    <React.Fragment>
    <section>
        <Routes>
        <Route path="/" element={<LetterA/>}/>
         <Route path="/b" element={<LetterB/>}/>
         <Route path="/c" element={<LetterC/>}/>
         <Route path="/d" element={<LetterD/>}/>
         <Route path="/e" element={<LetterE/>}/>
         <Route path="/f" element={<LetterF/>}/>
         <Route path="/g" element={<LetterG/>}/>
         <Route path="/h" element={<LetterH/>}/>
         <Route path="/i" element={<LetterI/>}/>
         <Route path="/j" element={<LetterJ/>}/>
         <Route path="/k" element={<LetterK/>}/>
         <Route path="/l" element={<LetterL/>}/>
        </Routes>
  
    </section>
  </React.Fragment>
  )
}

export default LetterPage