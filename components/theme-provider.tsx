"use client";

import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({
  children,
  system = true,
}: {
  children: React.ReactNode;
  system?: boolean;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
}
