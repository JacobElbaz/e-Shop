import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../actions/user.action";

const UpdateProfil = () => {
  const [name, setName] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateName(userData._id, name));
    window.location.reload();
    setUpdateForm(false);
  };

  return (
    <div className="container">
      <h1> {userData.username}'s Profile</h1>
      <div className="container">
          <div className="bio-update">
            <h3>Name</h3>
            {updateForm === false && (
              <>
                <p className="border rounded w-25" onClick={() => setUpdateForm(!updateForm)}>{userData.username}</p>
                <button className="btn btn-secondary" onClick={() => setUpdateForm(!updateForm)}>
                  Update username
                </button>
              </>
            )}
            {updateForm && (
              <div >
                <textarea
                  type="text"
                  defaultValue={userData.username}
                  onChange={(e) => setName(e.target.value)}
                ></textarea>
                <br />
                <button className="btn btn-success" onClick={handleUpdate}>Validate</button>
              </div>
            )}
          </div>
          <h4>Member from : {new Date(userData.createdAt).toISOString().split('T')[0]}</h4>
        </div>
      </div>
      
  );
};

export default UpdateProfil;