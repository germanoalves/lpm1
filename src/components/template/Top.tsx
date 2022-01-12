/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Top() {
    return (
         <div className="flex justify-center items-center max-w-7xl mx-auto px-12">
            <div className="grid  justify-center place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-1">
                <div>
                     <h1 className="text-blue font-mt font-bold text-tth1 mb-4 text-left">Preserve a qualidade, os valores<br/>e a cultura da sua empresa, mesmo em home office.</h1>
                     <p className="text-titles text-2xftsqr font-pp text-left">Diminua gastos com aluguéis, infraestrutura e deslocamente. Faça entrevistas, contrate e <strong>treine</strong> toda a sua equipe,<br/>através da internet.</p>
                </div>
                <div>
                    <Image src="/images/modelotopo.png" width={412}  height={448}></Image>                  
                </div>
            </div>
        </div>
    )
}
    
    