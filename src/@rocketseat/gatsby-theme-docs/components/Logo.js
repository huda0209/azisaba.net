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
      <img src="https://res.cloudinary.com/ddhk1wfbi/image/upload/c_fit,f_auto,w_48/v1604359828/1533483330415_b4g00f.jpg" alt="アジ鯖のロゴ部分のアイコン" />
      <span style={{
        color: '#000000',
        fontSize: '1.4em',
        marginLeft: '8px',
      }}>アジ鯖</span>
    </div>
  );
}
