export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="flex p-4 text-yellow-300 bg-black w-screen flex-row justify-between">
        <div>Logo</div>
        <div className="flex w-1/4 flex-row justify-around">
          <div>Home</div>
          <div>About</div>
          <div>Login</div>
        </div>
      </nav>
      <div className="bg-black text-yellow-500 text-4xl p-4 rounded">
        Scheduling Wizard
      </div>
    </main>
  );
}
