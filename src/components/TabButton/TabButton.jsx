
import React from 'react';

export const TabButton = ({children,onSelect,isSelected}) => {

  return (
    <li>
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>
            {children}
        </button>
    </li>
  )
}
