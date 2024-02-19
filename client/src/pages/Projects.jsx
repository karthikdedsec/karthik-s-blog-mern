import CallToAction from "../components/CallToAction";

function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex flex-col gap-6 justify-center items-center p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Checkout my portfolio to see my personal projects
      </p>
      <CallToAction />
    </div>
  );
}
export default Projects;
