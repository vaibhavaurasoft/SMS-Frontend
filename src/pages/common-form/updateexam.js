import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import Style from "../teacher/teacher.module.css";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
import { callApi } from "../../../utils/apicall";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const AddExam = () => {
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      let details = await callApi("put", `/examupdate/${id}`, data);
      router.push("/admin/all-exam");
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
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 className={Style.headerStyle}>Add-Exam</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="subject"
                    {...register("subject", {})}
                    label="Subject"
                    name="subject"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="duration"
                    {...register("duration", {})}
                    label="Duration"
                    name="duration"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="totalMarks"
                    {...register("totalMarks", {})}
                    label="Total Marks"
                    name="totalMarks"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="date"
                    id="date"
                    {...register("date", {})}
                    // label="Total Marks"
                    name="date"
                  />
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <select
                      className={Style.dropClass}
                      {...register("classId", {})}
                    >
                      <option value="">Select Class</option>
                      {classId.map((classData) => (
                        <option key={classData._id} value={classData._id}>
                          {classData.className}
                        </option>
                      ))}
                    </select>
                  </div>
                </Grid>
              </Grid>
            </form>
            <div className="text-center">
              <Button variant="contained" className="mb-5" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Paper>
      </Grid>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default AddExam;
