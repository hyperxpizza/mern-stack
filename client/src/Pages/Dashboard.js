import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'

const Dashboard = () => {

    const [user, setUser] = useState();

    /*
    useEffect(() => {

    });
    */
   
    const handleLogout = () => {
        console.log("logout");
        localStorage.clear();
        window.location.reload();
    }; 

    const showMyContacts = () => {
        console.log("show my contacts");
    };

    const showAllContacts = () => {
        console.log("show all contacts");
    };

    const addNewContact = () => {
        console.log("add new contact");
    };

    return(
        <div className="container" id="main-wrapper">
        <div className="row">
            <div className="col-md-6">
                <h2 id="user-greeting">Hello, {user.username}</h2>
            </div>
            <div className="col-md-6">
                <button type="submit" className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div> 
        <div className="row">
            <div className="col-md-6">
                <MapContainer zoom={13} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                </MapContainer>
            </div>
            <div className="col-md-6">
                <div className="row mb-4">
                    <div className="col-md-12">
                        <button className="btn btn-primary main-btn" onClick={showMyContacts}>Show my contacts</button>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <button className="btn btn-primary main-btn" onClick={showAllContacts}>Show all contacts</button>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <button className="btn btn-primary main-btn" onClick={addNewContact}>Add new contact</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="contact-list">
            <ul className="list-group">
            </ul>
        </div>
    </div>
    );
};

export default Dashboard;