export const GET_RANDOM_NAME = 'randomName/GET_RANDOM_NAME'

let nameCur = "adam";

const nameList = ["adam", "bob", "carl", "david", "edgar", "fred", "george", "henry", "izzy", "james", "kurt"]
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
	return nameCur;
}

// Action
export const getRandomName = () => {
  return dispatch => {
    dispatch({
      type: GET_RANDOM_NAME
    })
  }
}


export default (state = initialState, action) => {

  switch (action.type) {
    case GET_RANDOM_NAME:
      return {
        ...state,
        name: getRandom()
      }

    default:
      return state
  }
}
