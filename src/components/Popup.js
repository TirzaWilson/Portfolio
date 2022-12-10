import React from 'react'
import './Popup.css';

function Popup() {
  return (
    <div className="popup" id='pop'>
      <div className="popup-inner">
        <button className='close-btn' onClick={() => document.getElementById('pop').style.display = 'none'}>close</button>
        <h3 id='pop-msg'></h3>
      </div>
    </div>
  );
}

export default Popup;
