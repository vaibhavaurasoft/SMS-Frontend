import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { callApi } from "../../../utils/apicall";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";

const InnerDdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await callApi("put", `/updateusers/${id}`, data);
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong", error);
    }
  };

  return (
    <Grid>
      <Paper elevation={20}>
        <Grid align="center">
          <Avatar></Avatar>
          <h2>Update User</h2>
        </Grid>

        <div className="container">
          <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <Grid>
                <TextField
                  label="Name"
                  variant="standard"
                  fullWidth
                  type="text"
                  name="name"
                  autoComplete="off"
                  className="my-2"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <small style={{ color: "red" }}>{errors.name.message}</small>
                )}
              </Grid>
            </Grid>

            <div className="text-center my-2 mt-4">
              <Button variant="contained" color="primary" type="submit">
                Update
              </Button>
            </div>
          </form>
        </div>
      </Paper>
    </Grid>
  );
};

export default InnerDdetails;
