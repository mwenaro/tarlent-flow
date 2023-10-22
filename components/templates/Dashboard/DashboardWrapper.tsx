interface WrapperProps {
  children: React.ReactNode[];
  className?: string;
}

export default function DashboardWrapper({
  className,
  children,
}: WrapperProps) {
  const [Sidebar, Main] = children;

  return (
    <div
      className={`w-full flex outline outline-[1px] outline-slate-600 gap-4 ${
        className ? className : 'bg-slate-200'
      }`}
    >
      {/* Sidebar */}
      <aside className="min-w-fit sm:w-[200px] relative">{Sidebar}</aside>

      {/* main content */}
      <div className="flex-1 flex flex-col gap-4 min-h-fit h-screen">
        {Main}
      </div>
    </div>
  );
}
