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
            {state.map(e => (
                <p key={e.id}>{e.name} {e.age} {e.height}</p>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state.getSmurfReducer.map(e => {return {
            name: e.name,
            age: e.age,
            height: e.height,
            id: e.id,
        }})
    }

}

const mapDispatchToProps= {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);