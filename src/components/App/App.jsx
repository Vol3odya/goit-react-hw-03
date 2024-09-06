import { useState, useEffect } from 'react'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

import css from './App.module.css'

export default function App() {
  const dataP = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [clicks, setClicks] = useState(() => {
    const save = window.localStorage.getItem("save");
    return save === null || save.length===2 ? dataP : JSON.parse(save);
  });
  useEffect(() => {
    window.localStorage.setItem('save', JSON.stringify(clicks));
  }, [clicks]);


  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const find = () => {
    if (text == '') {
      return data;
    }
    else {
      return data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    }
    
  }

  const [data, setData] = useState(clicks);
  const addUser = (newUser) => {
    setData((prevTask) => {
      setClicks([...prevTask, newUser]);
      return [...prevTask, newUser];
    });
  };

  const deleteData = (id) => {
    setData((prevTask) => {
      setClicks(prevTask.filter((task) => task.id !== id));
      return prevTask.filter((task) => task.id !== id);
    })
  }

  return (
    <div>
      <h1 className={css.name}>Phonebook</h1>
      <ContactForm onUser={addUser} />
      <SearchBox value={text} onUpdate={handleTextChange} />
      <ContactList data={find()} onDelete={deleteData} />
    </div>
  )
}
