import React from 'react';
import Clock from 'react-clock';
import { useState } from 'react';

function MyClock() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <Clock value={date} />
    </div>
  );
}

export default MyClock;
