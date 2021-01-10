import React from 'react';

const ScheduleDetails = (props) => {
    const {fullName,subject,startTime,endTime,teacher,building}=props.subject;
    const {index}=props.index;
    return (
        <div>
        <div className="table-container">
        <table class="table">
<thead>
<tr class="table-success">
  <th scope="col ">class time</th>   
  <th scope="col ">subject</th>   
 
</tr>
</thead>
<tbody>
<tr class="table-primary">
  <th scope="row">{startTime} to {endTime}</th>
  <td>{subject}<small> ,{teacher}, {building}</small></td>
</tr>

</tbody>
</table>

    </div>

    <div>
    <div className="table-container">
       

    </div>
    </div> 
    </div>
    );
};

export default ScheduleDetails;