import React from 'react';
import './edit-food-modal.css';

class EditFoodModal extends React.Component {
  render() {
    return (
      <div className={this.props.showEditFoodModal ? 'modal display-block' : 'modal display-none'}>
        <section className='modal-main'>
          <div className="d-flex justify-content-around">{this.props.children}</div>
        </section>
      </div>
    );
  }
}

export default EditFoodModal;
