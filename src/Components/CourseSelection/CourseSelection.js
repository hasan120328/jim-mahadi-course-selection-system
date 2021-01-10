import React, { useContext } from 'react';
import { UserContext } from '../../App';

const CourseSelection = (props) => {
    const {subject,room,building,teacher,credit,}=props.course;
    const [loggedInUser,setLoggedInUser]=useContext(UserContext); 

    const handleButton=()=>{
        const newUser={ ...loggedInUser, ...props.course};
        console.log('lll',newUser);
        fetch('http://localhost:5000/addCourse',{
           method:"POST",
           headers: {
             'Content-type': 'application/json'
           },
           body: JSON.stringify(newUser),
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
       },[])
       
    }
    return (
        <div className="col-md-4 p-25 ">
            <div className=" border-container  ">
                
                <h1> subject: {subject}</h1>
                 <h3>Teacher: {teacher}</h3>
                 <h4>credit {credit}</h4>
                 
                 <button style={{textAlign:'center',background:'tomato' }} className="button-container" onClick={handleButton}>select course</button>
            </div>
        </div>
    );
};

export default CourseSelection;