const Process = () => {
  return (
    <div className="w-200 mx-auto">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
        Process
      </h1>
      <div className="flex w-full mx-auto mt-20 flex-col items-center">
        <div className="self-start bg-primary-yellow flex items-center justify-center w-50 h-30 p-5 mt-8 rounded-lg font-bold">
          1 • Snap & Send
        </div>
        <div className="self-end bg-primary-yellow flex items-center justify-center w-50 h-30 p-5 mt-8 rounded-lg font-bold">
          2 • Get a Quote
        </div>
        <div className="self-start bg-primary-yellow flex items-center justify-center w-50 h-30 p-5 mt-8 rounded-lg font-bold">
          3 • We haul it
        </div>
      </div>
    </div>
  );
};

export default Process;
