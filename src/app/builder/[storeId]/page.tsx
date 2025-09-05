// src/app/builder/[storeId]/page.tsx
import BuilderClient from "./BuilderClient";

export default function BuilderPage({ params }: { params: { storeId: string } }) {
  return <BuilderClient storeId={params.storeId} />;
}
