import React from 'react';

function Food(props) {
  return (
    <tr>
      <td className="border border-dark">{props.specificFood.name}</td>
      <td className="border border-dark">{props.specificFood.sub_name}</td>
      <td className="border border-dark">{props.specificFood.category}</td>
      <td className="border border-dark">{props.specificFood.production_type}</td>
      <td className="border border-dark">{props.specificFood.grade}</td>
      <td className="border border-dark">
        <button className="shadow" type="delete" onClick={() => props.delete(props.specificFood.id)}>Delete</button>
        <button className="shadow" type="delete" onClick={() => props.edit(props.specificFood.id)}>Edit</button>
      </td>
    </tr>
  );
}

export default Food;
