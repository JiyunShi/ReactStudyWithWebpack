import FaShield from 'react-icons/lib/fa/shield'
import {Component} from 'react'

class Member extends Component {

    constructor(props){
        super(props);
        this. makeAdminClick = this. makeAdminClick.bind(this);
    } 

    componentWillMount(){
        this.style={
            backgroundColor:'gray'
        }
    }

    makeAdminClick (){
        this.props.makeAdmin(this.props.email);
    }

    render(){
        return (
            <div className="member" style={this.style}>
                <h1>
                    {this.props.name} <FaShield />
                </h1>
                <img src={this.props.thumbnail} /> 
                <p><a href={`mailto: ${this.props.email}`}>{this.props.email}  </a></p>
                <button onClick={this.makeAdminClick}> Make Admin </button>
            </div>
        )
    }


}

export default Member;