import React from 'react';

const Social = () => {
    //logic for Social

    return (
        <div className={'social-media'}>
            <a href='#'>Share</a>
            <div id={'mail-share'} className={'social-media-icon'}></div>
            <div id={'facebook-share'} className={'social-media-icon'}></div>
            <div id={'twitter-share'} className={'social-media-icon'}></div>
            <div id={'pinterest-share'} className={'social-media-icon'}></div>
        </div>
    )
};

export default Social;