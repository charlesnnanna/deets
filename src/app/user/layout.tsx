import Sidebar from '@/components/sidebar';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
