import ProjectDetails from "../[id]/page";

export default function ZkSyncProject() {
  // Mock params to simulate a project ID
  const mockParams = {
    params: {
      id: "zksync",
    },
  };

  return <ProjectDetails {...mockParams} />;
}
