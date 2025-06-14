"use client";
import { AuthContext } from "@/_context/AuthContext";
import { auth } from "@/configs/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function Provider({ children }) {
  const [user, setuser] = useState();
  const createNewUser = useMutation(api.users.CreateNewUser)
  // const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setuser(user);
      console.log(user.email)
      if(user){
        const result  = await createNewUser({
          name: user?.displayName,
          email :user?.email,
          pictureURL: user?.photoURL  
        })
        console.log(result)
        setuser(result)
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    </div>
  );
}
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
export default Provider;
