import React, { useState } from 'react';
import './TopSection.css'
import GenerateBar from './GenerateBar';
// import Unsplash, { toJson } from 'unsplash-js';

// const unsplash = new Unsplash({
//   accessKey: '',
// });

export default function TopSection() {

    return (
        <div className='searchBg'>
            <div className='branding'>
                <div className='brandName'>
                    Image Gen
                </div>
                <div className='subtitle'>
                    The world's leading text-to-image generative AI
                </div>
            </div>
            <GenerateBar placeholder={`Try 'galaxy'`}/>
        </div>
    );
}
