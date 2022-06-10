import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import auth from '../../Firebase.init';

const Signup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error3] = useSendEmailVerification(auth);
    const [signInWithGoogle, user1, loading1, error4] = useSignInWithGoogle(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    const nameInput = useRef('');
    const emailInput = useRef('');
    const passwordInput = useRef('');
    const confirmPasswordInput = useRef('');
    let errormess;
    if (error || error2 || error3 || error4) {

        errormess = <p className='text-danger text-center fw-bolder'> Error: {error ? error?.message : 'Something is wrong!'}</p>
    }

    if (loading || updating || sending || loading1) {
        return <Loading></Loading>;
    }

    if (user || user1) {
        toast('Logged in');
        navigate(from, { replace: true });
    }

    // sign up funtion 

    const signupSub = async event => {
        event.preventDefault();
        const name = nameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const confirmpass = confirmPasswordInput.current.value;
        if (password === confirmpass) {
            await createUserWithEmailAndPassword(email, password);
            await sendEmailVerification();
            await updateProfile({ displayName: name });
            toast("Sign In Successful");
            toast('Sent email');
        }

        else {
            alert('password did not matched');
        }

    }

    return (
        <div className='container mt-3'>

            <h1 className='text-center'>Please Sign Up</h1>

            <div className='handleSize mx-auto'>
                <Form onSubmit={signupSub}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameInput} type="name" placeholder="Enter name" style={{ height: '50px' }} required />
                        <Form.Text className="text-muted handleText">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailInput} type="email" placeholder="Enter email" style={{ height: '50px' }} required />
                        <Form.Text className="text-muted handleText">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordInput} type="password" style={{ height: '50px' }} placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword" required>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordInput} type="password" style={{ height: '50px' }} placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" style={{ color: agree ? 'green' : 'red' }} onClick={() => setAgree(!agree)} name='terms' label="Accepts all terms" />
                    </Form.Group>
                    {errormess}
                    <Button disabled={!agree} variant="secondary" type="submit" className=' rounded-pill handleSubBtn'>
                        Sign Up
                    </Button>
                </Form>
                <div>
                    <Button variant="secondary" onClick={() => signInWithGoogle()} className='rounded-pill handleSubBtn'>Continue with google</Button></div>
                <Link to='/login' className=' btn btn-link rounded-pill text-decoration-none handleSubBtn2 text-danger fw-bolder'>Already have an account</Link>


            </div>

        </div>
    );
};

export default Signup;