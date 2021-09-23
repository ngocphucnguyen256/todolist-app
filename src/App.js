import './App.css';
import React, { Component } from 'react';
import Todolist from './components/Todolist'
// import Login from './components/Login'
// import CrudUser from './components/CrudUser'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Todolist/>
      // <Router>
      //   <div className="container">
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <Link to={'/'} className="navbar-brand">To do list</Link>
      //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //         <ul className="navbar-nav mr-auto">
      //         <li className="nav-item">
      //             <Link to={'/'} className="nav-link">Home</Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to={'/login'} className="nav-link">Login</Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to={'/cruduser'} className="nav-link">Crud User</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav> <br/>
      //     <h2>Welcome to to do list</h2> <br/>
      //     <Switch>
      //         <Route exact path='/login' component={ Login } />
      //         {/* <Route path='/edit/:id' component={ Edit } /> */}
      //         <Route path='/cruduser' component={ CrudUser } />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

export default App;