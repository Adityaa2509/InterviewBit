import React, { useState } from "react";
import DataTable from "./DataTable";
import Add from "./Add";
import { products } from "../Data";

const columns = [
  { id: "id", field: "id", headerName: "ID", width: 90 },
  {
    id: "img",
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    id: "title",
    field: "title",
    headerName: "Title",
    width: 250,
  },
  {
    id: "color",
    field: "color",
    headerName: "Color",
    width: 150,
  },
  {
    id: "price",
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    id: "producer",
    field: "producer",
    headerName: "Producer",
    width: 200,
  },
  {
    id: "createdAt",
    field: "createdAt",
    headerName: "Created At",
    width: 200,
  },
  {
    id: "inStock",
    field: "inStock",
    headerName: "In Stock",
    width: 150,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
