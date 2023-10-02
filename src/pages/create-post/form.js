import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase.ts";
import { useAuthState } from "react-firebase-hooks/auth";
import "./form.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
export const CreateForm = () => {
    const navigate = useNavigate()
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const postrefs = collection(db, "posts");
  const oncreatepost = async (data) => {
    addDoc(postrefs, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      id: user?.uid,
    });
    navigate('/')
  };

  return (
    <div className="form-container">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit(oncreatepost)}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Title..."
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Description..."
            {...register("description")}
          />
          <p>{errors.description?.message}</p>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
