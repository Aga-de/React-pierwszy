import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { Link } from 'react-router-dom';
import {Droppable, DragDropContext} from 'react-beautiful-dnd';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    id: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.search.icon,
    title: settings.search.result,
  };

  render() {
    const {title, icon, cards, id} = this.props;
    return (
      <DragDropContext>
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}>
              <span className={styles.icon}>
                <Icon name={icon}/>
              </span>
              {title}
            </h3>
            <Droppable droppableId={id}>
              {provided => (
                <div
                  className={styles.cards}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map((cardData, index) => (
                    <>
                      <div key={cardData.id} className={styles.wrapper}>
                        <Card key={ cardData.id }{...cardData } index={index} />
                        <Link className={styles.link} to={`/list/${cardData.listId}`}>
                          <p>Go to the list!</p>
                        </Link>
                      </div>
                    </>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </section>
        </Container>
      </DragDropContext>
    );
  }
}

export default SearchResults;