import React from 'react';
import '../App.css';
import Toggle from './Toggle';
import ExtraStudentInfo from './ExtraStudentInfo';

const StudentCard = ({ _id, name, startingCohort, currentBlock }) => {
  return (
    <div className="student-card">
      <p>
        {' '}
        <strong>Name: </strong> {name}
      </p>
      <p>
        <strong>Starting cohort number: </strong> {startingCohort}
      </p>
      <p>
        {' '}
        <strong> Current block:</strong> {currentBlock}
      </p>
      <Toggle>
        <ExtraStudentInfo id={_id} />
      </Toggle>
    </div>
  );
};

export default StudentCard;
