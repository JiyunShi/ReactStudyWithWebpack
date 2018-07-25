import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import React from 'react'
import PropTypes from 'prop-types';

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

SkiDayRow.propTypes ={
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backCountry: PropTypes.bool

}