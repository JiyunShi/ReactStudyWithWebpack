import React from 'react'
import '../styleSheets/ui.scss'


class SkiDayCount extends React.Component{
    render(){
        return (
            <div className='ski-day-count' >
                <div className = 'total-days'>
                    <span>5 days</span>
                </div>
            </div>
        )
    }
}

export default SkiDayCount;