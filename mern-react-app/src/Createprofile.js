import React, { Component } from 'react';
import Axios from 'axios'

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            middle_name: "",
            last_name: "",
            title: "",
            gender: "",
            bio: "",
        }
        this.onChangeFirstName = this.onChangeFirstName.bind(this); //we bind it to give react a memory of what what the event listners do
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeFirstName(evt) {
        this.setState({
            first_name: evt.target.value
        });
    }
    onChangeMiddleName(evt) {
        this.setState({
            middle_name: evt.target.value
        });
    }
    onChangeLastName(evt) {
        this.setState({
            last_name: evt.target.value
        });
    }
    onChangeTitle(evt) {
        this.setState({
            title: evt.target.value
        });
    }
    onChangeGender(evt) {
        this.setState({
            gender: evt.target.value
        });
    }
    onChangeBio(evt) {
        this.setState({
            bio: evt.target.value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        const Profile = {
            first_name: this.state.first_name,
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            title: this.state.title,
            gender: this.state.gender,
            bio: this.state.bio
        }
        console.log(Profile); //eventually this is going to be where we submit the file to the database i.e do our post request
        // window.location = "/"; //this will take us back to the homepage after creating the profile

        Axios.post('http://localhost:8080/directory', Profile)
        .then(res => console.log (res.data))
        .catch(err => console.log(err))

        this.setState({
            first_name: "",
            middle_name: "",
            last_name: "",
            title: "",
            gender: "",
            bio: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome! we are glad you're here</h1>
                <h2>insert some thing about doctors</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <h1>Sign Up</h1>
                    <div>
                    <input type="text" value={this.state.first_name} placeholder="First Name" onChange={this.onChangeFirstName}/>
                    </div>
                    <div>
                    <input type="text" value={this.state.middle_name} placeholder="Middle Name" onChange={this.onChangeMiddleName} />
                    </div>
                    <div>
                    <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.onChangeLastName} />
                    </div>
                    <div>
                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.onChangeTitle} />
                    </div>
                    <div>
                    <input type="text" value={this.state.gender} placeholder="Gender" onChange={this.onChangeGender} />
                    </div>
                    <div>
                    <input type="text" value={this.state.bio} placeholder="Bio" onChange={this.onChangeBio} />
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

export default CreateProfile;