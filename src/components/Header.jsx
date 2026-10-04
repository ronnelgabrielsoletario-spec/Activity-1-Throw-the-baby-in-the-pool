function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-lg font-semibold text-white">
            ✓
          </div>

          <div>
            <h1 className="text-sm font-medium text-slate-900">
              TaskFlow
            </h1>

            <span className="text-[10px] text-slate-500">
              Student Task Manager
            </span>
          </div>
        </div>

        <div className="rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-medium text-indigo-600">
          Student
        </div>
      </div>
    </header>
  );
}

export default Header;