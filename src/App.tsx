import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'


export interface IState {
  people:{
    name: string;
    age: number;
    img: string;
    note?: string;

  }[]
}


function App() {

    const [people, setPeople] = useState<IState["people"]>([
      {
        name:"utsho sadhak",
        age:23,
        img:"https://avatars.githubusercontent.com/u/69731170?v=4",
        note:"I want to be a software developer.",
      }
    ])

  return (
    <div className="App">
      <h1>People Invited to my Party.</h1>
      <List people={people}/>
      <AddToList people={people}  setPeople={setPeople} />
    </div>
  );
}

export default App;
