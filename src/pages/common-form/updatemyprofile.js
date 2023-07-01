import React, { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";
import { useRouter } from "next/router";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";

const UserProfile = () => {
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
    <>
      <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Welcome </h2>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                    <h5 className="my-3"></h5>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary">
                        Update-Photo
                      </button>

                      {/* updatemyprofile */}
                      {/* <button type="button" className="btn btn-outline-primary ms-1">
                Delete-Photo
              </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
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
                                <small style={{ color: "red" }}>
                                  {errors.name.message}
                                </small>
                              )}
                            </Grid>
                          </Grid>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"></p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Role</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"></p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(+91) xxxxxxxxxx</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="contained" color="primary" type="submit">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default UserProfile;
