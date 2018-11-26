import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './components/MainPage/MainPage'


class App extends Component {
  componentDidMount() {
  }

  RenderMainPage( { match } ){
    return <MainPage roomid = {match.params.roomid} username = {match.params.username} />
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login} />
        <Route path="/main-page/:roomid/:username" component={this.RenderMainPage} />
        <div className="Header-Footer">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;