import './App.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/LogIn/Store'
import LogIn from './Redux/LogIn/LogIn'
import Register from './Redux/Register/Register'
import Home from './Home'
import dorms from './Redux/Forms/dorms'
import rooms from './Redux/Forms/rooms'
import students from './Redux/Forms/students'
import groups from './Redux/Forms/groups'
import payments from './Redux/Forms/payments'
import observers from './Redux/Forms/observers'
import shifts from './Redux/Forms/shifts'
import reserves from './Redux/Forms/reserves'

function App() {
    return (
      <BrowserRouter>
        <Provider store = {store}>
        <div>
            <Switch>
                <Route path = '/Register' component = {Register} /> 
                <Route path = '/Home' component = {Home} />
                <Route path = '/dorms' component = {dorms} />
                <Route path = '/rooms' component = {rooms} />
                <Route path = '/students' component = {students} />
                <Route path = '/groups' component = {groups} />
                <Route path = '/payments' component = {payments} />
                <Route path = '/observers' component = {observers} />
                <Route path = '/shifts' component = {shifts} />
                <Route path = '/reserves' component = {reserves} />
                <Route path = '/' component = {LogIn} />  {/*Always at end of Routes*/}
            </Switch>
        </div>
        </Provider> 
      </BrowserRouter>
    );
  }

export default App;
