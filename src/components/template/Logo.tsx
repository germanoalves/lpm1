import Image from 'next/image';
import Link from 'next/link'
export default function Logo() {
   return (
   <div className="flex justify-start pl-0 md:pl-4 xl:pl-16 2xl:ml-56">
      <div className="-mb-20 -pl-4">
      <a href="https://maestrus.com"><Image src="/images/logomaestrusii.png" width={300} height={77} alt="Logotipo Maestrus"/></a>
    </div>
   </div>
   )
   }
   
   