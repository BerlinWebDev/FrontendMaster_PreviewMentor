import Statisic from "./Statisic";
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
        <div className="flex h-[4205x] w-[1000px] rounded-lg bg-[#1b1938]">
          <aside className="w-1/2  rounded-l-lg">
            <div className="p-14">
              <div className="text-[35px] text-white font-bold font-lexenddeca">
                Get <span className="text-[#aa5cdb]">insights</span> that help
                <br />
                your business grow.
              </div>
              <div className="mt-5">
                <p className="text-[#ffffffbf] font-Inter text-[15px]">
                  Discover the benefits of data analytics and make better
                  decisions regarding revenue, customer experiences, and overall
                  efficiency.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                <Statisic value="10k+" title="companies" />
                <Statisic value="314" title="Templates" />
                <Statisic value="12M+" title="Queries" />
              </div>
            </div>
          </aside>
          <aside className="w-1/2  rounded-lg relative">
            <div className="absolute inset-0 bg-[#aa5cdb] rounded-lg opacity-60"></div>
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
