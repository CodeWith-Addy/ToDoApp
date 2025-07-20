import React, { useState } from 'react'
import './ToggleSwitch.css'
import { FaBeer } from 'react-icons/fa';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    const root = document.querySelector("body");
    if (root) {
      if (newValue) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }

  return (
    <>
    <h1><FaBeer/></h1>
    <div className="toggle-switch-center">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggleSwitch}
        />
        <span className="slider"></span>
    
      </label>
    </div>
    </>
  )
}

export default ToggleSwitch