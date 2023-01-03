import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Update = () => {

    let {id} =useParams();
    let history =useHistory();

    let [stdName, setName] = useState("");
    let [gender, setGender] = useState("");
    let [dob,setDob] = useState("");
    let [contact, setContact] = useState("");
    let [email, setEmail] = useState("");

    useEffect(()=>{
        fetch("http://localhost:4001/StudentDetails/" + id)
    .then((response)=>{return response.json() })
    .then ((exStd)=>{ setName(exStd.stdName);
                      setGender(exStd.gender);
                      setDob(exStd.bod);
                      setContact(exStd.contact);
                      setEmail(exStd.email); 
                    })
    }, [])

    let handelUpdate =(e)=>{
        e.preventDefault();

        let replacingStd ={stdName, gender, dob, contact, email}

        fetch("http://localhost:4001/StudentDetails/" + id,
                            {method:"PUT",
                            headers: {"ACCEPT":"application/json","Content-Type" :"application/json"},
                            body:JSON.stringify(replacingStd)
                        })
            
        .then(()=>{
            alert("Data is updated");
            history.push("/sheets")
        })
    }

    return (
        <div>
        <form onSubmit={handelUpdate}>

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
        <input type="submit"  value="update"/>
        {/* <button>Update</button> */}

        </form>

        </div> 

     );
}


 
export default Update;