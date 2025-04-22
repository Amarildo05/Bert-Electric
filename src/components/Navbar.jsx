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
      icon: "pi pi-users",
      command: () => navigate("/rreth-nesh"),
    },
    {
      label: "Shërbimet",
      icon: "pi pi-briefcase",
      command: () => navigate("/sherbimet"),
    },
    {
      label: "Produktet",
      icon: "pi pi-shopping-bag",
      command: () => navigate("/produktet"),
    },
    {
      label: "Na Kontakto",
      icon: "pi pi-phone",
      command: () => navigate("/kontakt"),
    },
  ];

  return (
    <div className="card">
      <Menubar
        model={items}
        start={
          <img
            src="/BertElectric-Logo.png"
            alt="Bert Electric Logo"
            className="w-14 h-14 rounded-full ml-6"
          />
        }
        className="justify-around gap-96"
      />
    </div>
  );
}