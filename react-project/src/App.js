import './Assets/Styles/App.css';
import Card from './Components/Card';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardInfo from './Components/CardInfo';
import Background from './Components/Background';
function App() {
  return (
    <>
    <Nav/> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
                <Background/>
                <div className="App container-fluid m-auto row gap-5 my-4 justify-content-center">
                <Card/>
              </div>
              </> }>
        </Route>
        <Route path="/:bookId" element={<CardInfo/>}></Route>



        </Routes>
        </BrowserRouter>

    <Footer/>
    </>
  );
}

export default App;
