import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export const metadata = {
  title: "Sevaliya Urban Cooperative Bank Ltd.",
  description: "DevInfotech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <TopBar/>
      <Header/>
        {children}
      </body>
    </html>
  );
}
