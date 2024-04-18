import Header from "./header/header.jsx"
import { Route, Routes } from "react-router-dom"
import BubbleSortPage from "./sortVisualizer/BubbleSortPage.jsx"
import Home from "./sortVisualizer/HomePage.jsx"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bubble-sort" element={<BubbleSortPage/>} />
      </Routes>
    </>
  )
}

export default App
