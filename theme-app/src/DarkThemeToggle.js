import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DARKTHEME } from "./redux/actions"; 


const DarkThemeToggle = () => {
    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch ();
        console.log(darkThemeEnabled)
    return(
        <p>
            <input
                type="checkbox"
                checked={darkThemeEnabled}
                onChange={()=> dispatch({ type: TOGGLE_DARKTHEME })}
            />
            <span>Use Dark Theme</span>
        </p>
    );
};

export default DarkThemeToggle