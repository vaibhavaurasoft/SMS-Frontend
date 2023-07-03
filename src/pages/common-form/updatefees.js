 import { useEffect, useState } from "react";
 import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
 import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
 import Style from "../teacher/teacher.module.css";
 import { ToastContainer, toast } from "react-toastify";
 import Router from "next/router";
 import { callApi } from "../../../utils/apicall";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

 const AddFee = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      try {
        let details = await callApi("put", `/updatefee`, data);
        router.push("/admin/all-fees");
      } catch (error) {
        console.log(error);
        alert("Something went wrong", error);
      }
    };
   const avatarStyle = { backgroundColor: "#1bbd7e" };

   return (
     <>
       <Grid>
         <Paper elevation={20} className={Style.paperStyle}>
           <Grid align="center">
             <Avatar style={avatarStyle}>
               <AddCircleOutlineIcon />
             </Avatar>
             <h2 className={Style.headerStyle}>Add-Fees</h2>
           </Grid>

           <div className="container">
             <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                   <TextField
                     variant="standard"
                     required
                     fullWidth
                     type="fees"
                     id="fees"
                     {...register("fees", {})}
                     label="fees"
                     name="fees"
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
               <Button
                 variant="contained"
                 className="mb-5"
                 type="submit"
                 onClick={handleSubmit}
               >
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

 export default AddFee;

