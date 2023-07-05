export default function Banner() {
  return (
    <div className="flex flex-col justify-between space-y-4 px-8 py-4 md:py-8 lg:flex-row lg:space-x-8 lg:space-y-0">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
          The NetNerds Blog
        </h1>
        <h2 className="font-semibold text-slate-600">
          Welcome to{" "}
          <span className="underline decoration-sky-500 decoration-4">
            Your Favorite Blog
          </span>{" "}
          in the Devosphere
        </h2>
      </div>

      <p className="max-w-sm text-sm font-semibold text-slate-400">
        New product features &bull; The latest in technology &bull; The weekly
        debugging nightmares & More!
      </p>
    </div>
  );
}
