import React, { Component } from 'react';
import Axios from 'axios'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            first_name: "",
            last_name: ""
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this); //we bind it to give react a memory of what what the event listners do
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeId(evt) {
        evt.preventDefault();
        this.setState({
            id: evt.target.value
        });
    }

    onChangeFirstName(evt) {
        this.setState({
            first_name: evt.target.value
        });
    }

    onChangeLastName(evt) {
        this.setState({
            last_name: evt.target.value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        const UpdatedProfile = {
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        console.log(UpdatedProfile); //eventually this is going to be where we submit the file to the database i.e do our post request


        const Url = (`http://localhost:8080/directory/update/${this.state.id}`);

        Axios.post(Url, UpdatedProfile)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            id: "",
            first_name: "",
            last_name: ""
        })
    }



    render() {
        return (
            <div>
                <h1>Welcome! we are glad you're here</h1>
                <h2>insert some thing about doctors</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1>Update your profile</h1>
                        <div>
                            <input type="text" value={this.state.id} placeholder="Type your profile id" onChange={this.onChangeId} />
                        </div>
                        <div>
                            <input type="text" value={this.state.first_name} placeholder="First Name" onChange={this.onChangeFirstName} />
                        </div>
                        <div>
                            <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.onChangeLastName} />
                        </div>
                        <div>
                            <input type="submit" placeholder="Create New Profile" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProfile;