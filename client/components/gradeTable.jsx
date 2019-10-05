import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  if (props.ArrayOfStudents !== []) {
    var studentElements = props.arrayOfStudents.map(student => {
      return <Grade key={student.id} specificStudent={student} delete={props.delete} />;
    });
    return (
      <div className="table-responsive col-sm-8">
        <table className="table table-bordered table-hover table-striped">
          <thead className='bg-success text-light'>
            <tr>
              <td scope="col" className="border border-dark">Food</td>
              <td scope="col" className="border border-dark">Type</td>
              <td scope="col" className="border border-dark">Grade</td>
              <td scope="col" className="border border-dark">Operations</td>
            </tr>
          </thead>
          <tbody>{studentElements}</tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="table-responsive col-sm-8">
        <table className="table table-bordered table-hover">
          <thead className='bg-primary'>
            <tr>
              <td scope="col">Food</td>
              <td scope="col">Type</td>
              <td scope="col">Grade</td>
            </tr>
          </thead>
          <tbody>No grades Recorded</tbody>
          <tr>
            <td scope="col"></td>
            <td scope="col">No grades recorded</td>
            <td scope="col"></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default GradeTable;
