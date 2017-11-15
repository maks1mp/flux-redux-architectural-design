import React from 'react';

const Preloader = ({isLoading}) => {
    if (isLoading) {
        return (
             <div className='preloader'>

             </div>
        )
    } else {
        return <div/>
    }
}

export default Preloader;