// components/user/Profile.tsx
import { Avatar, Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../services/apiRequest';
import { AuthContext } from '../../context/AuthContext';
import Chat from '../chat/Chat';

const Profile: React.FC = () => {
  const {updateUser, currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
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
    <div className="lg:hidden flex-2 bg-[#ffc72c] h-full overflow-y-auto hide-scrollbar lg:h-auto lg:overflow-visible mt-5">
        <div className="p-4 lg:p-8">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
