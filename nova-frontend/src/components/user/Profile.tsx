// components/user/Profile.tsx
import { Avatar, Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../services/apiRequest';
import { AuthContext } from '../../context/AuthContext';

const Profile: React.FC = () => {
 
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err);     
    }
  }

  return (
    <div>
    <div className="flex items-center gap-6">     
    <Avatar alt={currentUser.name} img={currentUser.avatar} rounded size="lg"/>
      <div>
        <h2 className="text-2xl font-bold">{currentUser.name}</h2>
        <p className="text-gray-700">{currentUser.email}</p>
      </div>
      
    </div>
    <div className="mt-5">
    <Button className="px-6 py-3 bg-[#022F6B] cursor-pointer border-none "onClick={handleLogout}>Logout</Button>
    </div>
    </div>
  );
};

export default Profile;
