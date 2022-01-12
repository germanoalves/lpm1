import Image from 'next/image';
export default function Cardtree() {
  return (
   <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-9 mt-12 mb-12">
         <h1 className="text-blue font-mt font-bold text-tth1 mb-2">Saiba quem nós somos e o que podemos fazer por você, e pelo seu negócio.</h1>
         <p className="text-titles text-2xftsqr font-pp">Nós somos o Maestrus, uma empresa especialista em criação de plataformas digitais para o ensino a distância.<br/><br/>
            Escolas, professores e empresas que queiram oferecer algum curso ou treinamento de maneira online, totalmente a distância, podem hospedar o seu conteúdo sem dificuldades ou dores de cabeça em nossa plataforma, enquanto nós:
         </p>
      </div>
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <div className="grid items-center justify-items-center  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
               <div className="sqr2 group  rounded-lg overflow-hidden  hover:shadow-2xl transform duration-200">
                  <div className="inline-flex items-center ">
                     <Image src="/images/icon_estabilidade.svg" width="300" height="190" alt="Estabilidade & Entrega Maestrus"/>
                  </div>
                  <h2 className="mt-4 font-bold  text-center text-titles">Página Pronta</h2>
                  <p className="mt-3 px-3  leading-6 text-ftsqr  font-pp text-titles">
                  Basta fazer seu cadastro para conseguir compartilhar conteúdo com a sua empresa, com uma página personalizada e de fácil entendimento. 
                  </p>
               </div>
               <div className=" sqr2 group  rounded-lg overflow-hidden hover:shadow-2xl transform duration-200">
                  <div className="inline-flex items-center">
                     <Image src="/images/icon_seguranca.svg" width="300" height="190" alt="Segurança Maestrus"/>
                  </div>
                  <h2 className="mt-4 font-bold  text-center text-titles">Progresso do Aluno</h2>
                  <p className="mt-3 px-3  leading-6 text-ftsqr  font-pp text-titles">
                  Ao disponibilizar o acesso a um treinamento para um funcionário, você terá acesso ao número de aulas que ele assistiu, ao progresso dele, poderá aplicar testes e até emitir certificados de conclusão.
                  </p>
               </div>
               <div className=" sqr2 group  rounded-lg overflow-hidden hover:shadow-2xl transform duration-200">
                  <div className="inline-flex items-center">
                     <Image src="/images/icon_evolucao.svg" width="300" height="190" alt="Evolução Maestrus"/>
                  </div>
                  <h2 className="mt-4 font-bold  text-center text-titles">Experiência Estimulante</h2>
                  <p className="mt-3 px-3  leading-6 text-ftsqr  font-pp text-titles">
                  Com nossas páginas personalizadas, tornamos os treinamentos, cursos e aulas em algo mais atrativo, que faça com que o seu funcionário se interesse mais pelo conteúdo e queira assistir todas as aulas até o fim.

                  </p>
               </div>
               <div className=" sqr2 group  rounded-lg overflow-hidden hover:shadow-2xl transform duration-200">
                  <div className="inline-flex items-center">
                     <Image src="/images/icon_atendimento.svg" width="300" height="190" alt="Atendimento Maestrus"/>
                  </div>
                  <h2 className="mt-4 font-bold  text-center text-titles">Suporte Especializado</h2>
                  <p className="mt-3 px-3  leading-6 text-ftsqr  font-pp text-titles">
                  Conte conosco para te ajudar em cada etapa do processo. Estamos disponíveis e dispostos a te ajudar em tudo que você precisar.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
    
    