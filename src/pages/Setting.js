import React from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Settings</h1>
      <div className="flex flex-col gap-5 mt-5 text-xl font-semibold">
        <Link to="">Profile</Link>
        <Link to="">Change password</Link>
        <Link to="/admin/dashboard/register">Create new admin</Link>
        <Link to="admin/login">Log out</Link>
      </div>
    </div>
  );
};

export default Setting;
