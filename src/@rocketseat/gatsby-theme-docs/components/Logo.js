import React from 'react';

export default function Logo(props) {
  return (
    <div style={{
      minWidth: '180px',
      minHeight: '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} {...props}>
      <img src="https://images.weserv.nl/?url=https://i.azisaba.net/branding/1533483330415.jpg&w=48&output=webp" alt="アジ鯖のロゴ部分のアイコン" />
      <span style={{
        color: '#000000',
        fontSize: '1.4em',
        marginLeft: '8px',
      }}>アジ鯖</span>
    </div>
  );
}
