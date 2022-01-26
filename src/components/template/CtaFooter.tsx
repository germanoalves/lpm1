/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link'


export default function Ctafooter() {
    return (
        <div className="flex justify-center items-center pt-20 pb-40 px-4 text-left">
            <div className="text-center">
                    <h3 className="text-blue font-mt font-bold text-tth1 mb-4 text-center ">Conheça e experimente a nossa plataforma,<br/><span className="text-orange">sem pagar nada</span> por isso!</h3>
                <div className="md:inline-block md:text-right"> 
                    <div>
                        <a href="#"><button className="z-10 cursor-pointer bg-orange hover:bg-horange py-4 px-2 rounded-md text-white text-ft font-pp font-extra-bold tracking-wide mt-6 relative md:px-16 md:py-4">Quero conhecer a plataforma</button></a>    
                    </div>
                    <div className="z-0 transform rotate-90 mt-5 mr-0 md:rotate-0 md:-mt-32 md:-mr-48">
                        <Image src="/images/seta.svg" width={167} height={134} />
                    </div>
                    </div>
            </div>    
        </div>
    )
}