export default function About() {
    return (
        <div id='Profile' className='mt-6 text-slate-800 w-full px-6 sm:px-20 lg:px-36 2xl:px-80 '>
            <p className='text-xl md:text-2xl tracking-wide'>
                <span className='font-semibold text-xl md:text-3xl mr-2'>
                    Forum Mahasiswa Sistem Informasi
                </span>
                adalah kesatuan rencana belajar yang mengkaji, menerapkan, dan
                mengembangkan ilmu yang melandasi rekayasa sistem informasi.
                Arah kajian keilmuan dari program studi ini mencakup disiplin,
                proses.
            </p>
            <div className='flex flex-col my-8 gap-8 lg:flex-row'>
                <div className=" md:basis-1/2">
                    <h1 className='font-semibold text-lg md:text-2xl mb-1'>VISI</h1>
                    <p className='text-base md:text-xl'>
                        Menjadi pusat pendidikan tinggi dan pengembangan
                        keilmuan Teknik Industri yang unggul melalui
                        penyelenggaraan Tri Dharma Perguruan Tinggi yang
                        berkontribusi dalam pembangunan bangsa dan masyarakat
                        global pada tahun 2025.
                    </p>
                </div>
                <div className='text-right md:basis-1/2'>
                    <h1 className='font-semibold text-lg md:text-2xl mb-1'>MISI</h1>
                    <p className='text-base md:text-xl'>
                        Menyelenggarakan program pendidikan tinggi Teknik
                        Industri yang relevan dengan kebutuhan industri dan
                        masyarakat untuk menghasilkan sarjana yang bermoral.
                    </p>
                    <p className='mt-2 text-base md:text-xl'>
                        Melakukan penelitian dan pengabdian kepada masyarakat
                        dalam rangka mengembangkan keilmuan Teknik Industri dan
                        membantu menyelesaikan permasalahan industri.
                    </p>
                    <p className='mt-2 text-base md:text-xl'>
                        Memberikan pelayanan kepada stakeholder melalui
                        pendidikan, penelitian, dan pengabdian kepada
                        masyarakat.
                    </p>
                </div>
            </div>
        </div>
    )
}
