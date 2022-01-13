import Image from 'next/image';


export default function Footer() {
    return (
    <div>
       <div className="flex justify-center items-center ">
          <h2 className="text-blue font-mt font-bold text-tth1 mb-9 px-4 md: px-0">Perguntas Frequentes (FAQ)</h2>
      </div>
      <div className="flex justify-center items-center max-w-7xl mx-auto px-24">
         <ul className="list-disc">
            <li className="font-mt text-gray mb-8"><strong>O que é uma plataforma EAD?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Plataforma de Ensino a Distância é um sistema que te permite hospedar cursos, treinamentos, video aulas, para que outras pessoas assistam e aprendam a distância, de forma online.</p>
            </li>

            <li className="font-mt text-gray mb-8 "><strong>Além da plataforma EAD, eu preciso ter um site?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Não é necessário.  No Maestrus oferecemos um site com e-commerce para venda de cursos, criação de páginas de conteúdos, sistema de Blog e formulário de contato. É possível utilizar o seu próprio domínio (www.nomedasuaempresa.com.br) no seu site Maestrus.</p>
            </li>

            <li className="font-mt text-gray mb-8"><strong>Quais conteúdos posso adicionar na plataforma EAD?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Poderá adicionar vídeos, arquivos para download, arquivos PDF para visualização (caso não queira disponibilizar para download), assim como atividades de quiz e provas com pontuação mínima de acertos, entre outros.</p>
            </li>

            <li className="font-mt text-gray mb-8"><strong>Certificados/diplomas de cursos EAD são válidos?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Os documentos como certificados, ou diplomas, que comprovem a conclusão de um curso EAD possuem a mesma validade de cursos presenciais.</p>
            </li>
 
            <li className="font-mt text-gray mb-8"><strong>É possível utilizar uma grade de curso presencial para a modalidade EAD?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Sim, é possível! Basta utilizar recursos de vídeo e arquivos para download para suprir a ausência do professor em tempo real. </p>
            </li>

            <li className="font-mt text-gray mb-8"><strong>É possível acompanhar a evolução do aluno e a presença nas aulas, como em um curso presencial?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Você poderá avaliar seus alunos através de provas online, e observar a evolução deles através dos resultados.  Em nossa plataforma Maestrus, você também poderá acompanhar a porcentagem de aulas concluídas e a frequência dos alunos em seus cursos.</p>
            </li>

            <li className="font-mt text-gray mb-8"><strong>O mercado recebeu bem esta modalidade?</strong>
            <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Cada vez mais empresas optam por deixar seus funcionários em home office. Custos são reduzidos, e a segurança e conforto são aumentados, pois ninguém precisa sair de casa para trabalhar e estudar.</p>
            </li>
         </ul>
      </div>
    </div>
    )
}
    
    