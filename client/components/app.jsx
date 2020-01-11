import React from 'react';
import Header from './header';
import FoodsTable from './foodsTable';
import FoodEntryForm from './foodEntryForm';
import EntryModal from './entry-modal';
import EditFoodModal from './edit-food-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      modalOpen: true,
      editFood: false,
      id: '',
      name: '',
      subName: '',
      category: '',
      productionType: '',
      grade: null
    };
    this.getFoods = this.getFoods.bind(this);

    this.addFood = this.addFood.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
    this.updateFood = this.updateFood.bind(this);

    this.openEditModal = this.openEditModal.bind(this);
    this.handleFormEntry = this.handleFormEntry.bind(this);
    this.closeEditModalClearInfo = this.closeEditModalClearInfo.bind(this);
  }

  addFood(newFood) {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFood)
    };
    fetch('/api/add-food.php', data)
      .then(response => { })
      .then(data => {
        this.getFoods();
      })
      .catch(error => { throw (error); });
  }

  closeEditModalClearInfo() {
    this.setState({
      editFood: false,
      id: '',
      name: '',
      subName: '',
      category: '',
      productionType: '',
      grade: null
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  componentDidMount() {
    this.getFoods();
  }

  deleteFood(idToRemove) {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(idToRemove)
    };
    fetch('/api/delete-food.php', data)
      .then(response => { })
      .then(data => {
        this.getFoods();
      })
      .catch(error => { throw (error); });
  }

  getAverageGrade() {
    let sum = 0;
    this.state.foods.forEach(element => {
      sum += parseInt(element.grade);
    });
    return (sum / this.state.foods.length).toFixed(2);
  }

  getFoods() {
    const data = {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/foods.php', data)
      .then(response => response.json())
      .then(data => {
        this.setState({
          foods: data
        });
      })
      .catch(error => { throw (error); });
  }

  handleFormEntry(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  openEditModal(idToEdit) {
    var foodIndex = this.state.foods.findIndex(element => element.id === idToEdit);
    this.setState({
      editFood: true,
      id: idToEdit,
      name: this.state.foods[foodIndex].name,
      subName: this.state.foods[foodIndex].sub_name,
      category: this.state.foods[foodIndex].category,
      productionType: this.state.foods[foodIndex].production_type,
      grade: this.state.foods[foodIndex].grade
    });
  }

  updateFood(event) {
    event.preventDefault();
    this.setState({
      editFood: false
    });
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        sub_name: this.state.subName,
        category: this.state.category,
        production_type: this.state.productionType,
        grade: this.state.grade
      })
    };
    fetch('/api/edit-food.php', data)
      .then(response => { })
      .then(data => {
        this.getFoods();
      })
      .catch(error => { throw (error); });
  }

  render() {
    var typeChoices = ['Conventional', 'Organic', 'Non GMO Verified', 'Farmed (Fish)', 'Wild Caught'];

    var categoryChoices = ['bakery item', 'beverage', 'confectionary', 'dairy product', 'egg', 'fat', 'fish', 'fruit', 'grain', 'meat', 'prepared food', 'spice', 'sweetener', 'vegetable'];

    return (
      <React.Fragment>
        <div className='container' style={{ display: this.state.modalOpen ? 'none' : 'block' }}>
          <Header averageGrade={this.getAverageGrade()}/>
          <div className="row">
            <FoodsTable arrayOfFoods={this.state.foods} delete={this.deleteFood}edit={this.openEditModal}/>
            <FoodEntryForm onSubmit={this.addFood}/>
          </div>
        </div>

        <EntryModal open={this.state.modalOpen}>
          <button className= "modalCancelButton" onClick= {() => this.closeModal()}>Learn More</button>
        </EntryModal>

        <EditFoodModal showEditFoodModal={this.state.editFood}>
          <div className="d-flex justify-content-center">
            <form onSubmit={this.updateFood}>
              <div className="mt-5 ml-2 mr-2 mb-2">
                <div className="title">Name</div>
                <input type='text' name="name" defaultValue={this.state.name} contentEditable="true" onChange={this.handleFormEntry} />
              </div>
              <div className="m-2">
                <div className="title">Subname</div>
                <input type='text' name="subName" defaultValue={this.state.subName} contentEditable="true" onChange={this.handleFormEntry} />
              </div>
              <div className="m-2">
                <div className="title">Category</div>
                <select name="category" defaultValue={this.state.category} onChange={this.handleFormEntry}>
                  <option>select category</option>
                  {categoryChoices.map(index => (<option key={index} value={'' + index}>{index}</option>))}
                </select>
              </div>
              <div className="m-2">
                <div className="title">Production Type</div>
                <select name="productionType" defaultValue={this.state.productionType} onChange={this.handleFormEntry}>
                  <option>select production type</option>
                  {typeChoices.map(index => (<option key={index} value={'' + index}>{index}</option>))}
                </select>
              </div>
              <div className="m-2">
                <div className="title">Grade</div>
                <input type='text' name="grade" defaultValue={this.state.grade} contentEditable="true" onChange={this.handleFormEntry} />
              </div>
              <div className="mt-4 mr-2 ml-2 mb-5 d-flex justify-content-center">
                <button className="btn-success mr-2" type='submit'>Submit</button>
                <button className="btn-danger ml-2" type='reset' onClick={this.closeEditModalClearInfo}>Cancel</button>
              </div>
            </form>
          </div>
        </EditFoodModal>

      </React.Fragment>
    );
  }
}

export default App;
