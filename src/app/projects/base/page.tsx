import ProjectDetails from "../[id]/page";

export default function BaseProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "base",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
