import React, { useEffect, useState } from 'react';
import CourseSelection from '../CourseSelection/CourseSelection';
import { fakeData } from '../FakeData/FakeData';
import './Course.css';
const Course = () => {
    const [courses,setCourse]=useState([]);
    
    useEffect(()=>{
       setCourse(fakeData);
    })
    console.log(courses);
    return (
        <div className="table-container">
            
            {
                courses.map(course=><CourseSelection course={course} ></CourseSelection>)
            }
        </div>
    );
};

export default Course;