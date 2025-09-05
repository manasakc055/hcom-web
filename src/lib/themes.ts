// patch inside loadPage (top of the function)
export async function loadPage(storeId: string, path: string, preview: boolean) {
  if (preview) {
    // Use absolute URL in dev if needed, else relative
    const res = await fetch(
      `/api/builder/draft?storeId=${encodeURIComponent(storeId)}&path=${encodeURIComponent(path)}`,
      { cache: "no-store" }
    );
    if (res.ok) return res.json();
  }
  // ... your normal Spring call follows
}
