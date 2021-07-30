import React,{useState} from 'react'
import {IState as Props} from '../App'

interface IProps {
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"] 
    
}



const AddToList: React.FC<IProps>= ({people,setPeople}) => {

    const [input, setInput] = useState({
        name:"",
        age:"",
        note:"",
        img:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }


    const handleClick = ():void => {
        if(!input.name ||!input.age ) return
  
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                img:input.img,
                note:input.note
            }

        ]);

        setInput({
            name:"",
            age:"",
            note:"",
            img:""
            
        })

    }


    return (
        <div className="AddToList">
            <input 
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            
            />
            <input 
                type="number"
                placeholder="age"
                className="AddToList-input"
                value={input.age}
                name="age"
                onChange={handleChange}
            
            />
            <input 
                type="text"
                placeholder="image-url"
                className="AddToList-input"
                value={input.img}
                name="img"
                onChange={handleChange}
            
            />
            <textarea 
                placeholder="note"
                className="AddToList-input"
                value={input.note}
                name="note"
                onChange={handleChange}
            
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            
            > 
            Add To List 

            </button>
        </div>
    )
}

export default AddToList
