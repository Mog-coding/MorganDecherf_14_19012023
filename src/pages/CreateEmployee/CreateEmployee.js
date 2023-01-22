import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saisie } from "../../actions/adressActions";
import "./CreateEmployee.css";

export default function CreateEmployeeclass() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(saisie(firstName))

    }



    return (
        <div className="create">
            <div className="create__title">
                <h1>HRnet</h1>
            </div>
            <div>
                <Link to="/list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={(e) => handleSubmit(e)} >

                    <div className='create__info'>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" className="create__info__input" 
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" className="create__info__input" />

                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input id="date-of-birth" type="text" className="create__info__input" />

                        <label htmlFor="start-date">Start Date</label>
                        <input id="start-date" type="text" className="create__info__input" />
                    </div>

                    <div className="create__address">
                        <p className="create__address__title">Address</p>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" className="create__address__input" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" className="create__address__input" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" className="create__address__input" ></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" className="create__address__input" />
                    </div>

                    <div className="create__address__department">
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                        <button>Save</button>
                    </div>
                </form>

            </div>
            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </div>
    );
}