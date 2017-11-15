import React from 'react';

const FilterButton = ({isActive = false, handleClick, children}) => {
    const clsName = `btn ${isActive ? 'btn--active' : ''}`;

    return (
        <button className={clsName} onClick={handleClick}>
            {children}
        </button>
    )
};

export default FilterButton;