import React, { Component } from 'react';

export default class LocationResult extends Component{
    showResult(){
        const show = this.props.weather.length !== 0 ?
        (
            <div>
                <p style={styles.cityName}>{this.props.weather.name}</p>
                <p style={styles.temperature}>{this.props.weather.weather["0"].main}</p>
                <p style={styles.temperature}>Current: {this.props.weather.main.temp}K</p>
                <p style={styles.temperature}>Temp Max: {this.props.weather.main.temp_max}K</p>
                <p style={styles.temperature}>Temp Min: {this.props.weather.main.temp_min}K</p>
                <p style={styles.temperature}>Humidity: {this.props.weather.main.humidity}</p>
            </div>
        )
        :
        (
            <p style={styles.temperature}>Please enter name of a city</p>
        );
        return show;
    }
    render(){
        return(
            <div style={styles.container}>
            {this.showResult()}
            </div>
        );
    }
}

const styles = {
    container: {
        padding: 30,
        textAlign: 'center'
    },
    cityName: {
        color: '#fff',
        fontSize: 40
    },
    temperature: {
        color: "#fff",
        fontSize: 28
    }
};
