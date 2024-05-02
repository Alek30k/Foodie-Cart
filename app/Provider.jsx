import { Toaster } from "@/components/ui/sonner";
import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <div className="px-10 md:px-20 relative">
      <Header />
      <Toaster />
      {children}
    </div>
  );
};

export default Provider;
