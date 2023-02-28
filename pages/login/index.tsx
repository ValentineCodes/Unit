import React, { useState } from "react";
import Link from "next/link";
import PageLayout from "../../components/layouts/PageLayout";

type Props = {};

type Passport = {
  url: string;
  file: any;
};

export default function Login({}: Props) {
  const [rememberme, setRememberme] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleRememberMe = () => setRememberme((current) => !current);

  return (
    <PageLayout title="Create an account">
      <form
        className="w-full max-w-lg mx-auto py-12 px-4 mb-6 border border-1 border-gray-300 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[1.5rem] sm:text-[2rem] text-[#D3542D] text-center font-bold mb-10">
          Login
        </h1>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-reg"
            >
              Registration Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-reg"
              type="number"
              required
              min={10}
              max={10}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mb-6 block min-h-[1.5rem]">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberme}
              onClick={toggleRememberMe}
            />
            <label
              className="inline-block pl-[0.35rem] hover:cursor-pointer"
              htmlFor="remember-me"
            >
              Remember me
            </label>
          </div>

          <Link href="/" className="text-md text-[#14497A] hover:underline">
            Forgot Password
          </Link>
        </div>

        <button type="submit" className="btn-primary w-full">
          <span className="text-lg">Login</span>
        </button>
      </form>
    </PageLayout>
  );
}
