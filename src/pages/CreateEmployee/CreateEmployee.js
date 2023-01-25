import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saisie } from '../../actions/adressActions';
import './CreateEmployee.css';

export default function CreateEmployeeclass() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saisie(firstName));
    };

    return (
        <main className="create">
            <h1>Create Employee</h1>
            <form className="create__form" onSubmit={(e) => handleSubmit(e)}>
                <div className="create__info">
                    <h2>Employee informations</h2>
                    <label htmlFor="first-name" className="create__label">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        className="create__input"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <label htmlFor="last-name" className="create__label">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        className="create__input"
                    />
                    <div className="create__info__datePicker">
                        <label className="create__label">Date of Birth</label>

                    </div>
                    <label htmlFor="start-date" className="create__label">Start Date</label>
                    <input
                        id="start-date"
                        type="text"
                        className="create__input"
                    />
                    <div className="create__info__department">
                        <label htmlFor="department" className="create__label">Department</label>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                </div>

                <div className="create__address">
                    <h2>Employee address</h2>
                    <label htmlFor="street" className="create__label">Street</label>
                    <input
                        id="street"
                        type="text"
                        className="create__input"
                    />
                    <label htmlFor="city" className="create__label">City</label>
                    <input
                        id="city"
                        type="text"
                        className="create__input"
                    />
                    <label htmlFor="state" className="create__label">State</label>
                    <select
                        name="state"
                        id="state"
                        className="create__input"
                    ></select>
                    <label htmlFor="zip-code" className="create__label">Zip Code</label>
                    <input
                        id="zip-code"
                        type="number"
                        className="create__input"
                    />
                    <button className="submit_button">Save</button>
                </div>
            </form>
            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </main>
    );
}