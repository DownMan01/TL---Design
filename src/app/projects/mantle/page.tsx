import ProjectDetails from "../[id]/page";

export default function MantleProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "mantle",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
