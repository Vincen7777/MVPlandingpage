"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackText: string;
  className?: string;
};

export default function AvatarWithFallback({
  src,
  alt,
  width,
  height,
  fallbackText,
  className,
}: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Tampilkan fallback inisial jika gambar gagal dimuat
    return (
      <div
        className={`w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200 ${className ?? ""}`}
      >
        <span className="text-indigo-600 text-sm font-semibold">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border border-indigo-200 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        onError={() => setHasError(true)} // ✅ client component boleh pakai event handler
      />
    </div>
  );
}
