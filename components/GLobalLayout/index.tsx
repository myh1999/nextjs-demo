"use client";

import { Link } from "@heroui/link";
import { SessionProvider } from "next-auth/react";

import { Header } from "@/components/Header";

export default function GLobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="relative flex flex-col h-screen">
        <Header />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://heroui.com?utm_source=next-app-template"
            title="heroui.com homepage"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">HeroUI</p>
          </Link>
        </footer>
      </div>
    </SessionProvider>
  );
}
