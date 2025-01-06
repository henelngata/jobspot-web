import PostNav from "@/components/PostNav";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <PostNav />
      {children}
    </main>
  );
}
