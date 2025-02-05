
import Nav from "@/components/Nav";

export default function TabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <main className="border-2 border-red-400 ">
      {children}
    </main>
    <Nav />
    </>
   
  );
}
