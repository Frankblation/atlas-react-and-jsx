import React from 'react';
import copyIcon from '../assets/copy.svg';

function CopyLink({ link }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        alert('link coppied to clipboard!');
    };

    return(
        <img
        src={copyIcon}
        alt='Copy Link'
        className="copy"
        onClick={handleCopy}
        style={{cursor: 'pointer'}}
        />
    );
}

export default CopyLink;