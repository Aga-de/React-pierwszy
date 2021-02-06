import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {Draggable} from 'react-beautiful-dnd';


class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string, 
      id: PropTypes.string,
      index: PropTypes.number,
    }
    render(){
      const {title, id, index} = this.props;
      return (
        <Draggable draggableId={id} index={index}>
          {(provided) => (
            <article
              className={styles.component}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <div>{ReactHtmlParser(title)}</div>
            </article>
          )}
        </Draggable>
      );
    }
}

export default Card;