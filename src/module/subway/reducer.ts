import { combineReducers } from 'redux';
import subwayTypes from 'src/module/subway/types';

const entitiesReducer = (state={}, action: any) => {
    switch(action.type) {
        case subwayTypes.FETCH_STATIONS_SUCCESS:
            const attributes = action.attributes;
            const stations = action.stations;
            return {
                ...state,
                attributes,
                stations
            }
    }

    return state;
}

const reducer = combineReducers({
    entities: entitiesReducer
});

export default reducer;
