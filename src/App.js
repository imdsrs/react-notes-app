import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
          {/* <Body/> */}
          {/* <NotesListPage/> */}
          <Routes>
            <Route path='/' exact element={<NotesListPage/>}/>
            <Route path='/note/:idValue' element={<NotePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
          {/* <Footer/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
