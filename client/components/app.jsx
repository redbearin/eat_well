import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';
import Modal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      modalOpen: true
    };
    this.getGrades = this.getGrades.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(studentRecords => {
        this.setState({
          grades: studentRecords
        });
        this.getAverageGrade();
      });
  }

  addGrade(newGrade) {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', request)
      .then(response => response.json())
      .then(newGrade => {
        const allGrades = this.state.grades.concat(newGrade);
        this.setState({
          grades: allGrades
        });
      });
  }
  deleteGrade(idToRemove) {
    const request = {
      method: 'DELETE'
    };
    fetch(`/api/grades/${idToRemove}`, request)
      .then(response => response.json())
      .then(() => {
        this.setState({
          grades: this.state.grades.filter(element => element.id !== idToRemove)
        });
      });
  }

  getAverageGrade() {
    let sum = 0;
    this.state.grades.forEach(element => {
      sum += element.grade;
    });
    return (sum / this.state.grades.length).toFixed(2);
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
            <GradeTable arrayOfStudents={this.state.grades} delete={this.deleteGrade}/>
            <GradeForm onSubmit={this.addGrade}/>
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
