import React, { Component } from 'react';
import Axios from 'axios'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            resultArtist: [],
            first_name: "",
            middle_name: "",
            last_name: "",
            title: "",
            gender: "",
            bio: "",
            image_url: "",
            school: "",
            degree: "",
            license_number: "",
            license_state: "",
            specialties_name: "",
            description: "",
            actor: "",
            practice_name: "",
            website: "",
            accepts_new_patients: false,
            practice_city: "",
            practice_state: "",
            practice_street: "",
            practice_zip: "",
            practice_phone_number: "",
            phone_type: "",
            language_name: "",
            category_types: "",
            insurance_uid: "",
            insurance_name:""
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this); //we bind it to give react a memory of what what the event listners do
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeImage_url = this.onChangeImage_url.bind(this);
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeLicense_number = this.onChangeLicense_number.bind(this);
        this.onChangeLicense_state = this.onChangeLicense_state.bind(this);
        this.onChangeSpecialties_name = this.onChangeSpecialties_name.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeActor = this.onChangeActor.bind(this);
        this.onChangePractice_name = this.onChangePractice_name.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this)
        this.onChangeAccepts_new_patients = this.onChangeAccepts_new_patients.bind(this);
        this.onChangePractice_city = this.onChangePractice_city.bind(this);
        this.onChangePractice_state = this.onChangePractice_state.bind(this);
        this.onChangePractice_street = this.onChangePractice_street.bind(this);
        this.onChangePractice_zip = this.onChangePractice_zip.bind(this);
        this.onChangePractice_phone_number = this.onChangePractice_phone_number.bind(this);
        this.onChangePhone_type = this.onChangePhone_type.bind(this);
        this.onChangeLanguage_name = this.onChangeLanguage_name.bind(this);
        this.onChangeCategory_types = this.onChangeCategory_types.bind(this);
        this.onChangeInsurance_uid = this.onChangeInsurance_uid.bind(this);
        this.onChangeInsurance_name = this.onChangeInsurance_name.bind(this);
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
    onChangeImage_url(evt) {
        this.setState({
            image_url: evt.target.value
        });
    }
    onChangeSchool(evt) {
        this.setState({
            school: evt.target.value
        });
    }
    onChangeDegree(evt) {
        this.setState({
            degree: evt.target.value
        });
    }
    onChangeLicense_number(evt) {
        this.setState({
            license_number: evt.target.value
        });
    }
    onChangeLicense_state(evt) {
        this.setState({
            license_state: evt.target.value
        });
    }
    onChangeSpecialties_name(evt) {
        this.setState({
            specialties_name: evt.target.value
        });
    }
    onChangeDescription(evt) {
        this.setState({
            description: evt.target.value
        });
    }
    onChangeActor(evt) {
        this.setState({
            actor: evt.target.value
        });
    }
    onChangePractice_name(evt) {
        this.setState({
            practice_name: evt.target.value
        });
    }
    onChangeWebsite(evt) {
        this.setState({
            website: evt.target.value
        });
    }
    onChangeAccepts_new_patients(evt) {
        this.setState({
            accepts_new_patients: evt.target.value
        });
    }
    onChangePractice_city(evt) {
        this.setState({
            practice_city: evt.target.value
        });
    }
    onChangePractice_state(evt) {
        this.setState({
            practice_state: evt.target.value
        });
    }
    onChangePractice_street(evt) {
        this.setState({
            practice_street: evt.target.value
        });
    }
    onChangePractice_zip(evt) {
        this.setState({
            practice_zip: evt.target.value
        });
    }
    onChangePractice_phone_number(evt) {
        this.setState({
            practice_phone_number: evt.target.value
        });
    }
    onChangePhone_type(evt) {
        this.setState({
            phone_type: evt.target.value
        });
    }
    onChangeLanguage_name(evt) {
        this.setState({
            language_name: evt.target.value
        });
    }
    onChangeCategory_types(evt) {
        this.setState({
            category_types: evt.target.value
        });
    }
    onChangeInsurance_uid(evt) {
        this.setState({
            insurance_uid: evt.target.value
        });
    }
    onChangeInsurance_name(evt) {
        this.setState({
            insurance_name: evt.target.value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        const Profile = {
            profile: [{
                first_name: this.state.first_name,
                middle_name: this.state.middle_name,
                last_name: this.state.last_name,
                title: this.state.title,
                image_url: this.state.image_url,
                gender: this.state.gender,
                bio: this.state.bio
            }],
            educations: [{
                school: this.state.school,
                degree: this.state.degree
            }],
            licenses: [{
                number: this.state.license_number,
                state: this.state.license_state
            }],
            specialties: [{
                name: this.state.specialties_name,
                description: this.state.description,
                actor: this.state.actor
            }],
            practices: [{
                name: this.state.practice_name,
                website: this.state.website,
                accepts_new_patients: this.state.accepts_new_patients,
                visit_address: [{
                    city: this.state.practice_city,
                    state: this.state.practice_state,
                    street: this.state.practice_street,
                    zip: this.state.practice_zip
                }],
                phone: [{
                    number: this.state.practice_phone_number,
                    type: this.state.phone_type
                }],
                languages: [{
                    name: this.state.language_name
                }]
            }],
            insurances: [{
                insurance_plan:[{
                    category:[this.state.category_types]
                }],
                uid: this.state.insurance_uid,
                name: this.state.insurance_name
            }]

        }
        console.log(Profile); //eventually this is going to be where we submit the file to the database i.e do our post request


        const Url = (`http://localhost:8080/directory/update/${this.state.id}`);

        Axios.post(Url, Profile)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            id: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            title: "",
            gender: "",
            bio: "",
            image_url: "",
            school: "",
            degree: "",
            license_number: "",
            license_state: "",
            specialties_name: "",
            description: "",
            actor: "",
            practice_name: "",
            website: "",
            accepts_new_patients: false,
            practice_city: "",
            practice_state: "",
            practice_street: "",
            practice_zip: "",
            practice_phone_number: "",
            phone_type: "",
            language_name: "",
            category_types: "",
            insurance_uid: "",
            insurance_name:""
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