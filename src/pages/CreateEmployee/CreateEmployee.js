import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployeeAction } from '../../actions/createEmployeeActions';
import './CreateEmployee.css';
// react-datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// react-select
import Select from 'react-select';
// picker's data
import { statesModel } from '../../model/statesModel';
import { statesData } from '../../data/statesData';
import { departmentData } from '../../data/departmentData';

const selectStylesFactorization = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        minHeight: '25px',
        fontSize: '14px',
        marginBottom: '20px',
        borderRadius: '5px;',
        '&:hover': {
            border: '2px solid grey',
            boxShadow: 'none',
            outline: 'none',
        },
        border: state.isFocused
            ? '2px solid black'
            : '2px solid rgb(235, 235, 235)',
        boxShadow: state.isFocused ? '' : '',
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
        backgroundColor: state.isSelected
            ? '#586F07'
            : 'white',
        '&:hover': {
            backgroundColor: '#CEDA97',
        },
    }),
}

export default function CreateEmployee() {
    const dispatch = useDispatch();

    // input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    // datePicker
    const [startDate, setStartDate] = useState('');
    const [birthDate, setBirthDate] = useState('');
    // reactSelect
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedState, setSelectedState] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createEmployeeAction({
                firstName: firstName,
                lastName: lastName,
                startDate: startDate,
                selectedDepartment: selectedDepartment,
                birthDate: birthDate,
                street: street,
                city: city,
                selectedState: selectedState,
                zipCode: zipCode,
            })
        )
    };

    // react-select states
    const dataStates = statesModel(statesData);


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
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
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
                        <Select
                            defaultValue={selectedDepartment}
                            onChange={setSelectedDepartment}
                            options={departmentData}
                            placeholder="Click to select a state"
                            menuPosition="fixed"
                            menuPlacement="auto"
                            styles={selectStylesFactorization}
                        />
                    </div>
                </div>

                <div className="create__address">
                    <h2>Employee address</h2>
                    <label htmlFor="street" className="create__label">
                        Street
                    </label>
                    <input
                        id="street"
                        type="text"
                        className="create__input"
                        onChange={(e) => setStreet(e.target.value)}
                    />

                    <label htmlFor="city" className="create__label">
                        City
                    </label>
                    <input
                        id="city"
                        type="text"
                        className="create__input"
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <label htmlFor="state" className="create__label">
                        State
                    </label>
                    <Select
                        defaultValue={selectedState}
                        onChange={setSelectedState}
                        options={dataStates}
                        placeholder="Click to select a state"
                        menuPosition="fixed"
                        menuPlacement="auto"
                        styles={selectStylesFactorization}
                    />
                    <label htmlFor="zip-code" className="create__label">
                        Zip Code
                    </label>
                    <input
                        id="zip-code"
                        type="number"
                        className="create__input"
                        onChange={(e) => {
                            setZipCode(e.target.value);
                        }}
                    />
                    <button className="create__submitButton">Save</button>
                </div>
            </form>
            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </main>
    )
}