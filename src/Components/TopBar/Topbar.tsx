const Topbar = () => {
  return (
    <div className="w-100 bg-white shadow d-flex align-items-center justify-content-between px-3" style={{ height: '64px' }}>
      <h1 className="h5 fw-semibold text-dark mb-0">Admin Dashboard</h1>

      <div className="d-flex align-items-center gap-3">
        
        <span className="text-muted mb-0">Welcome, Admin</span>
        <img
          alt="user"
          className="rounded-circle"
          src="https://via.placeholder.com/32" // ✅ replace with real avatar if available
          width="32"
          height="32"
        />
      </div>
    </div>
  );
};

export default Topbar;
