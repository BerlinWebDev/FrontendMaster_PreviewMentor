import Image from "./assets/image-header-desktop.jpg";

function App() {
  return (
    <>
      <header>
        <title>Challenge</title>
        <meta name="description" content="Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <div className="flex h-96 w-[1000px] rounded-lg bg-[#1b1938]">
          <aside className="w-1/2  rounded-l-lg">
          <div className="">
            <div className="text-[15px]">
              Get <span className="text-[#aa5cdb]">insights</span> that help
              your business grow
            </div>
          </aside>
          <aside className="w-1/2  rounded-lg relative">
            <div className="absolute inset-0 bg-[#aa5cdb] opacity-60"></div>
            <img
              className=" h-full w-full rounded-r-lg"
              src={Image}
              alt="Header-Desktop"
            />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
