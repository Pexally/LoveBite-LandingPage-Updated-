import React from 'react';

const DashboardBackground = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-3xl z-0 pointer-events-none">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600/50 to-sky-600/50"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900/50 to-yellow-400/50"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600/50 to-sky-500/50"></div>
      </div>
    </>
  );
};

export default DashboardBackground;