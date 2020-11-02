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
      <img src="https://res.cloudinary.com/ddhk1wfbi/image/upload/c_fit,f_auto,w_34/v1604359828/1533483330415_b4g00f.jpg" alt="アジ鯖のロゴ部分のアイコン" />
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
