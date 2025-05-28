import { useState } from "react";
import { useNavigate } from "react-router";

type LoginValues = {
  username: string;
  password: string;
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const validLogin = ({ username, password }: LoginValues): boolean => {
    return username === "foo" && password === "bar";
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (validLogin({ username, password })) {
      navigate("/dashboard");
      return;
    }

    setShowError(!showError);
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="max-w-sm m-auto mt-40 grid grid-cols-1 gap-2 border-1 border-gray-800 p-6 rounded-lg dark:bg-gray-900"
      >
        <h1 className="m-auto mb-7 text-2xl">Log in to Postqi</h1>
        <div className="grid grid-cols-1 relative">
          <label htmlFor="username" className="text-slate-400 mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="FooBar"
            onChange={(e) => setUsername(e.target.value)}
            className="px-2 py-1 border-1 border-gray-800 focus:outline focus:outline-sky-500 rounded-md dark:bg-gray-950 placeholder:text-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 mt-3 relative">
          <label htmlFor="password" className="text-slate-400">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="123456"
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 border-1 border-gray-800 focus:outline focus:outline-sky-500 rounded-md dark:bg-gray-950 placeholder:text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 mt-4 rounded-md bg-sky-500 hover:bg-sky-600 hover:cursor-pointer"
        >
          Login
        </button>
      </form>
      {showError && (
        <div className="max-w-sm m-auto mt-4 p-2.5 text-center bg-rose-500 text-white rounded-md flex justify-center">
          <span className="material-symbols-outlined inline-flex mr-2">
            error
          </span>
          <p>Invalid login</p>
        </div>
      )}
    </div>
  );
}
