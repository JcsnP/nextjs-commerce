import Image from "next/image";

export default function CartItem() {
  return (
    <div className="w-full py-2 flex items-center justify-between mb-4">
      {/* thumbnail */}
      <div className="flex gap-x-2 items-center">
        <div className="relative w-20 h-20">
          <Image
            src="https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2020-11/800px-rnlaf_ah-64_apache_at_the_oirschotse_heide_low_flying_area_36570605232.jpg?itok=aQpTwgau"
            fill={true}
            alt="thumbnail"
            className="object-cover border rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-lg text-blue-500 font-semibold">Boeing AH-64 Apache</h1>
          <span className="text-gray-400">DEFEND-SYSTEMS</span>
        </div>
      </div>

      {/* quantity */}
      <div>
        <span className="p-2 border-2 rounded-lg bg-gray-50">2</span>
      </div>

      {/* price */}
      <div>
        <span className="font-semibold">$400,000</span>
      </div>

      {/* total price */}
      <div>
        <span className="font-semibold">$800,000</span>
      </div>

      {/* action */}
      <div>
        <button className="text-rose-500 font-semibold">Remove</button>
      </div>
    </div>
  );
}