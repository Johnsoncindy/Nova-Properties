import React from 'react';

const Profile: React.FC = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://th.bing.com/th/id/OIP.nXly705lLbMk3pBckXr_XAHaLH?w=126&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center">
                <img className="w-24 h-24 rounded-full" src={user.profilePicture} alt={user.name} />
                <div className="ml-4">
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-700">{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
