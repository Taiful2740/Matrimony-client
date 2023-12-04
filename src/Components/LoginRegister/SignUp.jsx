import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import useAxiosPublic from "../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };

          axiosPublic.post("/users", userInfo).then(res => {
            if (res.data.insertedId) {
              console.log("user added database");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User  created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })

        .catch(error => console.error(error));
    });
  };
  return (
    <div className="flex justify-center mt-10 ">
      <Card className="w-1/3  ">
        <h1 className="text-center text-3xl font-bold">Sign Up Now!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="your name"
              {...register("name", { required: true })}
              name="name"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
              name="email"
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="******"
              {...register("password", { required: true })}
              name="password"
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoURL" value="photoURL" />
            </div>
            <TextInput
              id="photoURL"
              type="text"
              placeholder="photoURL"
              {...register("photo", { required: true })}
              name="photo"
            />
            {errors.photo && (
              <span className="text-red-600">Photo is required</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <input
            className="bg-[#18c4cc] rounded-xl cursor-pointer py-2 text-2xl font-semibold text-white"
            type="submit"
            value="Sign Up"
          />
        </form>
        <h1 className="text-center">
          Already a member?{" "}
          <Link to="/login">
            <span className="font-semibold text-[#18c4cc]">Login Now</span>
          </Link>
        </h1>
      </Card>
    </div>
  );
};

export default SignUp;
