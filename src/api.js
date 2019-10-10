const axios = require('axios');

export const fetchStudents = async () => {
  const studentList = await axios.get(
    'https://nc-student-tracker.herokuapp.com/api/students'
  );
  return studentList.data.students;
};
