import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
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

    render() {
        return (
            <div>
                <div>
                    <h1>find doctors profile</h1>
                </div>
                <form>
                    <div>
                        <label>
                            Name: <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Profile;