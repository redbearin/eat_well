import React from 'react';

function Header(props) {
  return (
    <div className="row flex-nowrap justify-content-between align-items-center mt-2 mb-2">
      <h3 className="col-6 pt-1">Food Health Rating Table</h3>
      <div className="col-6 d-flex justify-content-end align-items-center">
        <div className="p-2">Average Grade</div>
        <div className="bg-dark text-white p-2">{props.averageGrade}</div>
      </div>
    </div>
  );
}

export default Header;
