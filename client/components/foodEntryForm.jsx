import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faStar, faListAlt } from '@fortawesome/free-solid-svg-icons';

class FoodEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleTypeChange(event) {
    this.setState({
      type: event.target.value
    });
  }
  handleGradeChange(event) {
    this.setState({
      grade: parseInt(event.target.value)
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newFood = this.state;
    this.props.onSubmit(newFood);
    this.setState({
      name: '',
      type: '',
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
    var typeChoices = ['Conventional', 'Organic', 'Non GMO Verified'];
    return (
      <form className="col-sm-4 container" onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faAppleAlt}/>
          </div>
          <div className="col-10 block">
            <input required autoFocus type="text" value={this.state.name} className="form-control mb-2" placeholder="food name" onChange={this.handleNameChange}/>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faListAlt} />
          </div>
          <div className="col-10">
            <select name="type" onChange={this.handleTypeChange} defaultValue={this.state.type}>
              <option>Select Type</option>
              {typeChoices.map((type, index) => (<option key={index} value={type}>{type}</option>))}
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="col-10">
            <input required autoFocus type="text" value={this.state.grade} className="form-control mb-2" placeholder="health grade" onChange={this.handleGradeChange}/>
          </div>
        </div>

        <div className="row flex-nowrap justify-content-center align-items-stretch float-right">
          <button className="shadow mt-1"type="submit">Add</button>
          <button className="shadow mt-1 ml-2 mr-3" type="cancel" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default FoodEntryForm;
