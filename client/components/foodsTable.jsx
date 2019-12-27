import React from 'react';
import Food from './food';

function FoodsTable(props) {
  if (props.ArrayOfFoods !== []) {
    var foodElements = props.arrayOfFoods.map((food, index) => {
      return <Food key={index} specificFood={food} delete={props.delete} edit={props.edit}/>;
    });
    return (
      <div className="table-responsive col-sm-8">
        <table className="table table-bordered table-hover table-striped">
          <thead className='bg-success text-light'>
            <tr>
              <td scope="col" className="border border-dark">Name</td>
              <td scope="col" className="border border-dark">Subname</td>
              <td scope="col" className="border border-dark">Category</td>
              <td scope="col" className="border border-dark">Production Type</td>
              <td scope="col" className="border border-dark">Health Grade</td>
              <td scope="col" className="border border-dark">Operations</td>
            </tr>
          </thead>
          <tbody>{foodElements}</tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="table-responsive col-sm-8">
        <table className="table table-bordered table-hover">
          <thead className='bg-primary'>
            <tr>
              <td scope="col">Name</td>
              <td scope="col">Subname</td>
              <td scope="col">Category</td>
              <td scope="col">Production Type</td>
              <td scope="col">Health Grade</td>
            </tr>
          </thead>
          <tbody>No grades Recorded</tbody>
          <tr>
            <td scope="col"></td>
            <td scope="col">No foods entered</td>
            <td scope="col"></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FoodsTable;
