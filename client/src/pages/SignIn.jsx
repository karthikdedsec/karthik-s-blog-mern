import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value.trim(),
    }));
  };
  //submit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setError("Please fill out all the fields");
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen mt-20 flex flex-col">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-tr from-emerald-300  to-green-800 rounded-md text-white">
              Karthik's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a Blog page for developers. You can signIn with your email
            and password or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div>
              <Label value="Email" />
              <TextInput
                onChange={handleChange}
                type="email"
                placeholder="name@gmail.com"
                id="email"
                value={formData.email}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                onChange={handleChange}
                type="password"
                placeholder="********"
                id="password"
                value={formData.password}
              />
            </div>
            <Button
              disabled={loading}
              gradientDuoTone="greenToBlue"
              type="submit"
              outline
            >
              {loading ? <Spinner size="sm" /> : "Sign In"}
            </Button>
          </form>

          <div className="flex text-sm gap-2 mt-3">
            <span>Don't Have an Account?</span>
            <Link className="text-blue-500 hover:text-blue-800" to="/sign-up">
              Sign up
            </Link>
          </div>
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
export default SignIn;
