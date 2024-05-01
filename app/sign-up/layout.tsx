export const metadata = {
  title: "Auth | Kings Watch Zim",
  description: "Create an account with Kings Watch Zim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
