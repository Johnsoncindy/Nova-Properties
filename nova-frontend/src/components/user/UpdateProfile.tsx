import { Avatar } from "flowbite-react";
import UpdateProfileForm from "../form/UpdateProfileForm";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const UpdateProfile = () => { 
  const { currentUser } = useContext(AuthContext);
    return (
        <div className="flex flex-col lg:flex-row h-screen">
          <div className="flex-1 overflow-y-auto hide-scrollbar pb-12 lg:pb-0">
            <div className="p-4 lg:p-12 flex flex-col gap-12">
              <div className="flex justify-between items-center">
                <h1 className="font-light text-xl">Update Profile</h1>               
              </div>
              <UpdateProfileForm/>      
            </div>
          </div>
          <div className="hidden lg:flex flex-1 items-center justify-center bg-[#ffc72c] h-full overflow-y-auto hide-scrollbar lg:h-auto lg:overflow-visible">
            <div className="p-4 lg:p-8 flex items-center justify-center">
              <Avatar img={currentUser.avatar} size="xl" className="rounded"/>
            </div>
          </div>
        </div>
      );
};

export default UpdateProfile;
