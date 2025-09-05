"use client";
import { useState } from "react";

export default function ImageInput({
  label,
  value,
  onChange,
}: { label: string; value?: string; onChange: (v: string) => void }) {
  const [url, setUrl] = useState(value ?? "");

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex gap-2 items-center">
        <input
          className="mt-0 w-full border rounded px-2 py-1 text-sm"
          placeholder="https://…/banner.jpg"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onBlur={() => onChange(url)}
        />
      </div>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt=""
          className="w-full h-28 object-cover rounded border"
          onError={() => {/* ignore preview errors */}}
        />
      ) : (
        <div className="w-full h-28 rounded border border-dashed grid place-items-center text-xs text-gray-400">
          No image URL
        </div>
      )}
      {/* later: replace with a real uploader using your /assets/presign endpoint */}
    </div>
  );
}
