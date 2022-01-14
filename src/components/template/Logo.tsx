import Image from 'next/image';
import Link from 'next/link'
export default function Logo() {
   return (
   <div className=" z-10 flex justify-center items-center -mb-28 -ml-4 sm:absolute sm:ml-52 md:mb-0 md:ml-20 ">
     <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
   </div>
   )
   }
   
   