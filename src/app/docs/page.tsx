import DocsLayout from "../components/DocsLayout";
import { DocRenderer } from "../components/DocRenderer";

export default function DocsIndex() {
  const overviewData = {
    id: "overview",
    title: "HCOM Documentation",
    description: "Your guide to the HCOM Platform APIs and architecture.",
    blocks: [
      {
        type: "paragraph",
        content:
          "Welcome to the HCOM developer documentation. Here you'll find detailed information about APIs, integrations, and workflows that power your HCOM-based storefronts.",
      },
      {
        type: "heading",
        level: 3,
        content: "Available Modules",
      },
      {
        type: "list",
        ordered: false,
        items: ["Products API", "Orders API", "Payments API", "Inventory API"],
      },
      {
        type: "paragraph",
        content:
          "Select a section from the sidebar to explore endpoints, parameters, and examples.",
      },
    ],
  };

  return (
    <DocsLayout active="overview" docData={overviewData}>
      <DocRenderer blocks={overviewData.blocks} />
    </DocsLayout>
  );
}
