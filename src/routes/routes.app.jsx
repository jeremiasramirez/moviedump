import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom'
import ShowsPage from '../pages/shows/shows.page';
import StartPage from '../pages/start/start.page';
import ShowPage from '../pages/show/show.page';


const RouteApp = ()=>{

    return <Router>
        <div>
        

        <Switch>
            <Route exact path='/shows' component={ShowsPage} />
            <Route exact path='/shows/:id' component={ShowPage} /> 
            <Route exact path='/start' component={StartPage} />
            <Route exact path='/' component={StartPage} />
            <Route exact path=''  component={StartPage} />
            
        </Switch>
        </div>
    </Router>


};

export default RouteApp;