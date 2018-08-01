import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye } from './lib';
import SkiDayCount from './components/SkiDayCount';
import {HelloMessage,SkiDayList} from './components/SkiDayList';
import App from './components/App'
import {Router, Route, Link, Switch} from 'react-router-dom';
import history from './history';
import {Whoops404} from './components/Whoops404.js'
import './styleSheets/ui.scss'
import './styleSheets/index.scss'
import Member from './components/Member';
import MemberList from './components/MemberList';
render(

    <Router history={history}>
        <div>
            {hello}
            {goodbye}
            <HelloMessage name="World" />
            <SkiDayCount 
                            total = {1}
                            powder={25} 
                            backCountry={22}
                            goal= {100}/>
            
            <Switch>
            <Route  path="/" exact component = {App}/>
            <Route  path="/list-days" exact component = {App} />
            <Route  path="/list-days/:filter" component = {App} >
            </Route>
            <Route  path="/add-day" component = {App}/>
            <Route  component={Whoops404}/>
            </Switch>
            <MemberList />
        </div>
    </Router>

/*
<div>
        {hello}
        {goodbye}
        <HelloMessage name="kitty" />
        <SkiDayCount 
                        total = {1}
                        powder={25} 
                        backCountry={22}
                        goal= {100}/>
        <App />
        
        {/* <SkiDayList days={
            [   
                {
                    resort: "Sqaw Valley",
                    date: new Date("01/02/2018"),
                    powder: true,
                    backCountry: false
                },
                {
                    resort: "Kirkwood",
                    date: new Date("03/25/2018"),
                    powder: false,
                    backCountry: false
                },
                {
                    resort: "AAA",
                    date: new Date("05/02/2018"),
                    powder: false,
                    backCountry: true
                },
            ]
        }
        /> 
    </div>
*/
    ,

	document.getElementById('react-container')
)