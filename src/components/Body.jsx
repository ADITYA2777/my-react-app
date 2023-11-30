import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser, userRemover } from "../utils/userSlices";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";


const Body = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
     element:<Login/>
    },
    {
      path: "/browse",
      element:<Browse />,
    },
  ]); 

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
     if (user) {
       const { uid,email,displayName,photoURL} = user;
       dispatch(
         addUser({
           uid:uid,
           email:email,
           displayName:displayName,
           photoURL:photoURL,
         })
       );
       
       
     } else {
       // User is signed out
       dispatch(userRemover())
     }
   });
 },[]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
