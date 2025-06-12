import { useState } from "react";
import { useNavigate } from "react-router";

type LoginValues = {
  username: string;
  password: string;
};

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validLogin = ({ username, password }: LoginValues): boolean => {
    return username === "foo" && password === "bar";
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (validLogin({ username, password })) {
      onLogin();
      navigate("/dashboard");
      return;
    }

    setShowError(!showError);
  };

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="max-w-sm m-auto mt-40 grid grid-cols-1 gap-2 border border-slate-800 p-6 rounded-lg dark:bg-gray-900"
      >
        <h1 className="m-auto mb-7 text-2xl">Log in to Postqi</h1>
        <div className="grid grid-cols-1 relative">
          <label htmlFor="username" className="text-slate-400 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="FooBar"
            aria-describedby={showError ? "login-error" : undefined}
            onChange={(e) => setUsername(e.target.value)}
            className="px-2 py-1 focus:outline focus:outline-sky-500 dark:bg-gray-950 placeholder:text-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 mt-3 relative">
          <div className="flex justify-start mb-1">
            <label htmlFor="password" className="text-slate-400">
              Password
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="hover:text-white h-6 px-2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <i className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </i>
            </button>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="123456"
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 focus:outline focus:outline-sky-500 dark:bg-gray-950 placeholder:text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 mt-4 rounded-md bg-sky-500 hover:bg-sky-600"
        >
          Login
        </button>
      </form>
      {showError && (
        <div
          id="login-error"
          role="alert"
          className="max-w-sm m-auto mt-4 p-2.5 text-center bg-rose-500 text-white rounded-md flex justify-center"
        >
          <span className="material-symbols-outlined inline-flex mr-2">
            error
          </span>
          <p>Invalid login</p>
        </div>
      )}
    </div>
  );
}
