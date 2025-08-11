"use client";
import { createClient } from "@/utils/browser";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import Image from "next/image";

const supabase = createClient();

export default function UploadAvatar({
  profileImageUrl,
  onUpload,
}: {
  profileImageUrl: string;
  onUpload?: (url: string) => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (selectedFile) {
      const filename = nanoid();
      const ext = selectedFile.name.split(".").pop();
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`${filename}.${ext}`, selectedFile);

      if (error) {
        console.error("Error uploading file:", error.message);
      } else {
        const { data: file } = await supabase.storage
          .from("avatars")
          .getPublicUrl(data?.path);
        setUploaded(file?.publicUrl);
        if (onUpload && file?.publicUrl) onUpload(file.publicUrl);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={inputRef}
        accept="image/png, image/jpeg, image/webp"
        onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
        className="mb-2"
      />
      <Image
        id="profileImage"
        src={uploaded || profileImageUrl}
        width={50}
        height={50}
        alt="Fan Profile Image"
      />
      <button
        className="border-csrclight/75 text-csrclight/75 hover:bg-csrclight/75 hover:text-csrcdark flex items-center justify-center gap-x-2 rounded-sm border px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:border-transparent hover:delay-150"
        type="button"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}
