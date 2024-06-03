"use client";

import React from "react";

type Props = {
  action: (num: number) => Promise<string>;
};

const DataWidget = (props: Props) => {
  const [message, setMessage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    const data = await props.action(Math.random());
    setLoading(false);
    setMessage(data);
    console.log(data);
  };

  return (
    <div className="flex flex-col w-[300px]">
      <button
        className="w-full border border-solid border-black p-3 rounded-md bg-yellow-500 shadow-xl my-4"
        onClick={handleClick} data-testid="fetch-data-button"
      >
        Fetch Data
      </button>
      {loading ? (
        <span>Loading...</span>
      ) : message ? (
        <div className="w-full border border-solid border-gray-500 bg-white p-3 rounded-md" id="result-box">
          {message && <p data-testid="result">{message}</p>}
        </div>
      ) : (
        "no number yet"
      )}
    </div>
  );
};

export default DataWidget;
