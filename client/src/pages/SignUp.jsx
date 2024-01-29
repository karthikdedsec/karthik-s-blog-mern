import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
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
            This is a Blog page for developers. You can signUp with your email
            and password or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="text" placeholder="name@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="greenToBlue" type="submit" outline>
              Sign Up
            </Button>
          </form>
          <div className="flex text-sm gap-2 mt-3">
            <span>Have an Account?</span>
            <Link className="text-blue-500 hover:text-blue-800" to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
