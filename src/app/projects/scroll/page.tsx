import ProjectDetails from "../[id]/page";

export default function ScrollProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "scroll",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
