import React from 'react';

const TeacherDetails = (props) => {
    const {fullName,subject,startTime,endTime}=props.teacher; 
    
    return (
        
   <div>
       <table style={{width:'100%'}}>
  <tr class="table-success">
    <th>name</th>
    <th>subject</th> 
    <th>time</th>
  </tr>
  <tr>
    <td>{fullName}</td>
    <td>{subject}</td>
    <td>{startTime} to {endTime}</td>
  </tr>
 
</table>
   </div>
        
    );
};

export default TeacherDetails;