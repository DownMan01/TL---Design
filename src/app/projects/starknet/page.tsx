import ProjectDetails from "../[id]/page";

export default function StarknetProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "starknet",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
