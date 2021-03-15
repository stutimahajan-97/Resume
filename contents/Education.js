import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Graduation" where=" Model institute of Engeniering and Technology, Jammu University" from="2018" to="Present"/>
            <Widecard title="Graduation" where="Govt College for Women , Jammu University" from="2015" to="2018"/>
            <Widecard title="HSC" where="B.B.S.V.Peeth School" from="2017" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
