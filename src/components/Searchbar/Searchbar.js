import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Searchbar extends Component {
statt = {
    requestKey: '',
}

static propTypes ={
    onSubmit: this.propTypes.func.isRequired,
};

handleRequestChange = event => {
    this.setState({requestKey: event.currentTarget.value.toLowerCase()});
};

handleSubmit = event => {
    event.preventDefault();

    if (this.state.requestKey.trim() === '') {
      toast('Введите запрос.');
      return;
    }

    this.props.onSubmit(this.state.requestKey);
    this.setState({ requestKey: '' });
  };


    render(){
        return(
  <header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

export default Searchbar;