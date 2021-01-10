import React, { useEffect, useState } from 'react';
import TeacherDetails from '../TeacherDetails/TeacherDetails';



const Teacher = () => {

   

    const [teachers,setTeachers]=useState([]);
    
useEffect(()=>{
    
    fetch('http://localhost:5000/course')
    .then(res=>res.json())
    .then(data=>setTeachers(data))
   
},[])
console.log(' teacher',teachers)
    return (
       <div>
           <div className="row">
             <div className="col-md-6">
            {
                teachers.map(teacher=> <TeacherDetails teacher={teacher}></TeacherDetails>)
            }
               </div>

    <div className="col-md-6">
          
            </div>
        
               </div> 
          
       </div> 
    );
};

export default Teacher;