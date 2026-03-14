'use client';
import React from 'react'
import { Syne } from 'next/font/google';
import Image from 'next/image'
import { motion } from 'framer-motion';


const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

const page = () => {
  return (
    <div className='w-full min-h-screen bg-[#fff] overflow-x-hidden'>
      <div className={syne.className}>
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-around pt-10 px-6 gap-6'>
          <div>
            <Image
              src="/logo.svg"
              width={150}
              height={150}
              alt="Picture of the author"
              className="md:w-[200px]"
            />
          </div>
          
          <div className='flex flex-col sm:flex-row items-center gap-5'>
            <div>
              <ul className='text-[#000] font-bold flex text-[1.2rem] md:text-[1.5rem] gap-3 cursor-pointer'>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
              </ul>
            </div>

            <div>
              <button className="btn btn-neutral btn-dash font-bold text-[1rem] md:text-[1.2rem]"><a href="https://ig.me/m/kodeoagency">FALE CONOSCO</a></button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='flex justify-center items-center pt-20 md:pt-40 px-6 text-center'>
            <h1 className='text-[#000] font-bold text-[2.2rem] sm:text-[3rem] md:text-[4rem]'>SUA IDEIA, <span className='text-[#FF5C00] font-bold'>VIRA PROJETO</span></h1>
          </div>

          <div className='flex justify-center items-center pt-5 px-6'>
            <p className='text-[#000] text-center font-medium text-[1rem] md:text-[1.6rem]'>CONHEÇA A KODEO, A SUA AGÊNCIA DE PROGRAMAÇÃO<br className='hidden md:block' /> ONDE QUALQUER IDEIA VIRA PROJETO.</p>
          </div>

          <div className='flex flex-col sm:flex-row justify-center items-center gap-3 pt-10 px-6'>
            <button className='bg-[#000] text-[#fff] font-bold w-full sm:w-[13rem] h-[3rem] text-[1.1rem] rounded-[10px] cursor-pointer'><a href="https://www.instagram.com/kodeoagency/">conhecer mais</a></button>
            <button className='bg-[#fff] text-[#000] border border-[#000] font-bold w-full sm:w-[17rem] h-[3rem] text-[1.1rem] rounded-[10px] cursor-pointer'><a href="https://ig.me/m/kodeoagency">agendar uma conversa</a></button>
          </div>
        </motion.div>

        <div className='pt-20 md:pt-35'>
          <div className='w-full h-[0.1rem] bg-[#000]/20'></div>
        </div>

        <div id='sobre'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className='font-bold text-[#000]/10 text-[4rem] sm:text-[8rem] md:text-[14rem] pt-12 text-center md:text-left lg:text-[14rem]'>SOBRE NÓS</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className='text-[#000] font-bold text-[1.2rem] md:text-[1.8rem] max-w-[50rem] px-6 md:ml-[10rem] text-justify md:text-left lg:ml-[16rem]'>Kodeo nasceu em 2025 com a ideia de tornar projetos mais profissionais e organizados em uma agência. Criada por um único desenvolvedor, surgiu para centralizar trabalhos de programação e apresentar tudo em nome de uma marca. A agência desenvolve sites, aplicativos, sistemas e automações, com foco principal em criação de sites. Sua missão é ajudar empresas com tecnologia, porque aqui sua ideia vira projeto.</p>
          </motion.div>
        </div>

        <div className='pt-20 md:pt-35'>
          <div className='w-full h-[0.1rem] bg-[#000]/20'></div>
        </div>

        <div id='projetos'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className='font-bold text-[#000]/10 text-[4.5rem] sm:text-[9rem] md:text-[15.1rem] pt-12 text-center md:text-left lg:text-[15.1rem]'>PROJETOS</h1>
          </motion.div>

          <div className='px-6 md:ml-[10rem] pt-10 lg:flex lg:justify-center lg:items-center'>
            <div className='flex flex-col lg:flex-row gap-10 md:gap-70'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              > 
                <div>
                  <Image
                  src="/dhpb.svg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className='w-full h-auto max-w-[400px]'
                />
                </div>

                <div className='pt-5'>
                  <p className='font-bold text-[#000] text-[2rem] max-w-[25rem]'>Desafio em História da Paraíba</p>
                  <p className='font-medium text-[#000] text-[1.3rem] max-w-[25rem]'><a href="https://dhpb.ifpb.edu.br/">Visitar site</a></p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              > 
                <div>
                  <Image
                  src="/elasnaciencia.svg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className='w-full h-auto max-w-[400px]'
                />
                </div>

                <div className='pt-5'>
                  <p className='font-bold text-[#000] text-[2rem] max-w-[25rem]'>ElasNaCiência IDE</p>
                  <p className='font-medium text-[#000] text-[1.3rem] max-w-[25rem]'><a href="https://elasnaciencia-ide.vercel.app/">Visitar site</a></p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='px-6 md:ml-[10rem] pt-10 lg:pt-20 lg:flex lg:justify-center lg:items-center'>
            <div className='flex flex-col lg:flex-row gap-10 md:gap-70'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              > 
                <div>
                  <Image
                  src="/jovembank.svg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className='w-full h-auto max-w-[400px]'
                />
                </div>

                <div className='pt-5'>
                  <p className='font-bold text-[#000] text-[2rem] max-w-[25rem]'>JovemBank</p>
                  <p className='font-medium text-[#000] text-[1.3rem] max-w-[25rem]'><a href="https://jovembank.vercel.app/">Visitar site</a></p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              > 
                <div>
                  <Image
                  src="/pscj.svg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className='w-full h-auto max-w-[400px]'
                />
                </div>

                <div className='pt-5'>
                  <p className='font-bold text-[#000] text-[2rem] max-w-[24rem]'>Sagrado Coração de Jesus</p>
                  <p className='font-medium text-[#000] text-[1.3rem] max-w-[25rem]'><a href="https://www.sagradopscj.org/">Visitar site</a></p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='pt-20 md:pt-35'>
          <div className='w-full h-[0.1rem] bg-[#000]/20'></div>
        </div>

        <footer>
          <div className='pb-10'>
            <div className='flex flex-col md:flex-row items-center justify-between md:justify-around pt-10 px-6 gap-6'>
              <div>
                <Image
                  src="/logo.svg"
                  width={150}
                  height={150}
                  alt="Picture of the author"
                  className="md:w-[200px]"
                />
              </div>
              
              <div className='flex flex-col sm:flex-row items-center gap-5'>
                <div>
                  <ul className='text-[#000] font-bold flex text-[1.2rem] md:text-[1.5rem] gap-3 cursor-pointer'>
                    <li>Sobre</li>
                    <li>Projetos</li>
                  </ul>
                </div>

                <div>
                  <button className="btn btn-neutral btn-dash font-bold text-[1rem] md:text-[1.2rem]" ><a href="https://ig.me/m/kodeoagency">FALE CONOSCO</a></button>
                </div>
              </div>
            </div>

            <div>
              <p className='text-[#000]/10 text-[1.2rem] md:text-[2rem] font-bold pt-10 text-center'>© copyright 2026 - kodeo agency</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default page