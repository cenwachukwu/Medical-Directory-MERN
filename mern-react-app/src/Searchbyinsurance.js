// import React, { Component } from 'react';

// class Insurance extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             insuranceName: "",
//             valid: false
//         };
//         this.InsuranceInput = this.InsuranceInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         console.log(this.state)
//     }

//     InsuranceInput(evt) {
//         evt.preventDefault();
//         this.setState({
//             insuranceName: evt.target.value
//         });
//         console.log(evt.target.value)
//     }

//     handleSubmit(evt) {
//         evt.preventDefault();
//         console.log('submited')
//         if (this.state.insuranceName === object.insurances[0].insurance_plan[0].category) {
//             this.valid = true
//             alert("Password changed")
//             console.log(this.valid)
//         }
//         else {
//             alert("Passwords do not match")
//         }
//         // do something with form data
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <h1>search by insurance</h1>
//                 </div>
//                 {this.state.Doctors.map((object, index) => {
//                     // console.log(object)
//                     console.log(object.insurances[0])
//                     return (
//                         <div>
//                             <form onSubmit={this.handleSubmit}>
//                                 <div>
//                                     <label>
//                                         Insurance type: <input type="text" value={this.insuranceName} onChange={this.InsuranceInput} />
//                                     </label>
//                                     <input type="submit" value="Submit" />
//                                 </div>
//                             </form>
//                         </div>
//                     )

//                 })}

//             </div>
//         )
//     }
// }
// export default Insurance;
