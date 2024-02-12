import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col px-4">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
      </div>
    );
  }

  //we do so because like we have the components in which navbar and footer is common so don't write them again and again in all page we do this  