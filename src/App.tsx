import { Intro } from './Intro'
import React from 'react'

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
