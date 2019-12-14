import React from 'react';
import Header from './header';
import FoodsTable from './foodsTable';
import FoodEntryForm from './foodEntryForm';
import Modal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      modalOpen: true
    };
    this.getFoods = this.getFoods.bind(this);
    this.addFood = this.addFood.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
  }

  componentDidMount() {
    this.getFoods();
  }

  getFoods() {
    const data = {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`/api/foods.php`, data)
      .then(response => response.json())
      .then(data => {
        this.setState({
          foods: data
        });
      })
      .catch(error => { throw (error); });
  }

  addFood(newFood) {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFood)
    };
    fetch('/api/grades', request)
      .then(response => response.json())
      .then(data => {
        const allFoods = this.state.foods.concat(newFood);
        this.setState({
          foods: allFoods
        });
      });
  }

  deleteFood(idToRemove) {
    const request = {
      method: 'DELETE'
    };
    fetch(`/api/grades/${idToRemove}`, request)
      .then(response => response.json())
      .then(() => {
        this.setState({
          foods: this.state.foods.filter(element => element.id !== idToRemove)
        });
      });
  }

  getAverageGrade() {
    let sum = 0;
    this.state.foods.forEach(element => {
      sum += parseInt(element.grade);
    });
    return (sum / this.state.foods.length).toFixed(2);
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='container' style={{ display: this.state.modalOpen ? 'none' : 'block' }}>
          <Header averageGrade={this.getAverageGrade()}/>
          <div className="row">
            <FoodsTable arrayOfFoods={this.state.foods} delete={this.deleteFood}/>
            <FoodEntryForm onSubmit={this.addFood}/>
          </div>
        </div>
        <Modal open={this.state.modalOpen}>
          <button className= "modalCancelButton" onClick= {() => this.closeModal()}>Learn More</button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
