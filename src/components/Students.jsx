import React from 'react';
import StudentCard from './StudentCard';

const Students = ({ students }) => {
  return (
    <div>
      {students.map(student => {
        return <StudentCard {...student} key={student._id} />;
      })}
    </div>
  );
};

export default Students;
