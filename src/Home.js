import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {

    let history =useHistory();

    let [stdName, setName] = useState("");
    let [gender, setGender] = useState("");
    let [dob,setDob] = useState("");
    let [contact, setContact] = useState("");
    let [email, setEmail] = useState("");

    let handelSubmit =(e)=>{
        e.preventDefault();

        let newStd = {stdName, gender, dob, contact, email};

        fetch("http://localhost:4001/StudentDetails", 
        {
            method:"POST",
            headers: {"Content-Type" :"application/json"},
            body:JSON.stringify(newStd)
        })
        .then(()=>{
            alert("Data is added");
            history.push("/sheets")
        })
    }

    return (
        <div className="home-content">

        <form onSubmit={handelSubmit}>


        <label>Name : </label><input type="text" value={stdName} onChange={(e)=>{setName(e.target.value)}} />

        <fieldset>
            <legend align="center">Select your gender</legend>

            <input type="radio" name="gender" value="Male" onClick={(e)=>{setGender(e.target.value)}} />
            <label>Male</label> 

            <input type="radio" name="gender" value="Female" onClick={(e)=>{setGender(e.target.value)}}/> <label>Female</label>


            <input type="radio" name="gender" value="Others" onClick={(e)=>{setGender(e.target.value)}}/> <label>Others</label> 
        <br />
        </fieldset>

        <label>Contact: </label><input type="tel" value={contact} maxlength="10" onChange={(e)=>{setContact(e.target.value)}} /> <br /><br />

        <label>DOB : </label><input type="datetime-local" value={dob} onChange={(e)=>{setDob(e.target.value)}} /> <br /><br />

        <label>Email ID: </label><input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 

        <br />
        <button>Submit</button>

        </form>

        </div> 

     );
}
 
export default Home ;