import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App, { store } from './App'

const RenderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
RenderApp()
store.subscribe(() => {
  RenderApp()
})
