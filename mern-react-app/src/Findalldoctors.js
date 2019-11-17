import React, { Component } from 'react';
import Axios from 'axios'
// import Doctors from 'Doctors'

class Findalldoctors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Doctors: []
        }
        // this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/directory')
            .then(res => {
                this.setState({ Doctors: res.data })
                console.log(this.state.Doctors)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {


        return (
            <div>
                <div>
                    <h1>Here's a list of all doctors in the area</h1>
                </div>
                <div>
                    {this.state.Doctors.map((object, index) => {
                        // console.log(object)
                        console.log(object.insurances[0])    
                        return (
                            <div key={object._id + 0}>
                                <p key={object._id + 1}>{object.profile[0].first_name} {object.profile[0].last_name}</p>
                                <p key={object._id + 2}>{object.profile[0].bio}</p>
                                <img src={object.profile[0].image_url} alt="" key={object._id + 3}/>
                            </div>
                        )

                    })}
                </div>
            </div>
        )
    }

}

export default Findalldoctors;