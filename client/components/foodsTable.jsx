import React from 'react';
import Food from './food';

function FoodsTable(props) {
  if (props.ArrayOfFoods !== []) {
    var studentElements = props.arrayOfFoods.map(food => {
      return <Food key={food.id} specificFood={food} delete={props.delete} />;
    });
    return (
      <div className="table-responsive col-sm-8">
        <table className="table table-bordered table-hover table-striped">
          <thead className='bg-success text-light'>
            <tr>
              <td scope="col" className="border border-dark">Food Name</td>
              <td scope="col" className="border border-dark">Production Type</td>
              <td scope="col" className="border border-dark">Health Grade</td>
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
              <td scope="col">Food Name</td>
              <td scope="col">ProductType</td>
              <td scope="col">Health Grade</td>
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

export default FoodsTable;
