import React, { Component } from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile: [],
        }
    }

    // onProfileNameChange(evt){
    //     this.setState({
    //         profile.name: e.target.value,
    //     })
    // }

    render(){
        return (
            <div>
                <h1>find doctors profile</h1>
            </div>
        )
    }
}
export default Profile;