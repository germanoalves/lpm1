/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link'


export default function Ctafooter() {
    return (
        <div className="flex justify-center items-center py-14">
            <div className="text-center">
                <h3 className="text-blue font-mt font-bold text-tth1 mb-4">Conheça e experimente a nossa plataforma,<br/><span className="text-orange">sem pagar nada</span> por isso!</h3>
                <div className="inline-block text-right"> 
                <div><a href="#"><button className="bg-orange px-16 py-4 rounded-md text-white text-ft font-pp font-extra-bold tracking-wide mt-10 relative ">Quero conhecer a plataforma</button></a></div>
                <div className="arrow"><Image src="/images/seta.svg" width="167" height="134" /></div>
                </div>
            </div>    
        </div>
    )
}