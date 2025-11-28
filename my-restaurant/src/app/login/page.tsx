import React from "react";
import Image from "next/image"
import Link from "next/link";

const Login = () => {
  return <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
    {/*box*/}
    <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row lg:w-[60%] 2xl:w-[50%] md:h-[70%] md:w-full">
     <div className="relative h-1/3 w-full md:h-full md:w-1/2">
      <Image src="/loginBg.png" alt="loginnkar" fill className="object-cover"/>
     </div>
      {/* text container*/}
    <div className="p-10 flex flex-col gap-4 justify-center md:h-full md:w-1/2">
      <h1 className="font-bold text-xl xl:text-3xl">Welcome </h1>
      <p> Login into your account or create a new one using your social buttons </p>
      <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
        <Image src="/google.png" alt="Google" width={20} height={20}  className="object-contain"/>
        <span>Sign In with Google </span>
        </button>
        <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
        <Image src="/facebook.png" alt="fb" width={20} height={20}  className="object-contain"/>
        <span>Sign In with Facebook </span>
        </button>
        <p className="text-sm"> Have a problem?</p>
       <Link href="/" className="underline"> Contact Us</Link>
      </div>
      </div>
   
  </div>;
};

export default Login;
