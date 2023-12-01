import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log(name, email, password);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be least 6 characters!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Should be uppercase & special characters!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then(result => {
        if (result.user) {
          swal("Good job!", "User Created Successfully!", "success");
          profileUpdate({ displayName: name, photoURL: photo });
        }
        e.target.reset("");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center mt-10 ">
      <Card className="w-1/3  ">
        <h1 className="text-center text-3xl font-bold">Sign Up Now!</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="your name"
              name="name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@example.com"
              name="email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="******"
              name="password"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoURL" value="photoURL" />
            </div>
            <TextInput
              id="photoURL"
              type="text"
              placeholder="photoURL"
              name="photo"
              required
            />
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
