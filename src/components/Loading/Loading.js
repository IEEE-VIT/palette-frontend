import React from 'react';
import LoadingGif from '../../assets/gif/loading.gif'

import './Loading.css';

const Loading = () => {
    return(
        <div className="loading-component">
            <img src={LoadingGif} alt="loading..." />
        </div>
    )
}

export default Loading;