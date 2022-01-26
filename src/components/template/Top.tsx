/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Top() {
    return (
        <div className='-mb-12 pl-0  pt-6 sm:pl-2 md:pl-6 xl:pl-6 2xl:pl-0'>
                <div  className="top-0">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 sm:mt-10 md:-mt-28 xl:-mt-12 2xl:-mt-14 ">
                    <div className="max-w-7xl px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center sm:mt-0 sm:mb-0 md:mt-0 md:mb-0 lg:-mt-46 lg:-mb-28 xl:-mt-36 xl:-mb-10 2xl:mt-0 2xl:mb-10">
                        
                        <div className="flex flex-col md:mt-20 w-full md:w-3/5 justify-center items-start text-center md:text-left">
                            <h1 className="text-blue font-mt font-bold text-tth1 mb-4 text-left">Preserve a qualidade, os valores e a cultura da sua empresa, mesmo em home office.</h1>
                            <p className="text-titles text-2xftsqr font-pp text-left">Diminua gastos com aluguéis, infraestrutura e deslocamente. Faça entrevistas, contrate e <strong>treine</strong> toda a sua equipe, através da internet.</p>
                        </div>
                        
                        <div className="md:w-2/5 py-6 text-center sm:p-0 md:p-12 lg:p-20 xl:p-6 2xl:p-0">
                            <Image src="/images/topo_modeloii.png" width={366}  height={349}></Image>
                        </div>
                    </div>
                </div>
        </div>
    )
}
    

/*<div classNameName="pl-4 pt-2 sm:pl-4 md:pl-20 md:pt-4 lg:pl-16 xl:pl-12 2xl:pl-32">
                <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
                </div>*/




               /* <div classNameName="flex w-full justify-center items-center  pt-16 -mt-20 sm:mt-18 md:-mt-20 lg:-mt-12 lg:-mb-12 xl:-mt-20 ">
                <div classNameName="grid grid-cols-2 gap-24 justify-center items-center place-items-center px-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:justify-center 2xl:max-w-screen-2xl 2xl:px-14">
                    <div classNameName="px-4 lg:ml-14 lg:mt-6 2xl:mt-6">
                        
                        <div classNameName=''>
                            <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
                        </div>
                        
                          <h1 classNameName="text-blue font-mt font-bold text-tth1 mb-4 text-left">Preserve a qualidade, os valores e a cultura da sua empresa, mesmo em home office.</h1>
                          <p classNameName="text-titles text-2xftsqr font-pp text-left">Diminua gastos com aluguéis, infraestrutura e deslocamente. Faça entrevistas, contrate e <strong>treine</strong> toda a sua equipe,<br/>através da internet.</p>
                    </div>
                    <div classNameName="mt-24">
                        <Image src="/images/topo_modeloii.png" width={366}  height={349}></Image>                  
                    </div>
                </div>
            </div>*/





            /*
            
            <div classNameName="flex w-full justify-center items-center">
                <div classNameName='mt-0 sm:-mt-12'>
                    <div classNameName="grid grid-cols-1 gap-2 justify-center items-center place-items-center px-0 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  2xl:max-w-screen-2xl 2xl:px-14">
                        <div classNameName="px-4 lg:ml-14">
                            
                            <div classNameName='mt-6 mb-10'>
                                <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
                            </div>
                            <br /><br /><br />
                            <h1 classNameName="text-blue font-mt font-bold text-tth1 mb-4 text-left">Preserve a qualidade, os valores e a cultura da sua empresa, mesmo em home office.</h1>
                            <p classNameName="text-titles text-2xftsqr font-pp text-left">Diminua gastos com aluguéis, infraestrutura e deslocamente. Faça entrevistas, contrate e <strong>treine</strong> toda a sua equipe,<br/>através da internet.</p>
                        </div>
                        <div classNameName="mt-4 mb-6 sm:mt-40 2xl:mt-40">
                            <Image src="/images/topo_modeloii.png" width={366}  height={349}></Image>                  
                        </div>
                    </div>
                </div>
            </div>
            
            */