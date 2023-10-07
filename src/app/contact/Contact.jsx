export default function Contact() {
  return (
    <div
      id="Contact"
      className="px-6 w-full h-fit text-slate-800 sm:px-20 lg:px-36 mb-6 lg:mb-32 md:mb-16 mt-8"
    >
      <h1 className="mb-14 text-2xl text-center font-bold">contact</h1>
      <div className="flex flex-col lg:flex-row lg:gap-y-10 lg:gap-x-10 mt-8">
        <div className="mx-auto lg:basis-1/2">
          <div className=" h-80 md:h-72 grid content-between">
            <div>
              <p>
                Berdiri sejak 2019 di Universitas Bahaudin Mudhary Madura,
                Sistem Informasi dari tahun tersebut mulai melkukan perkembangan
                dan menunjukkan eksistensinya
              </p>
            </div>
            <div>
              <div className="flex flex-col lg:gap-y-8 gap-y-4  gap-x-6">
                <div>
                  <p>Alamat</p>
                  <p>
                    Jl. Raya Lenteng, No.10, Kecamatan. Batuan, Kabupaten.
                    Sumenep
                  </p>
                </div>
                <div>
                  <p>Email</p>
                  <p>formasi@gmail.com</p>
                </div>
                <div>
                  <p>Follow US</p>
                  <div className="flex gap-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="cursor-pointer hover:fill-transparent stroke-slate-900 transition fill-current w-6 h-6"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="cursor-pointer hover:fill-transparent stroke-slate-900 transition fill-current w-6 h-6"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="cursor-pointer hover:fill-transparent stroke-slate-900 transition fill-current w-6 h-6"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:basis-1/2">
          <iframe
            className="rounded-sm w-full lg:h-full md:h-[320px] h-[220px] border-4 shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4648.061921270962!2d113.8435734958793!3d-7.0103062602263035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9e77e50a35beb%3A0xe5c471834c85b042!2sSekretariat%20FORMASI!5e0!3m2!1sid!2sid!4v1696435054249!5m2!1sid!2sid"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
