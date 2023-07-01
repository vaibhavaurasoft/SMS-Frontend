import React from "react";
import { useRouter } from "next/router";
import { callApi } from "../../../../utils/apicall";
import { Button } from "@mui/material";
import Router from "next/router"; // Added import for Router

const InnerDdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const onSubmitDelete = async (e) => { 
    e.preventDefault(); 

    try {
      await callApi("delete", `/deleteschool/${id}`);
      Router.push("/super-admin/all-user-list"); 
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
          Delete school
        </Button>
      </form>
    </>
  );
};

export default InnerDdetails;
