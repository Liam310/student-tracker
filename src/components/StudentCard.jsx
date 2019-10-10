import React from 'react';
import '../App.css';
import Toggle from './Toggle';

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
      <Toggle>YEEEEET</Toggle>
    </div>
  );
};

export default StudentCard;
