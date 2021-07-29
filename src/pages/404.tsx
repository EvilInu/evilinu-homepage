import * as React from 'react';

export default function () {
  return (
    <div
      className="md:container md:mx-auto bg-blue-100"
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className="text-4xl p-7 font-bold">404 ERROR</h1>
    </div>
  );
}
