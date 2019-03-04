import React from 'react'

import { Intro } from './Intro'

import './App.css'

const App = () => {
  return (
    <div className="container">
      <p>Стартер для нового проекта!</p>
      <Intro name="Max" age={30} />
    </div>
  )
}

export { App }
