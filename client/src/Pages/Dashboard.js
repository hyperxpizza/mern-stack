import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom';
import axios from 'axios';

import getAuthHeader from '../Utils/authHeaders.js'

const Dashboard = () => {

    const [username, setUsername] = useState('');
    const [isAdmin, setIsAdmin] = useState();
    const [userID, setUserID] = useState("");
    const options = getAuthHeader();
    const [contacts, setContacts] = useState();

    useEffect(() => {

        axios.get('http://localhost:8080/api/me', options)
        .then((response) => {
            setUsername(response.data.username);
            setIsAdmin(response.data.isAdmin);
            setUserID(response.data.id);
            showMyContacts();
        })
        .catch((err) => {
            console.log(err);
        })

    }, [username, setUsername, isAdmin, setIsAdmin, userID, setUserID, options]);


    const handleLogout = () => {
        console.log("logout");
        localStorage.clear();
        window.location.reload();
    }; 

    const showMyContacts = () => {
        axios.get(`http://localhost:8080/api/contacts?owner?=${username}`, options)
        .then((response) => {
            setContacts(response.data.contacts);
        })
        .catch((err) =>{
            console.log(err);
        });
    };

    const showAllContacts = () => {
        axios.get('http://localhost:8080/api/contacts', options)
        .then((response) => {
            console.log(response);
        })
        .catch((err) =>{
            console.log(err);
        });
    };

    const handleContactUpdate = () => {
        console.log("handle contact update");
    };

    return(
        <div className="container" id="main-wrapper">
        <div className="row">
            <div className="col-md-6">
                <h2 id="user-greeting">Hello, {username}</h2>
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
                        <Link to="/add" className="btn btn-primary main-btn" >Add new contact</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="contact-list">
            <ul className="list-group">
                {contacts.map((value, id) => {
                    <li onClick={handleContactUpdate}></li>
                })}
            </ul>
        </div>
    </div>
    );
};

export default Dashboard;