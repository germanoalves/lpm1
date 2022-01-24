import Image from 'next/image';

export default function Cardsone() {
    return (
    <div className="z-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 sqrs1">
       <div className="grid gap-4  grid-cols-1 items-center justify-items-center  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          <div className="flex flex-col h-full items-center justify-center p-6 sqr1 transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110">
             <div className="inline-flex  overflow-hidden ">
                <Image src="/images/icon_treinamentos.svg" width="300" height="200" alt="Treinamentos Corporativos Maestrus"/>
             </div>
             <h2 className="mt-4 font-bold  text-center text-titles">Treinamentos Corporativos</h2>
             <p className="text-xs mt-3 leading-6 text-ftsqr font-pp text-titles">
                Treine seu time utilizando trilhas de aprendizagem e vá elevando o nível de conhecimento sobre seu produto ou serviço.
             </p>
          </div>
          <div className="flex flex-col h-full items-center justify-center bg-white p-4 sqr1">
             <div className="inline-flex  overflow-hidden h-40 w-40">
                <Image src="/images/icon_instituicoes.svg" width="300" height="200" alt="Instituições de Ensino  Maestrus"/>
             </div>
             <h2 className="mt-4 font-bold  text-center text-titles">Instituições de Ensino</h2>
             <p className="text-xs mt-3 leading-6 text-ftsqr font-pp text-titles">
                Ofereça a melhor experiência em seus cursos de graduação, tornando o aprendizado mais assertivo.
             </p>
          </div>
          <div className="flex flex-col h-full items-center justify-center  p-4 sqr1 transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110">
             <div className="inline-flex overflow-hidden">
                <Image src="/images/icon_cursoslivres.svg" width="300" height="200" alt="Cursos Livres  Maestrus"/>
             </div>
             <h2 className="mt-4 font-bold  text-center text-titles">Cursos Livres</h2>
             <p className="text-xs  mt-3 leading-6 text-ftsqr font-pp text-titles">
                Tenha uma experiência facilitada na venda do seu conhecimento. Recursos voltados para vendas a vista e recorrentes.
             </p>
          </div>
       </div>
    </div>
    )
    }
    
    