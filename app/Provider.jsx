import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};

export default Provider;
