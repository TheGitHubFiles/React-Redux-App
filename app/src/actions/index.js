import axios from 'axios'
export const GATHERING_DATA = 'GATHERING_DATA'
export const FOUND_DATA = 'FOUND_DATA'
export const DATA_NOT_FOUND = 'DATA_NOT_FOUND'


export const gatheringData = () => {
    return (dispatch) => {
        dispatch({ type: GATHERING_DATA })


        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then((res) => {
                dispatch({ type: FOUND_DATA, payload: res.data.results });

            })
            .catch((err) => {
                dispatch({ type: DATA_NOT_FOUND, payload: err.message })
            });
    }
}