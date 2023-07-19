import React, { useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './components/models/reminder';



function App() {
  const [reminders, setReminders] = useState<Reminder[]>([{
    id: 1, title:'Reminder - 1'
  },{
    id: 2, title:'Reminder - 2'
  }]);


  return (
    <div className="App">
     <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
