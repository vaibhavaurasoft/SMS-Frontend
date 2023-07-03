import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { callApi } from "../../../../utils/apicall";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import Style from "../sup-comm.module.css";

const InnerDdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let details = await callApi("put", `/updateschooldetails/${id}`, data);
      router.push("/super-admin/school-list");
    } catch (error) {
      console.log(error);
      alert("Something went wrong", error);
    }
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} className={Style.paperStyle}>
          <Grid align="center">
            <Avatar className={Style.avatarStyle}></Avatar>
            <h2 className={Style.headerStyle}>Add School</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <Grid>
                  <TextField
                    label="schoolname"
                    variant="standard"
                    fullWidth
                    type="text"
                    name="schoolname"
                    autoComplete="off"
                    className="my-2"
                    {...register("schoolname", {})}
                    required
                  />
                  <TextField
                    label="schoolname"
                    variant="standard"
                    fullWidth
                    type="text"
                    name="schoolname"
                    autoComplete="off"
                    className="my-2"
                    {...register("City", {})}
                    required
                  />
                  <TextField
                    label="schoolname"
                    variant="standard"
                    fullWidth
                    type="text"
                    name="schoolname"
                    autoComplete="off"
                    className="my-2"
                    {...register("address", {})}
                    required
                  />
                </Grid>
              </Grid>
              <div className="text-center my-2 mt-4">
                <Button variant="contained" color="primary" type="submit">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default InnerDdetails;
