export default function Footer() {
  return (
    <div className="bg-[#292560]">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <h1 className="text-xl text-white font-semibold">ELECTROMART</h1>

        <form>
          <input type="email" placeholder="johndoe@gmail.com" className="py-0.5 px-3 rounded-md bg-gray-300 me-2" />
          <button className="border rounded-md py-0.5 px-2 bg-rose-500 border-rose-500 font-semibold text-white">Subscribe</button>
        </form>
      </div>
    </div>
  );
}