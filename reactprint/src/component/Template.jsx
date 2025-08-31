import React from 'react'

const Template = React.forwardRef((props, ref) => {
  return (
    <>
  <div ref={ref} className="bg-white p-6 border rounded shadow">
    <h1 className="text-2xl font-bold mb-4">Invoice</h1>

    {/* Visible only on screen */}
    <div className="print:hidden text-gray-500 text-sm">
      This section is visible only on screen.
    </div>

    {/* Visible only when printing */}
    <div className="print:block hidden text-black text-sm mt-2">
      This section will appear only in the printed version.
    </div>

    {/* Example content */}
    <div className="mt-4">
      <p>Item: MERN Stack Development</p>
      <p>Amount: ₹25,000</p>
    </div>
  </div>
  </>
)});

export default Template;
