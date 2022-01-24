/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Top() {
    return (
        <div className=''>
               <div className="pl-4 pt-2 md:pl-20 md:pt-5 lg:pl-18 xl:pl-14 2xl:pl-96">
                <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
                </div>

                <div className="flex w-full justify-center items-center  pt-36 -mt-20 sm:mt-18 md:-mt-20 lg:-mt-38 lg:-mb-12 xl:-mt-20 ">
                <div className="grid gap-24 justify-center items-center place-items-center px-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:justify-center 2xl:max-w-screen-2xl 2xl:px-14">
                    <div className="px-4 lg:ml-14 2xl:">
                        <h1 className="text-blue font-mt font-bold text-tth1 mb-4 text-left">Preserve a qualidade, os valores e a cultura da sua empresa, mesmo em home office.</h1>
                        <p className="text-titles text-2xftsqr font-pp text-left">Diminua gastos com aluguéis, infraestrutura e deslocamente. Faça entrevistas, contrate e <strong>treine</strong> toda a sua equipe,<br/>através da internet.</p>
                    </div>
                    <div className="m-0 pr-1 lg:-mt-10 xl:mt-0 ">
                        <Image src="/images/topo_modeloii.png" width={366}  height={349}></Image>                  
                    </div>
                </div>
            </div>
        </div>
    )
}
    
