import Slider from '@/components/Slider'
import About from '@/components/About'
import Card from '@/components/Card'
import Galery from '@/components/Galery'
import Avatar from '@/components/Avatar'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Slider />
            <About />
            <div
                id="News"
                className="mb-14 flex w-full flex-col px-6 text-slate-800"
            >
                <h1 className="mb-4 text-xl font-semibold">Information</h1>
                <div className="grid grid-rows-4 gap-4">
                    <Card
                        title={'web developer'}
                        desc={
                            'Web developer akan terlibat dalam proses pembuatan dari awal mulai dari mendesain tampilan hingga coding.'
                        }
                    />
                    <Card
                        title={'Database Administrator'}
                        desc={
                            'Pekerjaannya meliputi mengurutkan dan mengatur data dalam susunan tertentu untuk memudahkan pengguna data tertentu untuk mengaksesnya secara eksklusif.'
                        }
                    />
                    <Card
                        title={'Programmer'}
                        desc={
                            'Dikutip dari Techopedia, programmer adalah individu yang membuat software atau aplikasi komputer dengan memberikan instruksi pemrograman khusus di komputer.'
                        }
                    />
                    <Card
                        title={'System Engineer'}
                        desc={
                            'Profesi ini bertugas untuk merancang dan mengimplementasikan software untuk berbagai informasi dan aplikasi berbasis teknologi serta prosedur pengujian untuk sistem internal'
                        }
                    />
                </div>
            </div>
            <Galery />
            <div className=" w-full pb-10">
                <h1 className=" my-10 text-center text-xl font-semibold text-slate-800">
                    Meet Our Team Members
                </h1>
                <Avatar />
            </div>
        </main>
    )
}
