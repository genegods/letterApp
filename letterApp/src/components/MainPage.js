import React from 'react'
import { LetterData } from "../data/LetterData";
import LetterPage from './LetterPage';
import { NavLink } from "react-router-dom";

const MainPage = () => {
    const activeLink = 'font-bold text-white '
    const normalLink = ''
  return (
    <React.Fragment>
    <section className="relative mx-auto w-4/5 mt-28 md:w-1/5 md:mx-auto">
      <div className="layout">
        {
            LetterData.map((item, index) =>{
                return(
                    <div key={index} 
                    className={`text-6xl border bg-blue-500 uppercase centered ${item.alphabet}`}
                    >
                        <NavLink to={item.path} 
                        className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                       }
                        >
                        <span>{item.alphabet}</span>
                        </NavLink>
                    </div>
                )
            })
        }
        
      </div>

      <div className="letterPagePosition">
        <LetterPage/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage