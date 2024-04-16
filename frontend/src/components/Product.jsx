import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { products } from "../Data";

const PAGE_SIZE = 5;

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const handleUpdate = (productId) => {
    // Implement update functionality
    console.log(`Update product ${productId}`);
  };

  const handleDelete = (productId) => {
    // Implement delete functionality
    console.log(`Delete product ${productId}`);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const getPageProducts = () => {
    const startIndex = currentPage * PAGE_SIZE;
    return products.slice(startIndex, startIndex + PAGE_SIZE);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full ">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Color</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Producer</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">In Stock</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getPageProducts().map(product => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2"><img src={product.img || "/noavatar.png"} alt="" className="w-12 h-12 object-cover rounded" /></td>
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">{product.color}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.producer}</td>
                <td className="px-4 py-2">{product.createdAt}</td>
                <td className="px-4 py-2">{product.inStock}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleUpdate(product.id)} className="mr-2"><FontAwesomeIcon icon={faEdit} /></button>
                  <button onClick={() => handleDelete(product.id)}><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => goToPage(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-200 rounded-md text-[#21295c]"
        >
          Previous
        </button>
        <button
          onClick={() => goToPage(Math.min(currentPage + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-200 rounded-md text-[#21295c]"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductTable;
