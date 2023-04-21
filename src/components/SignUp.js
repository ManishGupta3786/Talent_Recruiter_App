import axios from 'axios';
import './SignUp.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

function SignUp() {
    let result;
    const [fName, set_fName] = useState("");
    const [lName, set_lName] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [cPassword, set_cPassword] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const [status, setStatus] = useState(false);
    async function getFormData(e) {
        e.preventDefault();
        result = await axios.post('http://localhost:5000/talent_recruiter/signup', { fName, lName, email, password, cPassword });
        if(result.data.status){
            Swal.fire({
                title: "Good Job!",
                text: "You have successfully sign-up",
                icon: "success",
                confirmButtonText: "OK!",
              });
        }else{
            Swal.fire({
                title: "Bad Job!",
                text: "Somthing is went wrong",
                icon: "error",
                confirmButtonText: "OK",
              });
        }

          set_fName('');
          set_lName('');
          set_email('');
          set_password('');
          set_cPassword('');
          setErrMsg('');
          setStatus(false);
    }
    function onValidation(e) {
        set_cPassword(e.target.value)
        if (cPassword !== password) {
            setErrMsg("Password and Confirm password does not match.");
            setStatus(false);
        }
        else {
            setErrMsg('');
            setStatus(true);
        }
    }
    function resetData() {
        set_fName('');
        set_lName('');
        set_email('');
        set_password('');
        set_cPassword('');
        setErrMsg('');
        setStatus(false);
    }
    return (
        <div className="signup">
            <form onSubmit={getFormData}>
                <fieldset >
                    <legend>SignUp Form</legend><br /><br />
                    <label htmlFor="fname">First name :</label>
                    <input type="text" id="fname" name="fname" placeholder='Enter first name' onChange={e => set_fName(e.target.value)} required value={fName} /><br /><br />
                    <label htmlFor="lname">Last name :</label>
                    <input type="text" id="lname" name="lname" placeholder='Enter last name' onChange={e => set_lName(e.target.value)} required value={lName} /><br /><br />
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" placeholder='Enter email id' onChange={e => set_email(e.target.value)} required value={email} /><br /><br />
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" name="password" placeholder='Enter password' onChange={e => set_password(e.target.value.trim())} required value={password} /><br /><br />
                    <label htmlFor="password">Re-enter password :</label>
                    <input type="password" id="password" name="cpassword" placeholder='Re-enter password' onChange={e => set_cPassword(e.target.value)} onKeyUp={onValidation} required value={cPassword} /><br />
                    <p><span>{errMsg}</span></p><br /><br />
                    <button id='submit' type='submit' disabled={status ? false : true} style={(!status) ? { backgroundColor: 'lightgray' } : { backgroundColor: 'lightgreen' }}>Submit</button>
                    <button id='cancle' type='cancle' onClick={resetData}>Clear</button>
                </fieldset>
            </form>
        </div>
    )
}

export default SignUp;