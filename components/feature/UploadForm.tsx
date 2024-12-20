"use client";
import { useEffect, useRef } from "react";
import { createClient } from "@/utils/browser";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import Dashboard from "@uppy/dashboard";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

export default function UploadForm() {
  const uppy = useUppyWithSupabase({ bucketName: "avatars" });

  useEffect(() => {
    uppy.current.use(Dashboard, {
      inline: true,
      target: "#drag-drop-area",
      showProgressDetails: true,
    });
  }, [uppy]);

  return <div id="drag-drop-area"></div>;
}

export const useUppyWithSupabase = ({ bucketName }: { bucketName: string }) => {
  const uppy = useRef(new Uppy());
  const supabase = createClient();

  useEffect(() => {
    const initializeUppy = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      uppy.current
        .use(Tus, {
          endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/upload/resumable`,
          retryDelays: [0, 3000, 5000, 10000, 20000],
          headers: {
            authorization: `Bearer ${session?.access_token}`,
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          },
          uploadDataDuringCreation: true,
          removeFingerprintOnSuccess: true,
          chunkSize: 6 * 1024 * 1024,
          allowedMetaFields: [
            "bucketName",
            "objectName",
            "contentType",
            "cacheControl",
          ],
          onError: (error) => console.error("Upload error:", error),
        })
        .on("file-added", (file) => {
          file.meta = {
            ...file.meta,
            bucketName,
            objectName: file.name,
            contentType: file.type,
          };
        });
    };

    initializeUppy();
  }, [bucketName, supabase]);

  return uppy;
};
