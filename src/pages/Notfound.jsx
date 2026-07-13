import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "70px", margin: 0 }}>404</h1>

      <h2>Page Not Found</h2>

      <p>The page you are looking for does not exist.</p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;