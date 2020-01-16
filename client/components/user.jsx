import React from 'react';
import EntryModal from './entry-modal';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
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
          <div>hello from user page</div>
        </div>

        <EntryModal open={this.state.modalOpen}>
          <button className= "modalCancelButton" onClick= {() => this.closeModal()}>Learn More</button>
        </EntryModal>
      </React.Fragment>
    );
  }
}

export default User;
