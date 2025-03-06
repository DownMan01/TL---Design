import ProjectDetails from "../[id]/page";

export default function CelestiaProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "celestia",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
