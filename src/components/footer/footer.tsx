import React from 'react'
import './style.scss'

const Footer: React.FC = () => (
  <div className="row footer">
    <p>
      © Copyright 2012-{new Date().getFullYear()}, RawSAS.com, All rights
      reserved
    </p>
  </div>
)

export default Footer
