import Image from 'next/image'
import Profile from '../../assets/profile-lucas.png'
import { Paragraph } from '../Paragraph'
import { SocialMedia } from './SocialMedia'

export function About() {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-4 lg:grid lg:grid-cols-2">
      <div>
        <Image
          width={400}
          height={400}
          className="rounded-full border-4 border-cyan-400 object-cover"
          src={Profile}
          alt="foto perifl"
        />
      </div>
      <div className="flex flex-col gap-4 items-center lg:items-start justify-center text-cyan-400">
        <h1 className="font-contrail_one text-center lg:text-start text-2xl lg:text-5xl ">
          Olá, eu sou o Lucas <br />
          <span className="font-roboto mb-4 text-xl lg:text-2xl text-white">
            Desenvolvedor Front-end apaixonado por inovação.
          </span>
        </h1>
        <Paragraph>
          Como programador Front-end, minha jornada começou em 2022, ao entrar
          na Universidade Presbiteriana Mackenzie para estudar Análise e
          Desenvolvimento de Sistemas. Desde então, tenho dedicado meu tempo a
          estudos por meio de cursos, pesquisas e leituras, reforçando meu
          compromisso com o aprendizado contínuo. Minha paixão por aplicar
          conhecimentos na prática se reflete em projetos pessoais que
          constantemente aprimoram minhas habilidades. Sou um profissional
          comprometido, focado no crescimento e estou ansioso por uma
          oportunidade que me permita contribuir e expandir minhas capacidades
          no desenvolvimento Front-end.
        </Paragraph>
        <SocialMedia />
      </div>
    </div>
  )
}
