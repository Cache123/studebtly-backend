import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CollegesPage.css';
import { fetchColleges, addFavorites, deleteFavorites } from '../../actions';
import { connect } from 'react-redux';
import CollegesCard from '../CollegesCard/CollegesCard';

class CollegesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Colleges',
      description: 'Explore the colleges below'
    };
  }

  componentDidMount = async () => {
    const collegesArray = await fetchColleges();
    this.props.storeColleges(collegesArray);
  }

  createCollegesCard = () => {
    const { colleges } = this.props;
    return colleges.map( (college, index) =>
      <CollegesCard college={college} key={index} />
    );
  }

  render() {
    const { title, description } = this.state;
    return (
      <section id='colleges-container'>
        <section id='college-container'>
          {this.createCollegesCard()}
        </section>
      </section>
    );
  }
}

CollegesPage.propTypes = {
  storeColleges: PropTypes.func,
  colleges: PropTypes.array
};

const mapStateToProps = store => ({
  colleges: store.collegesData
});

const mapDispatchToProps = dispatch => ({
  storeColleges: (colleges) => dispatch(fetchColleges(colleges))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollegesPage);
