import { useState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import DataFetchingComponent from './components/DataFetchingComponent'


export default function App() {
//   return (
//     <div>
//     <h1> Ugh </h1>
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route index element={<Home />} />
//       </Routes>
//     </div>
//     </div>
//   );
// }

// function Layout(){
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li> 
//             <Link to="/">Home</Link>
//           </li>
//         </ul>
//       </nav>
//       <hr />

//     <Outlet />
//     </div>
//   )
// }

// function Home() {
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
