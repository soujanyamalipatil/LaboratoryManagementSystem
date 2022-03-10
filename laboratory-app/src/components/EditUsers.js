import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axiosInstance from './axiosConfig';

function EditUsers(props) {
    const [show, setShow] = useState(false);
    const [user, setuser] = useState({
        _id: '',
        fname: '',
        email: '',
        role: '',
    });
    
    useEffect(() => {
        setShow(props.showEditData)
    }, [props.showEditData])
    
    useEffect(() => {
        setuser(props.editableData)
    }, [props.editableData])

    const handleClose = () => {
        setShow(false)
        props.fetchSamples()
        props.setshowEditData(false)
    };

    const handleChange = (event) => {
        const userCopy = { ...user }
        userCopy[event.target.name] = event.target.value
        setuser(userCopy)
    }
    const editProduct = async () => {
        console.log(user);
        const token=localStorage.getItem('token');
        let url = 'users/edit-users'
        // const headers={}
        try {
                const response = await axiosInstance.put(url, user)
                console.log(response.data);
                if (response.data.error === false) {
                    handleClose()
                    props.fetchSamples();
                    props.history.push('/userdetails')
                } else {
                    alert(response.data.message)
                }
            }
         catch (err) {
            console.log(err);
        }
    }
    // Fragment
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="row">
                            <div className="col">
                                <input type="text"
                                    name="_id"
                                    value={user._id}
                                    onChange={(event) => { handleChange(event) }}
                                    className="form-control" placeholder="User Id" disabled/>
                            </div>
                            <div className="col">
                                <input type="text"
                                    name="fname"
                                    value={user.fname}
                                    onChange={handleChange}
                                    className="form-control" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control" placeholder="Email Id" />
                            </div>
                
                            <div className='col'>
                            <select  name='role' style={{width:'220px',marginTop:'10px'}} value={user.role} onChange={handleChange}>
                            <option >admin</option>
                            <option >user</option>
                          </select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editProduct}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditUsers;
