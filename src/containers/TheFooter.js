import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a  target="_blank" rel="noopener noreferrer">Mapfreight</a>
        <span className="ml-1">&copy; 2021 Mapfreight</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a target="_blank" rel="noopener noreferrer">Mapfreight</a>   
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
