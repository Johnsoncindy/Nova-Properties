import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file

const Chat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlacement] = useState('bottom-right')

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-4 overflow-y-scroll hide-scrollbar p-4">
        <h1 className="font-light text-xl">Messages</h1>
        {Array(6).fill(null).map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md flex items-center gap-4 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="John Doe"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">John Doe</span>
            <p className="flex-1">Lorem ipsum dolor sit amet...</p>
          </div>
        ))}
      </div>

      <Modal show={isModalOpen} size="lg" onClose={() => setIsModalOpen(false)} position={modalPlacement}>
        <Modal.Header>Chat with John Doe</Modal.Header>
        <Modal.Body>
          <div className="chat-window flex flex-col h-full bg-white">
            <div className="flex items-center justify-between bg-[#ffc72c] p-4 font-bold">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="John Doe"
                  className="w-8 h-8 rounded-full object-cover"
                />
                John Doe
              </div>
              <span className="cursor-pointer" onClick={() => setIsModalOpen(false)}>X</span>
            </div>
            <div className="chat-messages overflow-y-scroll hide-scrollbar p-4 flex flex-col gap-4 flex-1">
              <div className="bg-[#ffc72c] p-4 rounded-md self-start">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-xs">1 hour ago</span>
              </div>
              <div className="bg-[#ffc72c] p-4 rounded-md self-end text-right">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-xs">1 hour ago</span>
              </div>
            </div>
            <div className="flex items-center border-t-2 bg-[#ffc72c] p-4">
              <label htmlFor="chatInput" className="sr-only">Type your message</label>
              <textarea
                id="chatInput"
                className="flex-grow h-20 border-none p-4 resize-none"
                placeholder="Type your message here"
                title="Type your message"
              ></textarea>
              <Button className="ml-4 h-10 bg-[#022F6B] border-none cursor-pointer flex items-center justify-center">Send</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Chat;



