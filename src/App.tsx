import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Gowesmart from "./pages/Gowesmart"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gowesmart" element={<Gowesmart />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
