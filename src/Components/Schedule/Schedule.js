import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ScheduleDetails from '../ScheduleDetails/ScheduleDetails';

const Schedule = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [newSubject,setNewSubject]=useState([]);
    
    useEffect(()=>{
        
        fetch('http://localhost:5000/course')
        .then(res=>res.json())
        .then(data=>setNewSubject(data))
       
    },[])
    console.log(newSubject);
    return (
        <div>
            <h1>schedule object</h1>
            
            {
                newSubject.map((subject,index)=><ScheduleDetails subject={subject} index={index}></ScheduleDetails>)
            }



           
        </div>
    );
};

export default Schedule;