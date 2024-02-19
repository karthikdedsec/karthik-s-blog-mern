import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Ready to take your skills to the next level?
        </h2>
        <p className="text-gray-500 my-2">checkout our website</p>
        <Button
          className="rounded-tl-xl rounded-bl-none rounded-tr-none"
          gradientDuoTone="greenToBlue"
        >
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://my-portfolio-website-peach.vercel.app/"
          >
            Visit
          </Link>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://cdn.sanity.io/images/tlr8oxjg/production/222b99d8aec30b1277f7b760c66bba9e707cd81a-1456x816.png?w=3840&q=80&fit=clip&auto=format"
          alt="image"
        />
      </div>
    </div>
  );
}
export default CallToAction;
