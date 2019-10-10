const axios = require('axios');

export const fetchStudents = async () => {
  const studentList = await axios.get(
    'https://nc-student-tracker.herokuapp.com/api/students'
  );
  return studentList.data.students;
};

export const fetchExtraInfo = async id => {
  const extraInfo = await axios.get(
    `https://nc-student-tracker.herokuapp.com/api/students/${id}`
  );
  return extraInfo.data.student;
};
