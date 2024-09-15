
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import {SearchProvider} from './Context/SearchContext'

function App() {
  return (
    <>
    <SearchProvider>
      <Header />
        <Outlet />
      <Footer />
    </SearchProvider>
    </>
  );
}

export default App;
