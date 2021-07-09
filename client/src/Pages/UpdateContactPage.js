import React, {useState, useEffect } from 'react';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import getAuthHeader from '../Utils/authHeaders.js';

const UpdateContactPage = (id) => {

    const [contactID, setContactID] = useState();
    const history = useHistory();
    const options = getAuthHeader();

    useEffect(() => {
        const options = getAuthHeader();
        axios.get(`http://localhost:8080/api/contact/${id}`, options)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    });

    const handleRedirectToDashboard = () => {
        history.push("/");
    };

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/api/contact/${id}`, options)
        .then((response) => {
            console.log(response);
            if(response.status === 204){
                handleRedirectToDashboard();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        history.push("/update");
    };

    return(
        <div className="container" id="update-delete-wrapper">
        <h2>Update/Delete Contact Screen</h2>
        <form id="update-contact-form">
            <div className="mb-3">
                <label htmlFor="update-contact-firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="update-contact-firstname" required />
            </div>
            <div className="mb-3">
                <label for="update-contact-lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="update-contact-lastname" required />
            </div>
            <div className="mb-3">
                <label for="update-contact-street" className="form-label">Street</label>
                <input type="text" className="form-control" id="update-contact-street" required />
            </div>
            <div className="mb-3">
                <label for="update-contact-zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="update-contact-zip" required />
            </div>
            <div className="mb-3">
                <label for="update-contact-state" className="form-label">State</label>
                <input type="text" className="form-control" id="update-contact-state" />
            </div>
            <div className="mb-3">
                <label for="update-contact-city" className="form-label">City</label>
                <input type="text" className="form-control" id="update-contact-city" />
            </div>
            <div className="mb-3">
                <label for="update-contact-country" className="form-label">Country</label>
                <input type="text" className="form-control" id="update-contact-country" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="update-contact-private-public-checkbox" />
                <label className="form-check-label" for="update-contact-private-public-checkbox">Private</label>
            </div>
            <div className="mb-3">
                <label for="update-contact-owner" className="form-label">Owner</label>
                <select className="custom-select" id="update-contact-owner">
                    <option value="Self">Self</option>
                    <option value="normalo">Normalo</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </form>
            <button className="btn btn-danger" id="delete-button" onClick={handleDelete}>Delete</button>
            <Link path="/" className="btn btn-secondary">Go back to Main Screen</Link>
        </div>
    );
};

export default UpdateContactPage;