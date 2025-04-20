import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function BasicDemo() {
  const navigate = useNavigate(); // to navigate programmatically

  const items = [
    {
      label: "Hyrje",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Rreth Nesh",
      icon: "pi pi-info-circle",
      command: () => navigate("/rreth-nesh"),
    },
    {
      label: "Shërbimet",
      icon: "pi pi-cogs",
      command: () => navigate("/sherbimet"),
    },
    {
      label: "Produktet",
      icon: "pi pi-box",
      command: () => navigate("/produkte"),
    },
    {
      label: "Na Kontakto",
      icon: "pi pi-phone",
      command: () => navigate("/kontakt"),
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
}