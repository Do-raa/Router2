import './App.css';  
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from './Components/About'; 
import Home from './Components/Home'; 
import Contact from './Components/Contact'; 
import Blog from './Components/Blog'; 
import NavBar from './Components/NavBar'; 
import AuthContextProvider from './Context/AuthContext';

function App () {
  return (
    <div className="App">
    <h1>hiii Doudouuu</h1>  
    <AuthContextProvider>
    <BrowserRouter>  
    <NavBar/> 
    <Switch>
    <Route exact path="/"><Home/></Route>  
    <Route path="/about"><About/></Route>  
    <Route path="/contact"><Contact/></Route>  
    <Route path="/blog"><Blog/></Route> 
    </Switch>
    </BrowserRouter></AuthContextProvider>  
    </div>
  );
}

export default App;
