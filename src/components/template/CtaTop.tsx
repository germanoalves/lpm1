/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link'


export default function Ctatop() {
    return (
        <div className="flex justify-center items-center px-4 py-0 md:py-14 mb-1">
            <div className="text-center">
                <p className="font-pp text-gray md:mb-10">Veja como é fácil realizar o treinamento online de suas equipes e acompanhar<br/>todo o desempenho e progresso, de forma individual.</p>
                <h3 className="text-orange font-mt font-bold font-ftctatop">Conheça gratuitamente a plataforma utilizada<br/>por centenas de empresas!</h3>
                <div className="md:inline-block md:text-right"> 
                <div>
                    <a href="#"><button className="bg-orange py-4 px-2 rounded-md text-white text-ft font-pp font-extra-bold tracking-wide mt-6 relative md:px-16 md:py-4">Quero conhecer a plataforma</button></a>
                </div>
                <div className="mt-5 text-center md:hidden"><span className="text-gray">*Teste gratuito por 7 dias. Não solicitamos cartão de crédito.</span></div>
                <div className="transform rotate-90 mr-0 sm: mt-5 sm: mb-20 md:rotate-0 md:-mt-32 md:-mr-48">
                    <Image src="/images/seta.svg" width={167} height={134} />
                    </div>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center"><span className="text-gray">*Teste gratuito por 7 dias. Não solicitamos cartão de crédito.</span></div>
            </div>    
        </div>
    )
}