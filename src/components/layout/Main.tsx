interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="font-sans flex flex-1">
      <div className="w-full">
        {children}
      </div>
    </main>
  );
};

export default Main;
