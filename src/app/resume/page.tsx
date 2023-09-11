import React from "react";

export default function Page() {
  const documentId = "16f2dupPP5MnAmiVBghkggGBmd-XZQMQ1o1m1noO8d-c";
  const format = "pdf";
  const downloadUrl = `https://docs.google.com/document/d/${documentId}/export?format=${format}`;
  const viewUrl = `https://docs.google.com/document/d/${documentId}/preview`;

  return (
    <div className="p-1">
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center m-auto flex-col font-bold bg-gray-50"
        download
      >
        <p className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Download
        </p>
      </a>
      <iframe
        src={viewUrl}
        className="w-full h-[100vh]"
        title="Embedded Word Document"
      ></iframe>
    </div>
  );
}
