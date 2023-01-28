import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saisie } from '../../actions/adressActions';
import './CreateEmployee.css';
//react-datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//react-select
import Select from 'react-select';
//data
import { StatesModel } from '../../model/statesModel';
import { statesData } from '../../utils/statesData.js';

export default function CreateEmployeeclass() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [startDate, setStartDate] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saisie(firstName));
    };

  const test = new StatesModel(statesData);
  const options = test.statesData;

    return (
        <main className="create">
            <h1>Create Employee</h1>
            <form className="create__form" onSubmit={(e) => handleSubmit(e)}>
                <div className="create__info">
                    <h2>Employee informations</h2>
                    <label htmlFor="first-name" className="create__label">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first-name"
                        className="create__input"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <label htmlFor="last-name" className="create__label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last-name"
                        className="create__input"
                    />
                    <div className="create__info__datePicker">
                        <label className="create__label">Date of Birth</label>
                        <DatePicker
                            selected={birthDate}
                            onChange={(date) => setBirthDate(date)}
                            className="datePickerCustom"
                            placeholderText={'Click to select a date'}
                        />
                    </div>
                    <label htmlFor="start-date" className="create__label">
                        Start Date
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="datePickerCustom"
                        placeholderText={'Click to select a date'}
                    />
                    <div className="create__info__department">
                        <label htmlFor="department" className="create__label">
                            Department
                        </label>
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
                    <label htmlFor="street" className="create__label">
                        Street
                    </label>
                    <input id="street" type="text" className="create__input" />
                    <label htmlFor="city" className="create__label">
                        City
                    </label>
                    <input id="city" type="text" className="create__input" />
                    <label htmlFor="state" className="create__label">
                        State
                    </label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder= 'Click to select a state'
                        menuPosition='fixed'
                        menuPlacement='auto'
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                minHeight: '25px',
                                fontSize: '14px',
                                marginBottom: '20px',
                                borderRadius: '5px;',
                                "&:hover": {
                                    border: "2px solid grey",
                                    boxShadow: 'none',
                                    outline: 'none',
                                },
                                border: state.isFocused ? '2px solid black' : '2px solid rgb(235, 235, 235)',
                                boxShadow: state.isFocused ? "" : "",
                            }),
                            dropdownIndicator: (base) => ({
                                ...base,
                                paddingTop: 0,
                                paddingBottom: 0,
                            }),
                            valueContainer: (base) => ({
                                ...base,
                                padding: 0,
                            }),
                            menuList: (base) => ({
                                ...base,
                                fontSize: '12px',
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected ? '#586F07' : 'white',
                                "&:hover": {
                                    backgroundColor: '#CEDA97',
                                }
                            }),
                        }}
                    />
                    <label htmlFor="zip-code" className="create__label">
                        Zip Code
                    </label>
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
