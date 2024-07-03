import React from 'react';
import Profile from '../components/user/Profile';
import Inquiries from '../components/user/Inquiries';

const ProfilePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Profile />
            <Inquiries />
        </div>
    );
};

export default ProfilePage;
