import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      style={{
        position: "fixed",
        right: 20,
        bottom: 24,
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "none",
        backgroundColor: "rgba(94, 97, 97, 0.4)",
        color: "#fff",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 18px rgba(0, 240, 255, 0.2)",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <span style={{ fontSize: 20, lineHeight: 1 }}>↑</span>
    </button>
  );
};

export default BackToTop;
