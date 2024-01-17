import { useState } from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/root';
import "./global.scss"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
