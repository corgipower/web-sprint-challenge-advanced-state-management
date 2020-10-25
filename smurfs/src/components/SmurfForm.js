import React, { useState } from 'react';
import { postSmurfs, getSmurfs } from '../actions/smurfActions';
import { connect } from 'react-redux';

const SmurfForm = ({postSmurfs, getSmurfs}) => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: '',
    })

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        postSmurfs(smurf);
        
        setSmurf({
            name: '',
            age: '',
            height: '',
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Name: 
                    <input type='text' name='name' value={smurf.name} onChange={handleChange} />
                </label>
                <label htmlFor='age'>
                    Age: 
                    <input type='number' name='age' value={smurf.age} onChange={handleChange} />
                </label>
                <label htmlFor='height'>
                    Height: 
                    <input type='number' name='height' value={smurf.height} onChange={handleChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {postSmurfs, getSmurfs}

export default connect(null, mapDispatchToProps)(SmurfForm);