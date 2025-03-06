import ProjectDetails from "../[id]/page";

export default function SuiProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "sui",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
