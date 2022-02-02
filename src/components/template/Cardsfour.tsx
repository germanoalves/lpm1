/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';

export default function Cardfour() {
    return (
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 lg:mt-12 lg:mb-12 2xl:px-0">
            <h2 className="text-blue font-mt font-bold text-tth1 mb-20 text-left sm:text-justify ">Veja empresas que já estão utilizando a plataforma em seu ambiente corporativo</h2>
            <div className="grid gap-4 items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-4 xl:grid-cols-4">
               <div className="group  rounded-lg">
                  <div className="inline-flex items-center ">
                     <Image src="/images/risklogo.png" width={140} height={140} alt="cliente Maestrus Risck Assess Brasil"/>
                  </div>
                  
               </div>
               <div className="group  rounded-lg">
                  <div className="inline-flex items-center">
                     <Image src="/images/rededorlogo.png" width={150} height={150} alt="cliente Maestrus Rede Dor"/>
                  </div>
                  
               </div>
               <div className="group  rounded-lg">
                  <div className="inline-flex items-center">
                     <Image src="/images/uaulogo.png" width={150} height={150} alt="cliente Maestrus Uau Ingleza"/>
                  </div>
                  
               </div>
               <div className="group  rounded-lg">
                  <div className="inline-flex items-center">
                     <Image src="/images/dearologo.png" width={150} height={150} alt="cliente Maestrus Dearo"/>
                  </div>
                  
               </div>
            </div>

            <div className="flex justify-center items-center px-4 py-6">
            <div className="text-center 2xl:max-w-screen-2xl">
               <div className="md:inline-block md:text-right"> 
                <div>
                    <Link href="https://maestrus.com/teste-gratis/?frm=2/" passHref={true}>
                     <button type='button' className="z-10 cursor-pointer bg-orange hover:bg-horange py-4 px-2 rounded-md text-white text-ft font-pp font-extra-bold  mt-6 relative sm:px-16 sm:py-4 sm:text-ft sm:font-extra-bold sm:mt-6 md:px-6 md:py-2 md:font-sm md:font-extra-bold md:text-ft md:mt-6 lg:px-4 lg:py-6  lg:mt-2  xl:px-16 xl:py-4 xl:text-ft xl:font-extra-bold  xl:mt-6 2lx:px-16 2xl:py-4 2xl:text-ft 2xl:font-extra-bold 2xl:mt-6 ">Quero Ver Como Isso Funciona Para o Meu Negócio</button>
                    </Link>    
                </div>
                               
                <div className="mt-4 md:flex md:items-center md:justify-center"><span className="text-gray">Dezenas de empresas já estão utilizando!</span></div>
            </div>    
        </div>
        </div>


                        
            <h2 className="text-blue font-mt font-bold text-tth1 mt-10 mb-4 text-left sm:text-justify">Já são mais de 6 anos oferecendo um serviço de qualidade e muita parceria…</h2>
            <p className="text-titles text-2xftsqr font-pp text-justify">
            Transicionar, ou iniciar, no universo digital pode ser algo desconfortável para quem não está habituado.<br/><br/>
            Desde que começamos, a nossa prioridade tem sido, não apenas oferecer os melhores serviços por um preço justo, mas também nos tornarmos parceiros de cada empresa que decida trabalhar conosco.<br/><br/>
            Você não é obrigado a conhecer todas as funcionalidades das ferramentas, dominar os recursos disponíveis e saber como fazer todo o processo sozinho.<br/><br/>
            Temos orgulho de oferecermos um dos melhores suportes do mercado, com pessoas que não apenas te atendem quando você precisa, mas que se preocupam verdadeiramente com você e sua empresa.<br/><br/>
            Queremos construir uma parceria com você e trabalharmos juntos para o sucesso do seu negócio.
            </p>
        </div>
    )
}