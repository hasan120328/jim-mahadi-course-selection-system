import React from 'react';

const StudentDetails = (props) => {
   console.log('student',props)
    const {fullName,subject,teacher,building,room,startTime,endTime}=props.student;
    return (
        <div>
            <p><b>class details: </b>{subject} <small>{teacher}, {building},{room}, {startTime} to {endTime}</small></p>
        </div>
    );
};

export default StudentDetails;