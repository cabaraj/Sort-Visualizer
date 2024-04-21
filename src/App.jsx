import Header from "./headerAndFooter/header.jsx"
import Footer from "./headerAndFooter/footer.jsx"
import { Route, Routes } from "react-router-dom"
import BubbleSortPage from "./sortVisualizer/BubbleSortPage.jsx"
import Home from "./sortVisualizer/HomePage.jsx"
import TestingPage from "./sortVisualizer/TestingPage.jsx"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bubble-sort" element={<BubbleSortPage/>} />
        <Route path="/testing" element={<TestingPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
