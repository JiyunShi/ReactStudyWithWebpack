import React from 'react'
import PropTypes from 'prop-types';
import '../styleSheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'

class SkiDayCount extends React.Component{




    percentToDecimal(decimal){
        return ((decimal*100)+'%');
    }

    calcGoalProgress(total, goal){
        return this.percentToDecimal(total/goal);
    }

    render(){
        return (
            <div className='ski-day-count' >
                <div className = 'total-days'>
                    <span>{this.props.total}</span>
                        <Calender />
                    <span>days</span>
                </div>
                <div className = 'powder-days'>
                    <span>{this.props.powder}</span>
                        <SnowFlake />
                    <span>days</span>
                </div>
                <div className = 'backCountry-days'>
                    <span>{this.props.backcountry}</span>
                        <Terrain />
                    <span>days</span>
                </div>
                <div className = 'backCountry-days'>
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
}


SkiDayCount.defaultProps = {
    total: 50,
    powder: 10, 
    backCountry: 15,
    goal: 100
  };

  SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    powder:PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}


export default SkiDayCount;