import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye } from './lib';
import SkiDayCount from './components/SkiDayCount';
import {HelloMessage,SkiDayList} from './components/SkiDayList';
import App from './components/App'

Window.React = React;

render(
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
        /> */}
    </div>,

	document.getElementById('react-container')
)