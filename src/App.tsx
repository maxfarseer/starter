import * as React from 'react'

import { Link, Router } from '@reach/router'

import { About } from './pages/About'
import { Home } from './pages/Home'

import './App.css'

const App = ({ children }: any) => {
  return (
    <div className="container">
      <h1>TS starter with stuff</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="about/me">About me</Link>{' '}
        <Link to="about/public">About maxpfrontend</Link>
      </nav>

      {children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App path="/">
        <Home path="/" />
        <About path="/about/:source" />
      </App>
    </Router>
  )
}

export { RoutedApp }
