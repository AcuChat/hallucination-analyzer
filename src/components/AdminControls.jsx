import './AdminControls.scss';
import React from 'react'

function AdminControls() {

  if (window.location.hostname !== 'localhost') return <></>

  return (
    <div className='AdminControls'>
      <div className="AdminControls__submit-button">Submit</div>
      <div className="AdminControls__verify-button">Verify</div>
      <div className="AdminControls__highlight-container">
        <div className="AdminControls__reset-button">Reset</div>
        <div className="AdminControls__checkbox-container">
          <input type="checkbox" className="AdminControls__checkbox" />
          <div className="AdminControls__checkbox-label">Highlight</div>
        </div>
      </div>
    </div>
  )
}

export default AdminControls