import ProjectDetails from "../[id]/page";

export default function LineaProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "linea",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
