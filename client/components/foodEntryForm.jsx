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
      grade: '',
      shown: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'grade') {
      this.setState({
        grade: parseInt(event.target.value)
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newFood = this.state;
    this.props.onSubmit(newFood);
    event.target.reset();
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
    var categoryChoices = ['bakery item', 'beverage', 'confectionary', 'dairy product', 'egg', 'fat', 'fish', 'fruit', 'grain', 'meat', 'prepared food', 'spice', 'sweetener', 'vegetable'];
    return (
      <form className="col-sm-4 container" onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faAppleAlt}/>
          </div>
          <div className="col-10 block">
            <input required autoFocus type="text" value={this.state.name} className="form-control mb-2" placeholder="name" name="name" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="row">
          <div className="lightColor col-2 pt-2">
            <FontAwesomeIcon icon={faAppleAlt}/>
          </div>
          <div className="col-10 block">
            <input required autoFocus type="text" value={this.state.sub_name} className="form-control mb-2" placeholder="subname" name="sub_name" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="row">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faListAlt}/>
          </div>
          <div className="col-10 block">
            <select name="category" onChange={this.handleChange}>
              <option value="">Category</option>
              {categoryChoices.map((category, index) => (<option key={index} value={category}>{category}</option>))}
            </select>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <div className="col-10">
            <select name="production_type" onChange={this.handleChange}>
              <option value="">Production Type</option>
              {typeChoices.map((type, index) => (<option key={index} value={type}>{type}</option>))}
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-2 pt-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="col-10">
            <input required autoFocus type="text" value={this.state.grade} className="form-control mb-2" name='grade' placeholder="health grade" onChange={this.handleChange}/>
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
