import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home/home"
import Error from "./Views/Error/error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />}  />
      </Routes>
    </div>
  )
}

export default App
