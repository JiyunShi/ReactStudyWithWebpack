import React from "react"
import SkiDayCount from './SkiDayCount';
import {HelloMessage,SkiDayList} from './SkiDayList';
import { AddDayForm } from "./AddDayForm";
import {Menu} from "./Menu";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allSkiDays:  [   
                {
                    resort: "Sqaw Valley",
                    date: "01/02/2018",
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Kirkwood",
                    date: "03/25/2018",
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "AAA",
                    date: "05/02/2018",
                    powder: false,
                    backcountry: true
                },
            ]
        };
        this.addDay=this.addDay.bind(this);
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
   
    addDay(newDay){
        console.log(newDay);
        this.setState({
            allSkiDays:[
                ...this.state.allSkiDays,
                newDay
            ]
        })
        
    }


    render(){
        const {allSkiDays} = this.state;
        console.log(allSkiDays);
        return (
            <div className="app">
            <Menu />
                {
                    (this.props.location.pathname ==="/") ?
                        <SkiDayCount total={this.countDays()} 
                        powder = {this.countDays("powder")}
                        backCountry = {this.countDays("backCountry")}
                    /> :
                    (this.props.location.pathname ==="/add-day") ?
                        <AddDayForm onNewDay={this.addDay}/>:
                        <SkiDayList days ={this.state.allSkiDays}
                                    filter = {this.props.match.params.filter}/>
                }

            </div>
        )
    }



}

export default App;