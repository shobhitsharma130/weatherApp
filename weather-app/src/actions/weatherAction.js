import Axios from 'axios';

const apiurl = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherSuccess = (weather) => {
    return{
        type: 'FETCH_WEATHER_SUCCESS',
        weather
    };
};

export const fetchWeather = (location) => {
    return (dispatch) => {
        return Axios.get(apiurl, {
            params: {
                APPID: "7e214afe12aadfd7726c20b206302c94",
                q: location
            }
        })
        .then( response => {
            dispatch(fetchWeatherSuccess(response.data));
            console.log(response);
        })
        .catch(error => {
            throw(error);
        });
    };
};
