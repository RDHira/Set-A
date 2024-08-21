import React from 'react'
import './App.css'
import Accordion from './components/Accordion';
import  SearchFilter from './components/SearchFilter'
import Button from './components/Button';


function App() {
  return (
    <>
     <div className="">
     <h1 className='text-3xl text-white text-center sticky'>Set-A: <span className='text-orange-500'>Task1: Accordion</span> & <span className='text-yellow-300'>Task2: Search Filter</span></h1>
      <Button />
     <Accordion />
     <SearchFilter />
     </div>
    </>
  )
}

export default App;
