import React, { useState } from 'react';

function ToggleButton({value, onToggle}){    
    const classes = {
        'toggled': 'apperance-none bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full',
        'untoggled': 'apperance-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
    }
    const [isToggled, setToggle] = useState(false);
    function handleClick() {
        setToggle(!isToggled);
        onToggle();
        console.log(`this classes isToggled is: ${isToggled}`)
    }
    
    return (
        < button onClick={() =>handleClick()} className={isToggled? `${classes['toggled']}`: `${classes['untoggled']}`}>
            {value}
        </button>
    );
} export default ToggleButton;
