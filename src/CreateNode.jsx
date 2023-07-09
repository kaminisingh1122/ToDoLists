import React, { useState } from "react";
import { ReactDOM } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ToDoLists from "./ToDoLists";

const CreateNode=()=>{
    const[inputList,setInputList]=useState("");
    const[fruits,setFruits]=useState([]);
    

    const itemEvent=(event)=>{
        setInputList(event.target.value);

    }
    const listItems=()=>{
        setFruits((olditems)=>{
            return[...olditems,inputList];
        });
        setInputList("");
        
    }
    
    const deleteByIndex = index => {
        setFruits(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
    return(
    
        
    <div className="main_div" >
       <div className="center_div">  
         <input type="text" className="icon" placeholder="Add a items" value={inputList} onChange={itemEvent}/> 
         <button className="butt" onClick={listItems}>+</button>
         {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>
              <button id="btn1" className="butt" onClick={() => deleteByIndex(index)}>-</button>
            </li>
          )
        })}   
    </div>
     </div>
    );
        }
export default CreateNode;