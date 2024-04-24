import Header from "./headerAndFooter/header.jsx"
import Footer from "./headerAndFooter/footer.jsx"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/HomePage.jsx"
import BubbleSortPage from "./pages/BubbleSortPage.jsx"
import InsertionSortPage from "./pages/InsertionSortPage.jsx"

import TestingPage from "./pages/TestingPage.jsx"
import ShellSortPage from "./pages/ShellSortPage.jsx"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bubble-sort" element={<BubbleSortPage/>} />
        <Route path="/insertion-sort" element={<InsertionSortPage/>} />
        <Route path="/shell-sort" element={<ShellSortPage/>} />
        <Route path="/testing" element={<TestingPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
