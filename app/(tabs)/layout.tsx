
import Nav from "@/components/Nav";

export default function TabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Nav />
    </main>
  );
}
