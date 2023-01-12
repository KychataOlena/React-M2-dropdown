import React, { Component } from 'react';
import './Dropdown.css';
// import { Dropdown } from '../Dropdown';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Сховати' : 'Показати'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">burger menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
