import "./../globals.css";

export const metadata = {
  title: "Dashboard admin",
  description: "formasi uniba",
  icons: {
    icon: ["/favicon.ico?v-4"],
    apple: ["/apple-touch-icon.png?v-4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function DashboarLayout({ children }) {
  return <main>{children}</main>;
}
