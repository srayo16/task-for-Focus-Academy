import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import { IoMdContact } from 'react-icons/io';
import { toast } from 'react-toastify';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        toast.success('Logged out');
    };
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
                    <Container>
                        <Navbar.Brand as={Link} to='/welcome'>Contact Fetch <IoMdContact></IoMdContact></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                    {
                                        user ? <Button variant="dark" onClick={logout} style={{ color: 'orange' }}>Log out</Button> :
                                            <Nav.Link as={Link} to='/login'>Log In</Nav.Link>

                                    }
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}


export default Header;