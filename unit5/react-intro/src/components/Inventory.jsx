import { useState } from "react";

const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 14,
  });
  let t = 0;
  for (let key in inv) {
    t += inv[key];
  }
  const [total, setTotal] = useState(t);
  const handleBooks = (num) => {
    inv.books = inv.books + num;
    setTotal(t);

    console.log(inv);
    setInv({ ...inv });
  };
  const handleNoteBooks = (num) => {
    inv.notebooks = inv.notebooks + num;
    setTotal(t);

    console.log(inv);
    setInv({ ...inv });
  };
  const handlepens = (num) => {
    inv.pens = inv.pens + num;
    setTotal(t);

    console.log(inv);
    setInv({ ...inv });
  };
  const handleinkpens = (num) => {
    inv.inkpens = inv.inkpens + num;
    setTotal(t);

    console.log(inv);
    setInv({ ...inv });
  };

  // Create add and remove functions here that changes the
  // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleBooks(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleBooks(-1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          onClick={() => {
            handleNoteBooks(1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handleNoteBooks(-1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          onClick={() => {
            handlepens(1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handlepens(-1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          onClick={() => {
            handleinkpens(1);
          }}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => {
            handleinkpens(-1);
          }}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
export { Inventory };
