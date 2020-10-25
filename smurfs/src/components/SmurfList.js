import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions';

const SmurfList = ({getSmurfs, state}) => {
    console.log('state', state)

    useEffect(() => {
        getSmurfs()
    }, [getSmurfs])

    return (
        <div>
            {state.map(smurf => (
                <p key={smurf.id}>{smurf.name} {smurf.age} {smurf.height}</p>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state.getSmurfs.map(el => {return {
            name: el.name,
            age: el.age,
            height: el.height,
            id: el.id,
        }})
    }

}

const mapDispatchToProps= {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);