import{Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
    <nav>
    {/* <div className='forms'> */}
        <h1>Student Details</h1>

        <div className="link">
            <Link to="/">Form</Link>
            <Link to="/Sheets">Sheet</Link>
        </div>
    {/* </div> */}
    </nav>

     );
}
 
export default Navbar;