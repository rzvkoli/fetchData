import React from 'react';

export default function Lenght({ data , err }) {
  return (
    <div>
        <p>Lenght components</p>
        <div>
            {err !== '' ? <p>error</p> :data.length === 0 ? <p>Loading ...</p> : <p>{data.length}</p>}
        </div>
    </div>
  );
}
