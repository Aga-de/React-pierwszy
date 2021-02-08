import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {info} from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2><Hero titleText={info.title} image={info.image}/></h2>
    <h2>{info.name}</h2>
    <p>{info.content}</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.string,
};

export default Info;