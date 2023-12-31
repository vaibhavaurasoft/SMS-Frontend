import React, { useEffect, useState } from 'react'
import { callApi } from '../../../utils/apicall';
import { useRouter } from "next/router";
import Router from 'next/router';

const UserProfile = () => {

  const router = useRouter();

  const [userProfile, setUserProfile] = useState([]);

  const StudentDetails = async () => {
    try {
      const {data} = await callApi("get", "/me");
      setUserProfile(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const updatemyprofile = (id)=>{
    Router.push(`/common-form/updatemyprofile?id=${userProfile._id}`);
  }
  
  useEffect(() => {
    StudentDetails();
  }, []);
  return (
    <>
      <h2 className="text-center">Welcome {userProfile.name} </h2>
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
                  <h5 className="my-3">{userProfile.name}</h5>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Update-Photo
                    </button>
                    <button
                      type="button"
                      onClick={() => updatemyprofile()}
                      className="btn btn-primary"
                    >
                      Update-profile
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
                      <p className="text-muted mb-0">{userProfile.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userProfile.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Role</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userProfile.role}</p>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
