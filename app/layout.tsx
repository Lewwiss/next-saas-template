import "./globals.css";
import ClientLayout from "@/components/client-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
