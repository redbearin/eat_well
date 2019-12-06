import React from 'react';

function Food(props) {
  const foodName = props.specificFood.name;
  const foodType = props.specificFood.type;
  const foodGrade = props.specificFood.grade;

  return (
    <tr>
      <td className="border border-dark">{foodName}</td>
      <td className="border border-dark">{foodType}</td>
      <td className="border border-dark">{foodGrade}</td>
      <td className="border border-dark">
        <button className="shadow" type="delete" onClick={() => props.delete(props.specificStudent.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Food;
