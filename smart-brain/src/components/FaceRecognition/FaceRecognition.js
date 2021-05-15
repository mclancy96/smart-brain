import React from 'react';
import './FaceRecognition'

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage"alt='' src={imageUrl} width='500px' height='auto'></img>
                <div className='bounding-box'></div>
            </div>
        </div>
    )
}

export default FaceRecognition;