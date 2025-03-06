import ProjectDetails from "../[id]/page";

export default function TaikoProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "taiko",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
