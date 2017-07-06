import { connect } from 'react-redux';
import { getFact } from '../../redux/weknow/actions/get_fact';
import { addFact } from '../../redux/weknow/actions/add_fact';
import { watchFacedAddedEvent } from '../../redux/weknow/actions/fact_added_event';
import WeKnowComponent from './WeKnowComponent.jsx';

function mapStateToProps(state) {
  return {
    fact: state.fact
  };
}

function mapDispatchToProps(dispatch) {
  watchFacedAddedEvent(dispatch);
  return {
    onGetFact: () => dispatch(getFact()),
    onAddFact: (content) => dispatch(addFact(content))
  };
}

const WeKnowContainer = connect(mapStateToProps, mapDispatchToProps)(WeKnowComponent);

export default WeKnowContainer;
