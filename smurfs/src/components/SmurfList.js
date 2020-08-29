import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions';

const SmurfList = (props) => {

    console.log('NAME', props.state)

    useEffect(() => {
        props.getSmurfs();
    }, [props])

    return (
        <div>smurf list
            {props.name}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.getSmurfReducer)
    return {
        name: state.getSmurfReducer.name,
    }

}

const mapDispatchToProps= {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);