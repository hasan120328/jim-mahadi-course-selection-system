import React from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="box-container">
             <div className="header-container">
             <Link className="headerLink" to="/header">course selection system</Link>
             <Link className="headerLink"  to="/course">course</Link>
             <Link className="headerLink"  to="/student">student</Link>
             <Link className="headerLink"  to="/teacher">Teacher</Link>
             <Link className="headerLink"  to="/schedule">Schedule</Link>
             <Link className="headerLink"  to="/login">logout</Link>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h1>spring semester</h1>
                <p>
                Deadline: Last day to designate a full-term course status to "Pass/Fail" option
Deadline: Last day to drop courses (for 1st year, 2nd semester (previous Fall) undergraduate matriculants only) - students must go to the Office of the Registrar or submit the Special Registration form to registrar@rice.edu by 4:00 p.m.
Deadline: Last day for second-year undergraduate students to formally declare their official major with the Office of the Registrar, via a Declaration of Major Form
Graduation Deadline: Last day for Spring (May) degree candidates to declare any additional major, minor or university certificates, if applicable (Undergraduate Students)
Fall Registration: Fall 2021 Course Schedule published to courses.rice.edu
Fall Registration: Course Request Period begins for undergraduate students
                </p>
            </div>
            <div className="col-md-6">
                <h1>summer semester</h1>
                <p>
                Summer Registration: Registration for Summer 2021 begins for currently enrolled degree-seeking Rice undergraduate and graduate students via ESTHER
Applications: Visiting student application process opens for Summer 2021
                FIRST DAY OF CLASSES - SUMMER BLOCK C1
Deadline (Late Registration): Last day for degree-seeking Rice students to register for Summer Block C1; may register in the Office of the Registrar via the appropriate paperwork with a Late Registration Fee
Deadline (Confirm Registration): Last day for visiting students to confirm registration for Summer Block C1
                </p>
            </div>
        </div>
        </div>
    );
};

export default Header;