import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';

class List extends React.Component {
    
    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }
      
    render() {
      const {title, image, description, columns, addColumn} = this.props;
      // const moveCardHandler = result => {
      //   if(
      //     result.destination
      //     &&
      //     (
      //       result.destination.index != result.source.index
      //       ||
      //       result.destination.droppableId != result.source.droppableId
      //     )
      //   ){
      //     moveCard({
      //       id: result.draggableId,
      //       dest: {
      //         index: result.destination.index,
      //         columnId: result.destination.droppableId,
      //       },
      //       src: {
      //         index: result.source.index,
      //         columnId: result.source.droppableId,
      //       },
      //     });
      //   }
      // };
      return (
        <Container>
          <section className={styles.component}>
            <h2><Hero titleText={title} image={image}/></h2>
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn}/>
            </div>
          </section>
        </Container>
      );
    }
}

export default List;