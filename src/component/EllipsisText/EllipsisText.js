import React, { useState } from 'react'

function EllipsisText({children, max, showToolTip}) {
  console.log(max);
  return (
    <div onMouseEnter = {() => showToolTip(true)}
        onMouseLeave = {() => showToolTip(false)} 
        style = {{width: max, overflow: "hidden", textOverflow: "ellipsis", }}>
        {children}
    </div>
  )
}

export default EllipsisText
