import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'
import React from 'react'
import PropTypes from 'prop-types';

export const HelloMessage = (props) => <div>Hello {props.name}</div>;

export const SkiDayList = ({days}) =>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>BackCountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i)=>
                <SkiDayRow key={i}
                            {...day}/>
            )}
        </tbody>
    </table>;

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