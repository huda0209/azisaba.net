import React from 'react';

export default function Logo(props) {
  return (
    <div style={{
      width: '180px',
      height: '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} {...props}>
      <img src="https://i.azisaba.net/logo-icon.png" alt="アジ鯖のロゴアイコン" />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '8px',
      }}>
        <span style={{
          color: '#000000',
          fontSize: '1.4em',
        }}>アジ鯖</span>
      </div>
    </div>
  );
}
