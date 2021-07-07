import React, {useState} from 'react';


const ContactPage = () => {
    
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [streetNumber, setStreetNumber] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [isPublic, setIsPublic] = useState();
    const [owner, setOwner] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {

        }
    };
    
    
    return (
        <div className="container" id="add-contact-wrapper">
        <form id="add-contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="add-contact-firstname" className="form-label">First Name</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-firstname" required />
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-lastname" className="form-label">Last Name</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-lastname" required />
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-street" className="form-label">Street</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-street" required />
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-zip" className="form-label">ZIP</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-zip" required />
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-city" className="form-label">City</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-city" />
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-state" className="form-label">State</label>
                <span className="required">*</span>
                <input type="text" className="form-control" id="add-contact-state" />
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-country" className="form-label">Country</label>
                <input type="text" className="form-control" id="add-contact-country" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="add-contact-private-public-checkbox" checked />
                <label className="form-check-label" for="private-public-checkbox">Private</label>
            </div>
            <div className="mb-3">
                <label htmlFor="add-contact-owner" className="form-label">Owner</label>
                <select className="custom-select" id="add-contact-owner">
                    <option selected value="Self">Self</option>
                    <option value="normalo" id="normaloOption">Normalo</option>
                 </select>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        <button className="btn btn-secondary">Go back to Main Screen</button>
    </div>
    );
};


export default ContactPage;