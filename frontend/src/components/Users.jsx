import React, { useState } from "react";
import DataTable from "./DataTable";
import Add from "./Add";
import styled from "styled-components";
import { userRows } from "../Data";

const UsersWrapper = styled.div`
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #191F45;
    border-bottom: 1px solid #ccc;
  }

  .info h1 {
    font-size: 48px;
    margin: 0;
  }

  .add-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .add-button:hover {
    background-color: #0056b3;
  }
`;

const columns = [
  { accessor: "id", Header: "ID", width: 90 },
  {
    accessor: "img",
    Header: "Avatar",
    width: 100,
    Cell: ({ row }) => {
      return <img src={row.original.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    accessor: "firstName",
    Header: "First name",
    width: 150,
  },
  {
    accessor: "lastName",
    Header: "Last name",
    width: 150,
  },
  {
    accessor: "email",
    Header: "Email",
    width: 200,
  },
  {
    accessor: "phone",
    Header: "Phone",
    width: 200,
  },
  {
    accessor: "createdAt",
    Header: "Created At",
    width: 200,
  },
  {
    accessor: "verified",
    Header: "Verified",
    width: 150,
    Cell: ({ value }) => (value ? "Yes" : "No"), // Assuming "verified" is a boolean field
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <UsersWrapper>
      <div className="info">
        <h1 className="text-4xl">Users</h1>
        
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </UsersWrapper>
  );
};

export default Users;
