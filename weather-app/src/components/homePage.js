import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherAction from '../actions/weatherAction';
import LocationInput from './locationInput';
import LocationResult from './locationResult';

 class HomePage extends Component{
    constructor(props) {
      super(props);
      this.state = { width: '0', height: '0' };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    setLocation(city){
        const checkCity = (city !== null) ? this.props.getWeather(city) : alert("not proceed");
        return checkCity;
    }
    render(){
            return(
                <div style={{backgroundColor: '#000', height: this.state.height, padding: 20}}>
                <p style={styles.heading}>Weather App</p>
                    <div className="container">
                    <div className="row">
                    <div className="col-xs-9 col-xs-push-2 col-md-4 col-md-push-4">
                    <LocationInput setLocation={this.setLocation.bind(this)} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-12 col-md-4 col-md-push-4">
                    <LocationResult weather={this.props.weather} />
                    </div>
                    </div>
                    </div>
                </div>
            );
        }
    }

const mapStateToProps = ( state ) => {
    return{
        weather: state.weather
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getWeather: city => dispatch(weatherAction.fetchWeather(city))
    };
};

const styles = {
    heading: {
        color: '#fff',
        fontSize: 40,
        marginTop: 0,
        textAlign: 'center',
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
