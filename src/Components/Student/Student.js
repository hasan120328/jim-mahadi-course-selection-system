import React, { useEffect, useState } from 'react';
import StudentDetails from '../StudentDetails/StudentDetails';

const Student = () => {
    const [students,setStudents]=useState([]);
    
    useEffect(()=>{
        
        fetch('http://localhost:5000/course')
        .then(res=>res.json())
        .then(data=>{
            setStudents(data)
            console.log('data',data)
        })
       
    },[])
    console.log('not student',students)
    return (
        <div className="student-container">
        {
            students.map(student=><StudentDetails  student={student}></StudentDetails>)
        }
      </div>
    );
};

export default Student;