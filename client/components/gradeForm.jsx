import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faListAlt } from '@fortawesome/free-solid-svg-icons';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }
  handleGradeChange(event) {
    this.setState({
      grade: parseInt(event.target.value)
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newGrade = this.state;
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }
  handleCancel(event) {
    this.setState({
      name: '',
      type: '',
      grade: ''
    });
  }
  render() {
    return (
      <form className="col-sm-4 container" onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faUser}/>
          </div>
          <div className="col-10 block">
            <input required autoFocus type="text" value={this.state.name} className="form-control mb-2" placeholder="name" onChange={this.handleNameChange}/>
          </div>
        </div>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faListAlt} />
          </div>
          <div className="col-10">
            <input required autoFocus type="text" value={this.state.course} className="form-control mb-2" placeholder="course" onChange={this.handleCourseChange}/>
          </div>
        </div>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="col-10">
            <input required autoFocus type="text" value={this.state.grade} className="form-control mb-2" placeholder="grade" onChange={this.handleGradeChange}/>
          </div>
        </div>

        <div className="row flex-nowrap justify-content-center align-items-stretch float-right">
          <button className="shadow mt-1"type="submit">Add</button>
          <button className="shadow mt-1 ml-2 mr-3"type="cancel" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
