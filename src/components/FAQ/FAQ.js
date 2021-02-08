import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {faq} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <h2><Hero titleText={faq.title} image={faq.image}/></h2>
    <h2>{faq.name}</h2>
    <p>{faq.content}</p>
  </Container>
);

FAQ.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.string,
};

export default FAQ;