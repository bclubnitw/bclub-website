import { Suspense } from "react";
import DelegateRoomClient from "./DelegateRoomClient";

export default function DelegateRoomPage({
  params,
}: {
  params: Promise<{ committeeId: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono uppercase tracking-widest animate-pulse">
          Connecting to Secure Frequency...
        </div>
      }
    >
      <DelegateRoomClient params={params} />
    </Suspense>
  );
}