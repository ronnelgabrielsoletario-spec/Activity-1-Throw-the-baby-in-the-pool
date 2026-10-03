function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">✓</div>

          <div>
            <h1>TaskFlow</h1>
            <span>Student Task Manager</span>
          </div>
        </div>

        <div className="student-badge">
          Student
        </div>
      </div>
    </header>
  );
}

export default Header;