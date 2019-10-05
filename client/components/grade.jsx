import React from 'react';

function Grade(props) {
  const studentName = props.specificStudent.name;
  const studentCourse = props.specificStudent.course;
  const studentGrade = props.specificStudent.grade;

  return (
    <tr>
      <td className="border border-dark">{studentName}</td>
      <td className="border border-dark">{studentCourse}</td>
      <td className="border border-dark">{studentGrade}</td>
      <td className="border border-dark">
        <button className="shadow" type="delete" onClick={() => props.delete(props.specificStudent.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Grade;
