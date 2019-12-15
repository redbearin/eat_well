import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faStar, faListAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './foodEntryForm.css';

class FoodEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sub_name: '',
      category: '',
      production_type: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubNameChange = this.handleSubNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleSubNameChange(event) {
    this.setState({
      sub_name: event.target.value
    });
  }
  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    });
  }
  handleTypeChange(event) {
    this.setState({
      production_type: event.target.value
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
      sub_name: '',
      category: '',
      production_type: '',
      grade: ''
    });
  }
  handleCancel(event) {
    this.setState({
      name: '',
      sub_name: '',
      category: '',
      production_type: '',
      grade: ''
    });
  }
  render() {
    var typeChoices = ['Conventional', 'Organic', 'Non GMO Verified', 'Farmed (Fish)', 'Wild Caught'];
    var categoryChoices = ['bakery item', 'beverage', 'confectionary', 'dairy product', 'egg', 'fat', 'fish', 'fruit', 'meat', 'prepared food', 'spice', 'sweetener', 'vegetable'];
    return (
      <form className="col-sm-4 container" onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faAppleAlt}/>
          </div>
          <div className="col-10 block">
            <input required autoFocus type="text" value={this.state.name} className="form-control mb-2" placeholder="name" onChange={this.handleNameChange}/>
          </div>
        </div>

        <div className="row">
          <div className="lightColor col-2 pt-2">
            <FontAwesomeIcon icon={faAppleAlt}/>
          </div>
          <div className="col-10 block">
            <input required autoFocus type="text" value={this.state.sub_name} className="form-control mb-2" placeholder="subname" onChange={this.handleSubNameChange}/>
          </div>
        </div>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faListAlt}/>
          </div>
          <div className="col-10 block">
            <select name="category" onChange={this.handleCategoryChange} defaultValue={this.state.category}>
              <option>Category</option>
              {categoryChoices.map((category, index) => (<option key={index} value={category}>{category}</option>))}
            </select>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <div className="col-10">
            <select name="type" onChange={this.handleTypeChange} defaultValue={this.state.production_type}>
              <option>Production Type</option>
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
