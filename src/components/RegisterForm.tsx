// import { signUp } from "../services/user-service";
// function RegisterForm() {
//     const submitForm = () => {
//         console.log("CLICKED!");
//         signUp("Rachana")
//     }
//     return (
//         <>
//             <div className="container">
//                 <h1>Registration Form</h1>
//                 <form method="POST">

//                     <div className="mb-3">
//                         <label className="form-label">Name</label>
//                         <input type="input" className="form-control" id="name" />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Phone Number</label>
//                         <input type="tel" className="form-control" id="phoneNumber" placeholder="123456890" pattern="[0-9]{10}" required />
//                     </div>
//                     {/* <div className="mb-3">
//                         <label className="form-label">Email address</label>
//                         <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
//                     </div> */}
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" />
//                         <div id="passwordHelpBlock" className="form-text">
//                             Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <button className="btn btn-primary" type="submit" onSubmit={submitForm()}>Submit</button>
//                     </div>
//                 </form>
//             </div>

//         </>
//     );
// }

// export default RegisterForm;