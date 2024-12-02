import React from "react";

const App = ({ totalCount, PageNumber, setPageNumber }) => {
  const pagenNumber = Math.ceil(totalCount / 9);

  let pagenArr = [];

  for (let i = 1; i < pagenNumber + 1; i++) {
    pagenArr.push(i);
  }

  return (
    <div className="mt-10 flex w-fit mx-auto gap-2 join">
      {PageNumber}
      <button
        onClick={() => setPageNumber(PageNumber - 1)}
        className="join-item btn"
      >
        last
      </button>
      {pagenArr?.map((item) => {
        return (
          <button onClick={() => setPageNumber(item)} className="join-item btn">
            {item}
          </button>
        );
      })}
      <button
        onClick={() => setPageNumber(PageNumber + 1)}
        className="join-item btn"
      >
        next
      </button>
    </div>
  );
};

export default App;
