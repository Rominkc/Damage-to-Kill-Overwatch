import React from 'react'
import ReactToolTip from 'react-tooltip'

const BtnReactToolTip =(props)=>(
    <>
    <ReactToolTip {...props} place="right" className='react-tool-tip-btn'
     type="light" effect="solid" globalEventOff="click" delayShow={800} /> 
    </>
)

export default BtnReactToolTip;