import AuthForm from "@/components/feature/AuthForm";
export default function LogIn() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">LogIn</h1>
        <p className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          tempore obcaecati, sit dolore non, maiores distinctio unde eligendi
          eaque libero corporis alias placeat sunt rem! Itaque ducimus enim ex
          exercitationem?.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}

/* "use client";

import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <main className="text-center bg-slate-200 gap-4 p-4 h-[520px]">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="yellowkid@comics-src.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input type="password" name="password" placeholder="your-password" />
        <br />
        <button>SEND</button>
        <br />
        <a href="#">Forgot your password?</a>
        <p className="text-xs">
          Don’t have an account? Sign up as a fan, an author or a publisher.
        </p>
      </form>
    </main>
  );
};

export default LogIn;
 */
