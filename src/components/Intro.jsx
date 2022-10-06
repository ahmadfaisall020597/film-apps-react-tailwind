export default function () {
  return (
    <div className="h-[250px] flex justify-end items-end">
      <div className="container mx-auto text-white text-center flex justify-center items-center">
        <div className="grid-rows-none">
          <div className="grid-cols-none">
            <h1 className="text-4xl font-bold hover:font-bold leading-none tracking-widest">
              NONTON BOLEH
            </h1>
            <h1 className="text-4xl font-bold hover:font-bold leading-none tracking-widest">
              PACARAN JANGAN !
            </h1>
            <div className="mt-4 flex justify-center">
              <button className="bg-black/50 hover:bg-black text-white font-bold py-2 px-4 rounded">
                Lihat Semua List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
