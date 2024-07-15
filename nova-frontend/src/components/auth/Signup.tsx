import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Toast, ToastToggle, Label, TextInput } from 'flowbite-react';
import { HiCheck, HiExclamation } from "react-icons/hi";
import apiRequest from '../../services/apiRequest';

const Signup: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await apiRequest.post("/auth/register", {
                name, email, password
            });

            setName('');
            setEmail('');
            setPassword('');

            setShowSuccessToast(true);
            setShowErrorToast(false);

            setTimeout(() => navigate('/login'), 2000);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.response.data.message);
            setShowSuccessToast(false);
            setShowErrorToast(true);
        } finally {
            setLoading(false);
        }
    };

    const validateEmail = () => {
        return showErrorToast && !email.includes('@');
    };

    const validatePassword = () => {
        // Example: Password must be at least 7 characters long and include letters and numbers
        return showErrorToast && (!password || !/(?=.*[A-Za-z])(?=.*\d).{7,}/.test(password));
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="container flex bg-white shadow-lg max-w-4xl">
                <div className="hidden md:flex flex-col justify-center w-2/5 p-8 bg-[#ffc72c] text-white">
                    <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
                    <p className="mb-6">Already have an account?</p>
                    <Button onClick={() => navigate('/login')} className='bg-[#022F6B]' pill>
                        Login
                    </Button>
                </div>
                <div className="flex flex-col justify-center w-full md:w-3/5 p-8">
                    <Card>
                        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                        <form onSubmit={handleSignup}>
                            <div className="mb-4">
                                <Label htmlFor='name' value="Name" />
                                <TextInput
                                    type="text"
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Name"
                                    color={showErrorToast && !name ? 'failure' : 'default'}
                                />
                                {showErrorToast && !name && (
                                    <div className="text-red-500 text-sm mt-1">
                                        Please enter your name
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <Label htmlFor='email' value="Email address" />
                                <TextInput
                                    type="email"
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email"
                                    color={validateEmail() ? 'failure' : 'default'}
                                />
                                {validateEmail() && (
                                    <div className="text-red-500 text-sm mt-1">
                                        Please enter a valid email address
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <Label htmlFor='password' value="Password" />
                                <TextInput
                                    type="password"
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                    color={validatePassword() ? 'failure' : 'default'}
                                />
                                {validatePassword() && (
                                    <div className="text-red-500 text-sm mt-1">
                                        Password must be at least 7 characters long and include letters and numbers
                                    </div>
                                )}
                            </div>
                            <Button type="submit" className='bg-[#ffc72c]' fullSized pill disabled={loading}>
                                Sign Up
                            </Button>
                        </form>
                        <div className="md:hidden text-center mt-4">
                            <p className="mb-2">Already have an account?</p>
                            <Button onClick={() => navigate('/login')} className='bg-[#022F6B]' pill>
                                Login
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                {showSuccessToast && (
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">Signup successful. Redirecting to login...</div>
                        <ToastToggle />
                    </Toast>
                )}
                {showErrorToast && (
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                            <HiExclamation className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">{error}</div>
                        <ToastToggle />
                    </Toast>
                )}
            </div>
        </div>
    );
};

export default Signup;
