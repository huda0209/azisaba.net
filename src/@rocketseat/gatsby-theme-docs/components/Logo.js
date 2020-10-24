import React from 'react';

export default function Logo(props) {
  return (
    <img
      width={180} height={55}
      src="https://i.azisaba.net/logo.webp"
      alt="Logo"
      {...props}
    />
  );
}
