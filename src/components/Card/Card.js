import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string, 
    }
    render(){
      return (
        <section className={styles.component}>
          <div>{ReactHtmlParser(this.props.title)}</div>
        </section>
      );
    }
}

export default Card;