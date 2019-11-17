import React, { Component } from 'react';
import Axios from 'axios';

class Speciality extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: "", //to show the users query
            result: [], //to show the results
            loading: false, //to show some form of loading image thing //might not use this
            message: '' //to show some error message if we encounter one
        };

        this.cancel = '';  //for best practices
    }

    fetchResultsFromApi = (query) => {
        const Url = `http://localhost:8080/directory/profile/${query}`;

        if (this.cancel) {
            this.cancel.cancel(); //before making a request we first check if the token was already availble then we cancel that previous request before createing a new one  
        }
        this.cancel = Axios.CancelToken.source(); //this is how we creact a token //might also take this out

        Axios.get(Url, { cancelToken: this.cancel.token })
            .then(res => {
                console.log(res.data[0])
                console.log(res.data[0].educations[0].school)
                const resultNotFoundMsg = !res.data.length //So we got the response but data[0] is empty 
                    ? "There are no more search results"
                    : '';
                this.setState({
                    result: res.data, //now we set state of results to res.data[0]
                    message: resultNotFoundMsg,
                    loading: false
                })
                console.log(this.state.result)
            })
            .catch(err => {
                if (Axios.isCancel(err) || err) {
                    this.setState({
                        loading: false,
                        message: 'failed to fetch data. please check again'
                    })
                }
            })
    }

    onProfileNameChange = (evt) => {
        const query = evt.target.value;
        console.log(query)
        this.setState({ query: query, loading: true, message: '' }, () => {
            this.fetchResultsFromApi(query);
        });
        //we set the message to empty so it clears any prior message 
    }

    render() {
        const { query, result } = this.state;
        console.log(this.state)
        return (
            <div>
                <div>
                    <h1>find doctors profile</h1>
                </div>
                <div>
                    <input type="text" value={query} placeholder="find doctors by firstname "
                        onChange={this.onProfileNameChange} />
                    <input type="submit" value="Submit" />
                </div>           
                {/* {this.renderResults()} */}
                <div>
                    {this.state.result.map((object, index) => {
                        console.log(object)
                        console.log(object.educations[0].school)    
                        return (
                            <div key={object._id + 0}>
                                {/* <p key={object._id + 1}>{object.educations[0].school} {object.educations[0].schoole}</p> */}
                                <p key={object._id + 2}>{object.educations[0].school}</p>
                                {/* <img src={object.profile[0].image_url} alt="" key={object._id + 3}/> */}
                            </div>
                        )

                    })}
                </div>
            </div>
        )
    }
}
export default Speciality;