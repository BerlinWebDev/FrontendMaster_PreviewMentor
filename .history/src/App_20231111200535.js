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
            <div className="p-14">
              <div className="text-[30px] text-white font-bold">
                Get <span className="text-[#aa5cdb]">insights</span> that help
                <br />
                your business grow
              </div>
              <div className="mt-5">
                <p className="text-white font-light">
                  Discover the benefits of data analytics and make better
                  decisions regarding revenue, customer experiences, and overall
                  efficiency.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="text-white">
                  <div className="text-[25px] font-bold">10k+</div>
                  <div className="uppercase text-[11px] font-light">
                    Companies
                  </div>
                </div>
                <div className="text-white">
                  <div className="text-[25px] font-bold">314</div>
                  <div className="uppercase text-[11px] font-light">
                    Templates
                  </div>
                </div>
                <div className="text-white font-bold">
                  <div className="text-[25px] font-bold">12M+</div>
                  <div className="uppercase text-[11px] font-light">
                    Queries
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className="w-1/2  rounded-lg relative">
            <div className="absolute inset-0 bg-[#aa5cdb] opacity-60"></div>
            <img
              className=" h-full w-full rounded-r-lg"
              src={Image}
              alt="Header-Desktop"
            />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
