import { ScrollTop } from "primereact/scrolltop";

export default function BackTop() {
  return (
    <ScrollTop
      threshold={60}
      behavior="smooth"
      style={{
        width: "3rem",
        height: "3rem",
        background: "linear-gradient(135deg, #14128f, #413db6)",
        color: "#fff",
        border: "none",
        borderRadius: "9999px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        right: "1.5rem",
        bottom: "1.5rem",
        zIndex: 1000,
      }}
      className="hover:scale-105 transition-transform duration-300 flex items-center justify-center text-xl"
    />
  );
}