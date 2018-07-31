import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'
import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const HelloMessage = (props) => <div>Hello {props.name}</div>;

export const SkiDayList = ({days, filter}) => {
    if(filter) console.log(filter);
    const filteredDays = (!filter||!filter.match(/powder|backCountry/))?
        days: days.filter(day=>day[filter]);
    return(
    <div className="ski-day-list">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>BackCountry</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to="/list-days">
                        All Days
                    </Link>
                    <Link to="/list-days/powder">
                       Powder Days
                    </Link>
                    <Link to="/list-days/backCountry">
                        backCountry Days
                    </Link>
                </td>
            </tr>
        </thead>
        <tbody>
            {filteredDays.map((day, i)=>
                <SkiDayRow key={i}
                            {...day}/>
            )}
        </tbody>
    </table>
    </div>
    )
}
SkiDayList.propTypes={
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
                "SkiDayList input should be Array"
            );
        }else if(!props.days.length){
            return new Error(
                "SkiDayList must have 1 value"
            );
        }else{
            return null;
        }
    }
}