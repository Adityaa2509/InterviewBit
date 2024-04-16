import React from 'react';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg text-[#21295c]">
        {children}
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700">Close</button>
      </div>
    </div>
  );
};

export default Modal;
