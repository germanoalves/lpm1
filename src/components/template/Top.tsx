/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Top() {
    return (
         <div className="flex max-w-7xl mx-auto mt-32 sm:mt-28 md:mt-20 lg:-mt-38 lg:-mb-12 xl:-mt-20">
            <div className="grid gap-1 justify-center place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <div className="px-4 lg:ml-14">
                     <h1 className="text-blue font-mt font-bold text-tth1 mb-4 text-left">Preserve a qualidade, os valores e a cultura da sua empresa, mesmo em home office.</h1>
                     <p className="text-titles text-2xftsqr font-pp text-left">Diminua gastos com aluguéis, infraestrutura e deslocamente. Faça entrevistas, contrate e <strong>treine</strong> toda a sua equipe,<br/>através da internet.</p>
                </div>
                <div className="m-0 pr-1 lg:-mt-10 xl:mt-0 ">
                    <Image src="/images/topo_modeloii.png" width={366}  height={349}></Image>                  
                </div>
            </div>
        </div>
    )
}
    
    