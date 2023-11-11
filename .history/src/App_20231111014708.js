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
        <div className="flex h-96 w-[1000px] rounded-lg bg-white">
          <aside className="w-1/2 bg-red-300 rounded-l-lg">Hello</aside>
          <div className="w-1/2 bg-red-200 rounded-l-lg">
            <img className="object-contain" src={Image} alt="Header-Desktop" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
