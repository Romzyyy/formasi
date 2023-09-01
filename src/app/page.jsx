import About from '@/components/About'
import Card from '@/components/Card'
import Galery from '@/components/Galery'
import Slider from '@/components/Slider'
import Team from '@/components/Team'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center'>
            <Slider />
            <About />
            <div className='flex flex-col w-full px-72 mb-20'>
                <h1 className='mb-10 text-3xl font-semibold'>
                    New Information
                </h1>
                <div className='grid grid-cols-4 gap-10'>
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
            <div className='mb-40'>
                <h1 className=' my-20 text-4xl text-center font-semibold text-slate-800'>
                    Meet Our Team Members
                </h1>
                <Team />
            </div>
        </main>
    )
}