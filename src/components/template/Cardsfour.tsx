import Image from 'next/image';
export default function Cardfour() {
    return (
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 lg:mt-12 lg:mb-12 2xl:px-0">
            <h2 className="text-blue font-mt font-bold text-tth1 mb-16 text-left sm:text-justify ">Veja empresas que já estão utilizando a plataforma em seu ambiente corporativo</h2>
            <div className="grid gap-4 items-center justify-items-center grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
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
            <div className="flex justify-center items-center my-6 sm:my-16">
                <hr className=" w-32 border border-blue hidden sm:flex"/>
            </div>            
            <h2 className="text-blue font-mt font-bold text-tth1 mb-4 text-left sm:text-justify">Já são mais de 6 anos oferecendo um serviço de qualidade e muita parceria…</h2>
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