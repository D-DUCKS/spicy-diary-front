import { combineReducers } from 'redux';
import subwayTypes from 'src/module/subway/types';
import { Station} from 'src/models/subway';

interface IEntities {
    label: string | null;
    indicatorText: string | null;
    color: string | null;
    stations: Station[] | null;
}

const initialState: IEntities = {
    label: null,
    indicatorText: null,
    color: null,
    stations: null
} 

const entitiesReducer = (state=initialState, action: any) => {
    switch(action.type) {
        case subwayTypes.FETCH_STATIONS_SUCCESS:
            const label = action.label;
            const indicatorText = action.indicatorText;
            const color = action.color;
            const stations = action.stations;
            return {
                ...state,
                label,
                indicatorText,
                color,
                stations
            }
    }

    return state;
}

const reducer = combineReducers({
    entities: entitiesReducer
});

export default reducer;
