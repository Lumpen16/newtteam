import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import NewtFood from './components/newtFood/NewtFood'
import Footer from './components/Footer';
import NotFound from './components/NotFound'



class App extends React.Component{
  render() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/newtFood">
                        <NewtFood />
                    </Route>
                    <Route path="" component={NotFound} />
                </Switch>
                {/*<Route exact path="/" component={Main} />*/}
                <Footer />
            </BrowserRouter>

        </div >
    )
  }
}


export default App;
