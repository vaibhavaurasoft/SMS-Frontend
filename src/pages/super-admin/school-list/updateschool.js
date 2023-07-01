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
    // watch,
    formState: { errors },
  } = useForm();


  //   const data = await callApi("get", `/singleadmin/${id}`);
  const onSubmit = async (data) => {
    try {
      let details = await callApi("put", `/updateschooldetails/${id}`, data);
      Router.push("/super-admin/all-user-list");
    } catch (error) {
      console.log(error);
      alert("some thing went wrong", error);
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
                    label=" schoolname"
                    variant="standard"
                    fullWidth
                    type="text"
                    name="schoolname"
                    autoComplete="off"
                    className="my-2"
                    {...register("name", {})}
                    required
                  />
                  {errors.schoolname && (
                    <small style={{ color: "red" }}>
                      {" "}
                      {errors.schoolname.message}{" "}
                    </small>
                  )}
                </Grid>

                {/* <Grid>
                  <TextField
                    label="Owner Name"
                    fullWidth
                    variant="standard"
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="my-2"
                    {...register("name", {})}
                    required
                  />
                  {errors.name && (
                    <small style={{ color: "red" }}>
                      {" "}
                      {errors.name.message}{" "}
                    </small>
                  )}
                </Grid> */}

                {/* <Grid>
                  <TextField
                    label="Address"
                    fullWidth
                    variant="standard"
                    type="text"
                    name="address"
                    autoComplete="off"
                    className="my-2"
                    {...register("address", {})}
                    required
                  />
                  {errors.address && (
                    <small style={{ color: "red" }}>
                      {" "}
                      {errors.address.message}{" "}
                    </small>
                  )}
                </Grid> */}

                {/* <Grid>
                  <TextField
                    label="City"
                    fullWidth
                    variant="standard"
                    type="text"
                    name="city"
                    autoComplete="off"
                    className="my-2"
                    {...register("city", {})}
                    required
                  />
                  {errors.city && (
                    <small style={{ color: "red" }}>
                      {" "}
                      {errors.city.message}{" "}
                    </small>
                  )}
                </Grid> */}

                {/* <Grid>
                  <TextField
                    label="Email"
                    fullWidth
                    variant="standard"
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="my-2"
                    {...register("email", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>email is required</div>}
                </Grid> */}

                {/* <Grid>
                  <TextField
                    label="Password"
                    fullWidth
                    variant="standard"
                    type="Password"
                    required
                    name="password"
                    autoComplete="off"
                    className="my-2"
                    {...register("password", {})}
                  />
                  {errors.password && (
                    <small style={{ color: "red" }}>
                      {" "}
                      {errors.password.message}{" "}
                    </small>
                  )}
                </Grid> */}
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
