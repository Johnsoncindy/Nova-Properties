import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Toast, ToastToggle, Label, TextInput } from 'flowbite-react';
import { HiCheck, HiExclamation } from "react-icons/hi";
import apiRequest from '../../services/apiRequest';
import { AuthContext } from '../../context/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);

    const {updateUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await apiRequest.post("/auth/login", {
                email, password
            });
            updateUser(res.data);

            setEmail('');
            setPassword('');

            setShowSuccessToast(true);
            setShowErrorToast(false);

            setTimeout(() => navigate('/'));
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
        return showErrorToast && !password;
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="container flex bg-white shadow-lg max-w-4xl">
                <div className="hidden md:flex flex-col justify-center w-2/5 p-8 bg-[#ffc72c] text-white">
                    <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
                    <p className="mb-6">Create your account. For Free!</p>
                    <Button onClick={() => navigate('/signup')} className='bg-[#022F6B]' pill>
                        Sign Up
                    </Button>
                </div>
                <div className="flex flex-col justify-center w-full md:w-3/5 p-8">
                    <Card>
                        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <Label htmlFor='email' value="Email address" />
                                <TextInput
                                    type="email"
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    minLength={3}
                                    required
                                    placeholder="Email Address"
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
                                        Please enter your password
                                    </div>
                                )}
                            </div>
                            <Button type="submit" className='bg-[#ffc72c]' fullSized pill disabled={loading}>
                                Sign In
                            </Button>
                        </form>
                        <p className="mt-4 text-center">
                            <a href="#" className="text-blue-900">Forgot password?</a>
                        </p>
                        <div className="md:hidden text-center mt-4">
                            <p className="mb-2">Create your account. For Free!</p>
                            <Button onClick={() => navigate('/signup')} className='bg-[#022F6B]' pill>
                                Sign Up
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
                        <div className="ml-3 text-sm font-normal">Login successful. Redirecting to home...</div>
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

export default Login;
