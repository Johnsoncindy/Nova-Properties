import { Avatar, Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const UpdateProfileForm = () => {
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    // Submit form logic here
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 justify-center"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Full Name" />
          </div>
          <TextInput
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            value={password}
            type="password"
            placeholder="Enter Your New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat Password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            value={repeatPassword}
            placeholder="Repeat Your New Password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between mt-4">
          <Button type="submit">Update</Button>
        </div>
      </form>
      <div className="items-center justify-center bg-[#ffc72c] lg:hidden mt-5 h-full">
            <div className="p-4 lg:p-8 flex items-center justify-center">
              <Avatar img={currentUser.avatar} size="xl" className="rounded"/>
            </div>
          </div>
    </div>
  );
};

export default UpdateProfileForm;
