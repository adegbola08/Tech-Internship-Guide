import React from "react";
import { Navbar as NavbarBoot } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const Navbar = () => {
    return(
        <div className="px-3">
            <NavbarBoot data-bs-theme="dark">
                <div style={{display: 'flex', flex: '1'}}>
                    <NavbarBoot.Brand href="#home" className="text-primary">Tech Internship Guide</NavbarBoot.Brand>
                    <NavbarBoot.Toggle />
                    <NavbarBoot.Collapse className="justify-content-end">
                        <Button variant="info" size="sm" className="rounded-3 me-2">Add a Site</Button>
                        <Button variant="primary" size="sm" className="rounded-pill">This site updates every 30th</Button>
                    </NavbarBoot.Collapse>
                </div>
            </NavbarBoot>
            <div className='text-center mb-5 mt-4'>
                <h3 className='text-primary'>Unlock Your Internship Adventure:<br/>Your Ultimate Guide to Tech Succes Begins Here!</h3>
                <p className='text-light'>A colletions of all resources you need to land your first Computer Science Internship</p>
            </div>
        </div>
    );
};