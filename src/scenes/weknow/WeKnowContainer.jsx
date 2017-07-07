import { connect } from 'react-redux';
import { getFact } from '../../redux/weknow/actions/get_fact';
import { addFact } from '../../redux/weknow/actions/add_fact';
import { watchFactAddedEvent } from '../../redux/weknow/actions/fact_added_event';
import WeKnowComponent from './WeKnowComponent.jsx';

function mapStateToProps(state) {
	console.log("FBHomeContainer: mapStateToProps: ", state);
  return {
    factsObj: state.factsObj
  };
}

function mapDispatchToProps(dispatch) {
  watchFactAddedEvent(dispatch);
  return {
    onGetFact: () => dispatch(getFact()),
    onAddFact: (content) => dispatch(addFact(content))
  };
}

const WeKnowContainer = connect(mapStateToProps, mapDispatchToProps)(WeKnowComponent);

export default WeKnowContainer;
