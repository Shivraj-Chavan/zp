import React from "react";

export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Gram Panchayat Login</h2>

        <button style={styles.btnAdmin}>
          Admin Login
        </button>

        <button style={styles.btnUser}>
          User Login
        </button>

        <div style={styles.divider}>OR</div>

        <button style={styles.googleBtn}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0fdf4",
  },
  card: {
    background: "white",
    padding: "30px",
    width: "320px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#166534",
  },
  btnAdmin: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    background: "#166534",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  btnUser: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    background: "#22c55e",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  divider: {
    margin: "10px 0",
    color: "#666",
  },
  googleBtn: {
    width: "100%",
    padding: "10px",
    background: "#db4437",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
