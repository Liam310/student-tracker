import React from 'react';
import '../App.css';

const StudentCard = ({ name, startingCohort, currentBlock }) => {
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
    </div>
  );
};

export default StudentCard;
