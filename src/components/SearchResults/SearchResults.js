import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  static defaultProps = {
    icon: settings.search.icon,
    title: settings.search.result,
  };

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => 
            <div key={cardData.id}>
              <Card key={cardData.id}{...cardData}/>
              <Link className={styles.link} to={`/list/${cardData.listId}`}>
                <p>Go to the list!</p>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default SearchResults;