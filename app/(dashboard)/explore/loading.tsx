"use client";

import LoadingSpinner from "../../components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <LoadingSpinner fullPage={true} />
    </div>
  );
}
