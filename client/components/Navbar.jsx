import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const { route } = useRouter();
  return (
    <div className="max-w-[1200px] mx-auto space-y-5 sm:space-y-0">
      {/* Top navbar */}
      <div className="flex space-x-5 items-center justify-between">
        <h2 className="font-bold">MovieHub</h2>
        <button className="bg-custom-yellow px-4 py-2 rounded-sm text-custom-dark font-bold">
          Add Movie
        </button>
      </div>

      {/* Searching movie */}
      {route === "/" && (
        <div className="flex items-center justify-center translate-y-0 sm:translate-y-[100%]">
          <div className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-2 w-full sm:justify-center">
            <input
              className="p-3 rounded-sm outline-none text-custom-dark sm:w-[400px]"
              placeholder="Enter Keyboards"
            ></input>
            <button className="bg-custom-yellow text-custom-dark px-6 rounded-sm flex items-center justify-center p-3">
              <BsSearch />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;