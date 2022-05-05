import logo from './logo.svg';
import './App.css';
import LoginPage from './component/LoginPage/loginpage';
import { BrowserRouter } from "react-router-dom";
import ChatTable from './component/Tables/ChatTable';
import EventTable from './component/Tables/EventTable';
import Navigation from './component/Tables/Navigation';
import { Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/" component={ChatTable} exact/>
        <Route path="/event-history-tab" component={EventTable} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
