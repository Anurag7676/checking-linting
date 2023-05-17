import React from 'react';
import { RxSpeakerLoud } from 'react-icons/rx';
import './index.css';

function SoundBtn({
  icon, label, isSelected, value, onUpdate,
}) {
  const changeHandler = () => {
    onUpdate(value);
  };

  const styles = {
    backgroundColor: isSelected ? '#DBE2EF' : '#FFFFFF',
    border: isSelected ? 'none' : '1px solid #DBE2EF',
  };
  const labelStyle = {
    fontWeight: isSelected ? '500' : '400',
  };

  return (
    <div className="icon-label-container">
      <div style={styles} onClick={changeHandler} className="icon-container">
        {/* replace below component with icon */}
        <div className="icon">
          <RxSpeakerLoud color={isSelected ? '#005A8D' : '#BBBFCA'} />
        </div>
      </div>
      <div style={labelStyle} className="label">
        {label}
      </div>
    </div>
  );
}

export default SoundBtn;
