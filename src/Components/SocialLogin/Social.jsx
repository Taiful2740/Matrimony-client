// import React from "react";

// // import { useNavigate } from 'react-router-dom';
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import UseAxiosPublic from "../Hooks/UseAxiosPublic";

// const Social = () => {
//   const { signInWithGoogle } = React.useContext(AuthContext);
//   const axiosPublic = UseAxiosPublic();
//   const navigate = useNavigate();

//   const handleGoogle = () => {
//     signInWithGoogle()
//       .then(result => {
//         const users = result.user;
//         console.log(result.user);

//         const userData = {
//           Name: users?.displayName,
//           Email: users?.email,
//           Role: "user",
//         };
//         console.log(userData);

//         axiosPublic.post("/users", userData).then(res => {
//           console.log(res.data);
//           if (res.data) {
//             swal("Good job!", "You are sign in with google!", "success");

//             navigate("/");
//           } else {
//             swal(
//               "Good job!",
//               "You are sign in with google & Data Base!",
//               "success"
//             );

//             navigate("/");
//           }

//           console.log(res.data);
//         });
//       })
//       .catch(error => {
//         console.log(error.massage);
//         if (error.massage) {
//           swal("Error!", `{${error.massage}}`, "error");
//         }
//       });
//   };

//   return (
//     <div>
//       <button
//         onClick={handleGoogle}
//         className="flex items-center justify-center text-center btn bg-[#18c4cc] p-3 rounded-xl font-semibold text-white "
//       >
//         <FaGoogle className="text-xl mr-3"></FaGoogle>
//         Login With Google
//       </button>
//     </div>
//   );
// };

// export default Social;
