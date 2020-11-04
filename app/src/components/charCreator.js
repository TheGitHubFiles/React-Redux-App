import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { gatheringData } from '../actions'

const CharList = (props) => {
    useEffect(() => {
        props.gatheringData();
    }, []);

    return (
        <div>
            <h2>Rick & Morty</h2>
            {props.isLoading ? <p style={{ color: '#1aff1a' }}>HURRY UP Morty..there,there waiting on us!!!</p> : null}
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
            {props.card.map((card) => (
                <div>
                    {console.log(card.status)}
                    {card.status === 'Alive' || card.status === 'unknown' ? <h4 style={{ color: 'green' }}>{card.name}</h4> : <h4 style={{ color: 'red' }}>{card.name}</h4>}

                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        card: state.card,
        error: state.error
    }
}
export default connect(mapStateToProps, { gatheringData })(CharList);