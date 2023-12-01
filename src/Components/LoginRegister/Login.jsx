import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal("Good job!", "Login Successfully!", "success");
        if (result.user) {
          navigate(location?.state ? location?.state : "/");
        }
        e.target.reset();
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message);
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then(result => {
        navigate(location?.state ? location?.state : "/");
        console.log(result.user);
        Swal("Good job!", "Login Successfully!", "success");
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="flex justify-center mt-10 ">
      <Card className="w-1/3">
        <h1 className="text-center text-3xl font-bold">Login Now!</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="name@example.com"
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
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <input
            className="bg-[#18c4cc] rounded-xl cursor-pointer py-2 text-2xl font-semibold text-white"
            type="submit"
            value="Login"
          />
        </form>
        <h1 className="text-center">
          New to Bondhon?{" "}
          <Link to="/signup">
            <span className="font-semibold text-[#18c4cc]">Register Now</span>
          </Link>
        </h1>
        <p className="text-lg text-center font-bold">or</p>
        <p className="flex items-center justify-center text-center mb-6">
          <button
            onClick={handleGoogle}
            className="flex items-center justify-center text-center btn bg-[#18c4cc] p-3 rounded-xl font-semibold text-white "
          >
            <FaGoogle className="text-xl mr-3"></FaGoogle>
            Login With Google
          </button>
        </p>
      </Card>
    </div>
  );
};

export default Login;
