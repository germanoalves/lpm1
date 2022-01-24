import Head from 'next/head'
import Header  from "../components/template/Header"
import Logo  from "../components/template/Logo"
import Top  from "../components/template/Top"
import Cardstwo  from "../components/template/CtaTop"
import Cardstree  from "../components/template/Cardstree"
import Cardfour from "../components/template/Cardsfour"
import Cardfive from "../components/template/Cardsfive"
import Footer  from "../components/template/Footer"
import Ctafooter from '../components/template/CtaFooter'



export default function Home() {
  return (
   //start top 
    <>
     <div>
      <Head>
        <title> Plataforma EAD Maestrus </title>
        <meta httpEquiv="content-language" content="pt-br"/>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Maestrus" />
        <meta name="creator" content="Maestrus" />
        <meta name="creator" content="Maestrus" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Landing Page Maestrus" />
        <meta property="og:description" content="Maestrus - Sua plataforma de ensino a distância" />
        <meta property="og:url" content="https://maestrus.com" />
        <meta property="og:site_name" content="Maestrus" />
        <meta property="og:image" content= "https://site.mstatic.com.br/img/home/educacao_a_distancia.png" />
        <link rel="shortcut icon" href="/favico.ico" />
        </Head>
     </div>
      <div className="bg-img-top  bg-no-repeat bg-cover bg-left-bottom xl:pt-5"> 
        
        
        <div className="">
        <Top></Top>
        </div>
      </div>
  
      <div  className="Cardstwo">
        <Cardstwo></Cardstwo>
      </div>
      <div  className="Cardstree">
        <Cardstree></Cardstree>
      </div>
      <div className="Cardstree">
        <Cardfour></Cardfour>
      </div>
      <div className="Cardfive">
        <Cardfive></Cardfive>
      </div>
      <div><Footer></Footer></div>
      <div><Ctafooter></Ctafooter></div>
    </>
    
  )


}
