import './App.css';
import { Header } from './component/Header/Header'
import { Login } from './component/Login/Login'
import { Signup } from './component/Signup/Signup'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
