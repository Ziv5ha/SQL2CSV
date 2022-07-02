import React from 'react';

export default function DownloadBtn() {
  return (
    <a
      className='download-btn'
      // href='http://localhost:8080/converter/download'
      href='./converter/download'
      download
    >
      Download
    </a>
  );
}
