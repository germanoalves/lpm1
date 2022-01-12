/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link'


export default function Ctatop() {
    return (
        <div className="flex justify-center items-center py-14">
            <div className="text-center">
                <p className="font-pp text-gray mb-10">Veja como é fácil realizar o treinamento online de suas equipes e acompanhar<br/>todo o desempenho e progresso, de forma individual.</p>
                <h3 className="text-orange font-mt font-bold font-ftctatop">Conheça gratuitamente a plataforma utilizada<br/>por centenas de empresas!</h3>
                <div className="inline-block text-right"> 
                <div>
                    <a href="#"><button className="bg-orange px-16 py-4 rounded-md text-white text-ft font-pp font-extra-bold tracking-wide mt-6 relative ">Quero conhecer a plataforma</button></a>
                </div>
                <div className="arrow"><Image src="/images/seta.svg" width="167" height="134" /></div>
                </div>
                <div><span className="text-gray">*Teste gratuito por 7 dias. Não solicitamos cartão de crédito.</span></div>
            </div>    
        </div>
    )
}