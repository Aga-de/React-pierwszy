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
        <div className={styles.component}>
          {ReactHtmlParser(title)}
        </div>
      );
    }
}

export default Card;