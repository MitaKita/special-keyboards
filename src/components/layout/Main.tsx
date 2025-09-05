interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="font-sans flex flex-1 overflow-y-auto">
      <div className="flex flex-col items-center w-full px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default Main;
