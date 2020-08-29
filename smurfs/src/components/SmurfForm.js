import React, { useState } from 'react';

const SmurfForm = () => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
    })

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(smurf);

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
                    cm
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SmurfForm;