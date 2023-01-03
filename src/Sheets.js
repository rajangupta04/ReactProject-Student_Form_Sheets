import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sheets = () => {
    let [data , setData] = useState(null);

    useEffect(()=>{
    fetch(" http://localhost:4001/StudentDetails")
    .then((resopnse)=>{
        return resopnse.json();
    })
    .then((fetchedData)=>{
        setData(fetchedData);
    })
    } , [] )

    return ( 
        <div className="sheets">{data && 
            <table border="5px" style={{width: "850px"}}>
                <tr>
                    <th>Sl no</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Contact</th>
                    <th>DOB</th>
                    <th>Email ID</th>
                    <th>Details</th>

                </tr>
                {
                    data.map((std)=>
                    (
                        <tr key={std.id}>
                            <td>{std.id}</td>
                            <td>{std.stdName}</td>
                            <td>{std.gender}</td>
                            <td>{std.contact}</td>
                            <td>{std.dob}</td>
                            <td>{std.email}</td>
                            <td><Link to= {`/Details${std.id}`}><button>View</button></Link></td>
                        </tr>
                    )
                    )
                }
            </table>
            }
        </div>
    );
}
export default Sheets;













