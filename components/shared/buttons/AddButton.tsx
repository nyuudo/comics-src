"use client";

import insertCollection from "@/lib/insertCollection";

export default function AddButton({ productId }: { productId: number }) {
  const handleAddToCollection = async () => {
    const collectionId = "exampleCollectionId"; // Replace with actual collectionId
    const fanCollector = "exampleFanCollector"; // Replace with actual fan_collector
    const collectedProduct = productId;

    const result = await insertCollection(
      collectionId,
      fanCollector,
      collectedProduct,
    );

    if (result) {
      console.log("Data inserted successfully:", result);
    } else {
      console.error("Failed to insert data.");
    }
  };

  return (
    <button
      onClick={handleAddToCollection}
      className="bg-csrcblue text-csrclight hover:bg-csrcdark disabled:bg-csrcdark/50 flex min-w-52 items-center justify-center gap-x-2 rounded-sm py-2 font-bold tracking-wider transition delay-150 duration-300 hover:delay-150"
    >
      <span>ADD TO COLLECTION</span>
    </button>
  );
}
