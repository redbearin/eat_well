import React from 'react';

function Food(props) {
  const foodName = props.specificFood.name;
  const foodSubName = props.specificFood.sub_name;
  const foodCategory = props.specificFood.category;
  const foodProductionType = props.specificFood.production_type;
  const foodGrade = props.specificFood.grade;

  return (
    <tr>
      <td className="border border-dark">{foodName}</td>
      <td className="border border-dark">{foodSubName}</td>
      <td className="border border-dark">{foodCategory}</td>
      <td className="border border-dark">{foodProductionType}</td>
      <td className="border border-dark">{foodGrade}</td>
      <td className="border border-dark">
        <button className="shadow" type="delete" onClick={() => props.delete(props.specificFood.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Food;
