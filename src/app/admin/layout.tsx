
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div
          className={` antialiased bg-stone-200`}
        >
            <div>SIDEBAR</div>
          {children}
        </div>
    );
  }
  