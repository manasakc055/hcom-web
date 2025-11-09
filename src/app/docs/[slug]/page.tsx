import { DocRenderer } from "../../components/DocRenderer";
import DocsLayout from "../../components/DocsLayout";

interface Props {
  params: { slug: string };
}

export default async function DocsPage({ params }: Props) {
  const { slug } = params;

  try {
    // Correct import path (relative to src/app/docs/[slug]/)
    const docData = await import(`../../../data/docs/${slug}.json`).then(
      (m) => m.default
    );

    return (
      <DocsLayout active={slug} docData={docData}>
        <DocRenderer blocks={docData.blocks} />
      </DocsLayout>
    );
  } catch (error) {
    console.error("Error loading documentation:", error);
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Documentation not found.
      </div>
    );
  }
}
