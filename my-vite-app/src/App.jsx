import { useState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import DataFetchingComponent from './components/DataFetchingComponent'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="mb-4 font-extrabold leading-none text-6xl">Louis testing</h1>
      <DataFetchingComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
