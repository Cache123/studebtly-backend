import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InformationPage.css';
import CollegesContainer from '../../containers/CollegesContainer/CollegesContainer.js';
import HomePage from '../HomePage/HomePage.js';

export default class InformationPage extends Component {
  constructor() {
    super();
    this.state ={
      CB: null,
      HB: null
    };
  }

  componentDidMount() {
    this.setState({
      CB: this.props.CB,
      HB: this.props.HB
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      CB: nextProps.CB,
      HB: nextProps.HB
    });
  }

  renderPage = () => {
    if (this.state.CB === true) {
      return <CollegesContainer />;
    }
    if (this.state.HB === true) {
      return <HomePage />;
    }
  };

  render() {
    return (
      <section id='informationpage-container'>
        {
          this.renderPage()
        }
      </section>
    );
  }
}

InformationPage.propTypes = {
  CB: PropTypes.bool,
  HB: PropTypes.bool
};