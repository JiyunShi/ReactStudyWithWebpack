import React from "react"
import SkiDayCount from './SkiDayCount';
import {HelloMessage,SkiDayList} from './SkiDayList';
import { AddDayForm } from "./AddDayForm";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allSkiDays:  [   
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
        };
      }
    
    countDays(filter){
        const {allSkiDays} = this.state;
        return allSkiDays.filter((day)=>{
            if(filter){
                return day[filter];
            }
            return day;
        }).length
    }
   
    render(){
        return (
            <div className="app">
                {
                    (this.props.location.pathname ==="/") ?
                        <SkiDayCount total={this.countDays()} 
                        powder = {this.countDays("powder")}
                        backCountry = {this.countDays("backCountry")}
                    /> :
                    (this.props.location.pathname ==="/add-day") ?
                        <AddDayForm />:
                        <SkiDayList days ={this.state.allSkiDays}/>
                }

            </div>
        )
    }



}

export default App;