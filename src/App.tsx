import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Gowesmart from "./pages/Gowesmart"
import Society from "./pages/Society"
import Orineko from "./pages/Orineko"
import ReviewLaptop from "./pages/ReviewLaptop"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gowesmart" element={<Gowesmart />} />
        <Route path="/society" element={<Society />} />
        <Route path="/orineko" element={<Orineko />} />
        <Route path="/review-laptop" element={<ReviewLaptop />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
