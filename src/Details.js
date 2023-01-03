import { useHistory, useParams,Link } from "react-router-dom";
import { useState } from "react";

const Details = () => {

    let {id} = useParams();
    let history = useHistory();

    let [studentData , setStudentData] = useState(null);

    fetch("http://localhost:4001/StudentDetails/" + id)
    .then((response)=>{
        return response.json();
    })
    .then((fetchedData)=>{
        setStudentData(fetchedData);
    })
    
    const handelDelete= (deleteId)=>{
        fetch(`http://localhost:4001/StudentDetails/${deleteId}` , {method:"DELETE"})
        .then(()=>{
            alert("Data deleted");
            history.push("/sheets")
        })
    }

    return ( 
        <div>
            {
               studentData &&
               <div className="studentDetails">
                   <h2>Name:{studentData.stdName}</h2>
                   <h2>Gener:{studentData.gender}</h2>
                   <h2>Contact:{studentData.contact}</h2>
                   <h2>DOB:{studentData.dob}</h2>
                   <h2>Email id:{studentData.email}</h2>
                   <button onClick={()=>{handelDelete(studentData.id)}}>Delete</button> 
                   <br /><br />
                   <button><Link to={`/update${studentData.id}`}> Edit </Link></button>
               </div> 
            }
        </div>
     );
}
 
export default Details;