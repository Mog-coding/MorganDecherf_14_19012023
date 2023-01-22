import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployeeList() {

    const firstName = useSelector( state => state.firstName);



    return (
        <>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <table id="employee-table" className="display"></table>
                <Link to="/">Home</Link>
                <div>firstName:{firstName}</div>
            </div>
        </>
    )
}