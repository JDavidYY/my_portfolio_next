import Banner from '../components/Banner';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <Banner>
        <div className="opacidad items-center justify-center">
          <h1 className="text-white text-center font-sans font-medium text-5xl mb-2 items-center justify-center">
            ¡Hello! I'm <span className="font-bold">David Yon</span>
          </h1>
          <p className="text-white text-center font-sans font-light text-xl mb-4">
            I'm a Software Engineer based in Perú, passionate for code.
          </p>
          <div style={{ width: "100%", textAlign: "center", marginTop: "40px" }}>
            <Link href="/projects">
              <span className="bg-transparent text-white font-medium font-sans py-5 px-4 border border-white rounded opacidad mt-4" style={{ position: "relative" }}>
                See my work
              </span>
            </Link>
          </div>
        </div>
      </Banner>
    </div>
  );
}