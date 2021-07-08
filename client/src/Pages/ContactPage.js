import React, {useState} from 'react';
import getAuthHeader from '../Utils/authHeaders.js';
import axios from 'axios';

const ContactPage = ({isUserAdministrator}) => {
    
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [streetNumber, setStreetNumber] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [isPublic, setIsPublic] = useState();
    const [owner, setOwner] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = getAuthHeader();
        const payload = {
            firstName: firstName,
            lastName: lastName,
            streetNumber: streetNumber,
            zip: zip,
            city: city,
            state: state,
            country: country,
            isPublic: isPublic,
            owner: owner,
            lat: "",
            lon: ""
        };

        console.log(payload);

        axios.post('http://localhost:8080/api/contacts', payload, options)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleRedirectToDashboard = () => {
        
    };
    
    return (
        <div className="container" id="add-contact-wrapper">
        <form id="add-contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="add-contact-firstname" className="form-label">First Name</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-firstname" required onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-lastname" className="form-label">Last Name</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-lastname" required onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-street" className="form-label">Street</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-street" required onChange={e => setStreetNumber(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-zip" className="form-label">ZIP</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-zip" required onChange={e => setZip(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-city" className="form-label">City</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-city" required onChange={e => setCity(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-state" className="form-label">State</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-state" onChange={e => setState(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-country" className="form-label">Country</label>
                <input type="text" className="form-control" id="add-contact-country" onChange={e => setCountry(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="add-contact-private-public-checkbox" onChange={e => setIsPublic(e.target.value)} />
                <label className="form-check-label" for="private-public-checkbox">Private</label>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-owner" className="form-label">Owner</label>
                <select className="custom-select" id="add-contact-owner" onChange={e => setOwner(e.target.value)}>
                    <option selected value="Self">Self</option>
                    <option value="normalo" id="normaloOption">Normalo</option>
                 </select>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        <button className="btn btn-secondary" onClick={handleRedirectToDashboard}>Go back to Main Screen</button>
    </div>
    );
};


export default ContactPage;