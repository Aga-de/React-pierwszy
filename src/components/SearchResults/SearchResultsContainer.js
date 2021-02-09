import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromList} from '../../redux/cardsRedux';



const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;
  console.log('searchString:', searchString);
  return {
    cards: getCardsFromList(state, searchString),
  };
};


export default connect(mapStateToProps)(SearchResults);
