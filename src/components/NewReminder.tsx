import React, { useState } from "react";

interface NewReminderProps {
  onAddNewReminder: (title: string) => void;
}
function NewReminder({ onAddNewReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
      e.preventDefault();
      onAddNewReminder(title)
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control"
      />
      <button className="btn btn-primary my-3 rounded-pill">
        Add New Reminder
      </button>
    </form>
  );
}

export default NewReminder;
