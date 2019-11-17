import React, { Component } from 'react';

class Speciality extends Component{
    render(){
        return (  
            <div>
                <div>
                    <h1>this is Speciality</h1>
                </div>
            <form>
                <div>
                    <label>
                    Speciality: <input type="text" />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
        )
    }
}
export default Speciality;