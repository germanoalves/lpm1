/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link'


export default function Ctatop() {
    return (
        <div className="flex justify-center items-center px-4 py-12">
            <div className="text-center 2xl:max-w-screen-2xl">
                <p className="font-pp text-gray md:mb-10 lg:mb-5">Veja como é fácil realizar o treinamento online de suas equipes e acompanhar<br/>todo o desempenho e progresso, de forma individual.</p>
                {/*<h3 className="text-orange font-mt font-bold font-ftctatop">Conheça gratuitamente a plataforma utilizada<br/>por centenas de empresas!</h3>*/}
                <div className="md:inline-block md:text-right"> 
                <div>
                    <a href="https://maestrus.com/teste-gratis/?frm=2"><button type='button' className="z-10 cursor-pointer bg-orange hover:bg-horange py-4 px-2 rounded-md text-white text-ft font-pp font-extra-bold  mt-6 relative sm:px-16 sm:py-4 sm:text-ft sm:font-extra-bold sm:mt-6 md:px-6 md:py-2 md:font-sm md:font-extra-bold md:text-ft md:mt-6 lg:px-4 lg:py-6  lg:mt-2  xl:px-16 xl:py-4 xl:text-ft xl:font-extra-bold  xl:mt-6 2lx:px-16 2xl:py-4 2xl:text-ft 2xl:font-extra-bold 2xl:mt-6 ">Conheça Gratuita a Plataforma</button></a>
                </div>
                <div className="mt-5 text-center md:hidden"><span className="text-gray">Dezenas de empresas já estão utilizando!.</span></div>
                <div className="z-0 transform rotate-90 mr-0 sm:mt-5 sm:mb-20 md:rotate-0 md:-mt-32 md:-mr-48">
                    <Image src="/images/seta.svg" width={167} height={134} />
                    </div>
                </div>
                <div className="hidden -mt-20 md:flex md:items-center md:justify-center"><span className="text-gray">Dezenas de empresas já estão utilizando!</span></div>
            </div>    
        </div>
    )
}

