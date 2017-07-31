import React from 'react';

const LocationInput = (props) => {
    let location = null;
    return(
        <div>
        <form onSubmit = {e => {
            e.preventDefault();
            let city = location.value;
            props.setLocation(city);
            e.target.reset();
        }}
        className="form-horizontal"
        >
        <div className="input-group">
         <label style={styles.label} className="control-label">Enter name of your city</label>
         <div className="col-sm-10">
             <input
             style={styles.locationInput}
             type="text"
             name="title"
             ref={node => location = node}
             className="form-control" required/>
         </div>
         </div>
         <div>
         <button type="submit" style={styles.button}>Submit</button>
         </div>
        </form>
        </div>
    );
};

const styles = {
    label: {
        color: '#fff'
    },
    button: {
        border: "none",
        backgroundColor: '#76b1fd',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        color: '#fff'
    },
    locationInput: {
        marginTop: 10,
    }
};

export default LocationInput;
