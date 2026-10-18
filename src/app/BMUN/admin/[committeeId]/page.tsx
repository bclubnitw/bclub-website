import { Suspense } from "react";
import AdminConsoleClient from "./AdminConsoleClient";

export default function AdminPage({params,}: {params: Promise<{ committeeId: string }>;}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-red-500 font-mono flex items-center justify-center">
          Loading Secretariat Terminal...
        </div>
      }
    >
      <AdminConsoleClient params={params} />
    </Suspense>
  );
}