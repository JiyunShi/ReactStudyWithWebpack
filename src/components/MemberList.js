import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member';

class MemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch('https://api.randomuser.me/?nat=US&results=12')
            .then(response=> response.json())
            .then(json=>json.results)
            .then(sampleMembers=>{
                var tempMembers = []
                sampleMembers.map(sampleMember=>{
                    let member ={name:null, email:null, thumbnail:null}
                    member.name = sampleMember.name.first
                    member.email =sampleMember.email
                    member.thumbnail = sampleMember.picture.thumbnail
                    tempMembers.push(member)
                })

                this.setState(
                    {   
                        members:tempMembers ,
                        loading:false
                    }
                )
            } )
    }


    render() {

        const{members, loading} =this.state
        return (

            <div className="member-list">
            	<h1>Society Members</h1>

                {(loading)?
                <span>loading...</span>
                :<span>{members.length}</span>}


                {members.map((member, i)=>
                    <Member key={i}
                        makeAdmin = {(email)=>console.log(email)}
                        {...member}            
                    />
                )}

            </div>
        )    
   }     
}

export default MemberList