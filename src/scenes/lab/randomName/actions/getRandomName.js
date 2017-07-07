import actionTypes from './actionTypes.js'

let nameCur = "adam";

const nameList = ["adam", "bob", "carl", "david", "edgar"]
const initialState = {
  name: nameCur
}

// Helper
function getRandom() {
	let nameNew = "";
	while (nameNew === "" || nameNew === nameCur) {
		nameNew = nameList[Math.floor(Math.random() * nameList.length)];
	}
	nameCur = nameNew;
	console.log("nameNew:", nameNew);
	return nameCur;
}

// Action
export const getRandomName = () => {
	console.log("getRandomName");
  return dispatch => {
    dispatch({
      type: actionTypes.GET_RANDOM_NAME,
			name: getRandom()
    })
  }
}
