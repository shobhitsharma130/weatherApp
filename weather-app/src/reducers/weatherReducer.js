export default (state = [], action) => {
  switch (action.type){
    case 'FETCH_WEATHER_SUCCESS':
          return action.weather;
    default:
          return state;
  }
};
