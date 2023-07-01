import React from "react";
import { useRouter } from "next/router";
import { callApi } from "../../../utils/apicall";
import { Button } from "@mui/material";
import Router from "next/router"; // Added import for Router

const InnerDdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const onSubmitDelete = async (e) => {
    e.preventDefault();

    try {
      await callApi("delete", `/deleteusers/${id}`);
      Router.push("/");
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <h1>Delete School</h1>
      <form onSubmit={onSubmitDelete}>
        <Button variant="contained" color="secondary" type="submit">
          Delete user
        </Button>
      </form>
    </>
  );
};

export default InnerDdetails;
