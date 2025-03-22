"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { Chatbot } from "@/components/Chatbot";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">ChatGPT SaaS</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  {session?.user?.name?.[0] || "U"}
                </div>
              )}
              <span className="text-gray-700">{session?.user?.name}</span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Trò chuyện với AI
            </h2>
            <Chatbot />
          </div>
        </div>
      </main>
    </div>
  );
}
