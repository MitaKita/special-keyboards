interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="font-sans grid grid-rows-[48px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="w-full p-20">
        {children}
      </div>
    </main>
  );
};

export default Main;
