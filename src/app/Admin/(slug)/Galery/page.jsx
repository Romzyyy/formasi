"use client";
import Image from "next/image";

const images = [
  { title: "image", src: "/slider1.jpeg" },
  { title: "image", src: "/slider2.jpeg" },
  { title: "image", src: "/slider3.jpeg" },
];

export default function Galery() {
  return (
    <div className="flex flex-col px-6 h-screen mt-20">
      <div className="flex flex-row">
        <div className=" mb-2 columns-2 md:columns-3 lg:columns-4">
          {images.map((image) => (
            <Image
              key={image.title}
              src={image.src}
              alt={image.title}
              width={1000}
              height={1000}
              className="mb-5 aspect-auto w-full rounded-md"
            />
          ))}
        </div>
      </div>
      <div className="w-5/6 h-24 rounded-lg mx-auto flex flex-col gap-y-4 justify-center items-center">
        {!images && <p>No image Avaliable</p>}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn mx-1">Close</button>
                <button className="btn mx-1">Save</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
