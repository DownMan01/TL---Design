import ProjectDetails from "../[id]/page";

export default function ArbitrumProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "arbitrum",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
