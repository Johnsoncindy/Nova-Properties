// pages/ProfilePage.tsx
import React from 'react';
import Profile from '../components/user/Profile';
import Chat from '../components/chat/Chat.tsx';
import ProfilePropertyList from '../components/properties/ProfilePropertyList';
import { properties } from '../data/Property';
import { Button } from 'flowbite-react';
import './ProfilePage.css';  // Import the CSS file

interface UserData {
  savedListings?: number[]; // Array of property IDs
}

const ProfilePage: React.FC = () => {
  const agentName = "John Doe";

  const userData: UserData = {
    // savedListings: [1, 2, 3] // Uncomment this line to simulate saved listings
  };
  
  const hasListings = properties.some(property => property.agent === agentName);

  // Check for savedListings in userData, default to an empty array if not present
  const savedListings = properties.filter(property => userData.savedListings?.includes(property.id) ?? false);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex-3 overflow-y-auto hide-scrollbar pb-12 lg:pb-0">
        <div className="p-4 lg:p-12 flex flex-col gap-12">
          <div className="flex justify-between items-center">
            <h1 className="font-light text-xl">User Information</h1>
            <Button className="px-6 py-3 bg-[#ffc72c] cursor-pointer border-none">Update Profile</Button>
          </div>
          <Profile />
          {hasListings && (
            <div>
              <h1 className="font-light text-xl">My Listings</h1>
              <ProfilePropertyList properties={properties.filter(property => property.agent === agentName)} />
            </div>
          )}
          {savedListings.length > 0 && (
            <div>
              <h1 className="font-light text-xl">Saved Listings</h1>
              <ProfilePropertyList properties={savedListings} />
            </div>
          )}
        </div>
      </div>
      <div className="flex-2 bg-[#ffc72c] h-full overflow-y-auto hide-scrollbar lg:h-auto lg:overflow-visible">
        <div className="p-4 lg:p-8">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

