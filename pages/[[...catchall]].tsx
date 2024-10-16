import React from "react";

const CatchAll: React.FC<{ params: any }> = ({ params }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Catch All Route</h1>
      <p>Matched parameters: {JSON.stringify(params)}</p>
    </div>
  );
};

export default CatchAll;
