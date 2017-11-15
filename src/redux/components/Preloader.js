import React from 'react';
import {connect} from 'react-redux';

class Preloader extends React.Component {
    render() {
        if (this.props.isLoading) {
            return (
                <div className='preloader'>

                </div>
            )
        } else {
            return <div/>
        }
    }
}

export default connect(
    store => ({
        isLoading: store.ui.loading
    })
)(Preloader);