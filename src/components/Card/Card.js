import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string, 
    }
    render(){
      const {title} = this.props;
      return (
        <section className={styles.component}>
          <div>{ReactHtmlParser(title)}</div>
        </section>
      );
    }
}

export default Card;