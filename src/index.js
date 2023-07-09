import React from 'react';
import ReactDom from 'react-dom';




import './index.css';



import Heading from './Heading';
import ToDoList from './ToDoLists';
import CreateNode from './CreateNode';
import MyClock from './MyClock';




ReactDom.render(
<React.Fragment>
    


<MyClock/>
<Heading/>

<CreateNode/>







   
    

   
   
</React.Fragment>

,
document.getElementById("root"));

