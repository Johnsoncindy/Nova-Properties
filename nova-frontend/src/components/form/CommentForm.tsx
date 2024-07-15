import React, { useState } from 'react';
import { Button, Label, Textarea } from 'flowbite-react';

interface CommentFormProps {
  name: string;
  email: string;
  onSubmit: (comment: string, parentId?: number) => void;
  parentId?: number;
  onCancelReply?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit, parentId, onCancelReply }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(comment, parentId);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="comment" value="Your comment" />
        <Textarea
          id="comment"
          placeholder="Write your comment..."
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <Button type="submit">Submit</Button>
        {onCancelReply && (
          <Button type="button" onClick={onCancelReply} color="gray">
            Cancel Reply
          </Button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;