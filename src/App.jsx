import Aboutus from "./Aboutus";
import Documentation from "./Documentation";
import Banner from "./components/Banner";
import Terminal from "./components/Terminal";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<> <Banner/> <Terminal/> </>} />
        <Route path="/about-us" element={<Aboutus/>} />
        <Route path="/docs/*" element={< Documentation/>} />
      </Routes>
    </>
  );
}