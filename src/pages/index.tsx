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
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K234267');`}}>
        </script>
          <title> Plataforma EAD Maestrus </title>
          <meta httpEquiv="content-language" content="pt-br"/>
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="author" content="Maestrus" />
          <meta name="creator" content="Maestrus" />
          <meta name="creator" content="Maestrus" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:locale" content="pt_BR"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Plataforma Ead para Empresas" />
          <meta property="og:description" content="Treine seus Colaboradores Online!" />
          <meta property="og:url" content="https://maestrus.com" />
          <meta property="og:site_name" content="Maestrus" />
          <meta property="og:image" content= "https://site.mstatic.com.br/img/home/educacao_a_distancia.png" />
          <link rel="shortcut icon" href="/favico.ico" />
          </Head>
      </div>
      <body>      
            <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K234267"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}>
            </noscript>
              <div className=''>
                  <div className="bg-img-top  bg-no-repeat bg-cover bg-left-bottom">             
                  <div>
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
                  <div>
                    <Footer></Footer>
                  </div>
                  <div>
                    <Ctafooter></Ctafooter>
                  </div>
              </div>  
        </body>
    </>
  )
}
