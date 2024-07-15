// ScheduleTourForm.tsx
import React from 'react';
import { Button, Label, TextInput, Textarea, Radio, Select, Datepicker } from 'flowbite-react';

const ScheduleTourForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4" action="https://ultra.realhomes.io/wp-admin/admin-ajax.php" method="post">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Label htmlFor="sat-date" value="Select Date" />
          <Datepicker id="sat-date" placeholder="Select Date" required />
        </div>
        <div className="flex-1">
          <Label htmlFor="sat-time" value="Select Time" />
          <Select id="sat-time" name="sat-time" required>
            <option value="10:00 am">10:00 am</option>
            <option value="10:15 pm">10:15 pm</option>
            <option value="10:30 pm">10:30 pm</option>
            <option value="12:00 pm">12:00 pm</option>
            <option value="12:15 pm">12:15 pm</option>
            <option value="12:30 pm">12:30 pm</option>
            <option value="12:45 pm">12:45 pm</option>
            <option value="01:00 pm">01:00 pm</option>
            <option value="01:15 pm">01:15 pm</option>
            <option value="01:30 pm">01:30 pm</option>
            <option value="01:45 pm">01:45 pm</option>
            <option value="02:00 pm">02:00 pm</option>
            <option value="05:00 pm">05:00 pm</option>
          </Select>
        </div>
      </div>
      <div className="flex gap-4">
        <Radio id="sat-in-person" name="sat-tour-type" value="In Person" defaultChecked />
        <Label htmlFor="sat-in-person" value="In Person" />
        <Radio id="sat-video-chat" name="sat-tour-type" value="Video Chat" />
        <Label htmlFor="sat-video-chat" value="Video Chat" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Label htmlFor="sat-user-name" value="Your Name" />
          <TextInput id="sat-user-name" type="text" name="sat-user-name" placeholder="Your Name" required />
        </div>
        <div className="flex-1">
          <Label htmlFor="sat-user-phone" value="Your Phone" />
          <TextInput id="sat-user-phone" type="text" name="sat-user-phone" placeholder="Your Phone" />
        </div>
      </div>
      <div>
        <Label htmlFor="sat-user-email" value="Your Email" />
        <TextInput id="sat-user-email" type="email" name="sat-user-email" placeholder="Your Email" required />
      </div>
      <div>
        <Label htmlFor="sat-user-message" value="Message" />
        <Textarea id="sat-user-message" name="sat-user-message" placeholder="Message" />
      </div>
      <Button className='bg-[#022F6B]' type="submit">Schedule</Button>
    </form>
  );
};

export default ScheduleTourForm;
