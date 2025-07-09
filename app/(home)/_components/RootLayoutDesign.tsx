const RootLayoutDesign = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-no-repeat  bg-top bg-[url('/gradient-background-top.webp')] pt-[5.5rem] min-h-[110vh] flex justify-center">
      <div className="w-full md:max-w-[50rem] md:min-w-[44rem] ">
        {children}
      </div>
    </div>
  );
};

export default RootLayoutDesign;
