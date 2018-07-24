import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import React from 'react'

export const SkiDayRow = ({resort, date, powder, backCountry})=>(
   
    <tr>
        <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
        <td>
            {resort}
        </td>
        <td>
            {(powder)? <SnowFlake/>: null}
        </td>
        <td>
            {(backCountry)? <Terrain /> : null}
        </td>
    </tr>
);
