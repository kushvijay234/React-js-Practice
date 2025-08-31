import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Template from "../component/template";

const PrintWrapper = () => {
  const componentRef = useRef();
  return (
    <>
    <div className="p-6">
      <ReactToPrint
        trigger={() => (
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Print Invoice
          </button>
        )}
        content={() => componentRef.current}
      />
      <Template ref={componentRef} />
    </div>
    </>
  );
};

export default PrintWrapper;
