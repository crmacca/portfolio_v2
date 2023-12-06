import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Navbar from '../components/navbar';
import Marquee from 'react-fast-marquee';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Landing = () => {
  const aspiringRef = useRef(null); // Ref for "aspiring" word
  const engineerRef = useRef(null); // Ref for "engineer" word
  const descriptionRefs = useRef([]);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null); // Ref for the image
  const scrollDownRef = useRef(null);
  const [percentage, setPercentage] = useState(60)

  const workscontainer = useRef(null)

  const works1text = useRef(null)
  const works1image = useRef(null)

  const works2text = useRef(null)
  const works2image = useRef(null)


  const debug = false //disable main animations


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    const animateWords = (element, delay) => {
      gsap.fromTo(
        element,
        { y: '500%', rotate: '20%' },
        {
          y: '0%',
          rotate: '0%',
          duration: 3,
          ease: 'sine.inOut',
          delay,
        }
      );
    };

    // Create a ScrollTrigger instance
    ScrollTrigger.create({
      scroller: sectionRef.current,
      trigger: headerRef.current,
      start: 'top',
      end: 'bottom',
      onUpdate: (self) => {
        let cleanedPercentage = Math.abs((Math.floor(self.progress * 100) - 100) / 100)
        setPercentage(cleanedPercentage)
      }
    })

    if(!debug) {
      animateWords(aspiringRef.current, 0);
      animateWords(engineerRef.current, 0.5);

      const descriptionLines = descriptionRefs.current;
      descriptionLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { x: '150%' },
          {
            opacity: 1,
            x: '0%',
            duration: 3,
            ease: 'sine.inOut',
            delay: 1 + index * 0.5,
          }
        );
      });

      tl.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0, transformOrigin: 'top' },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'sine.inOut',
        }
      );

      gsap.timeline().to(works1image.current, {
        x: '-100%',
        duration: 0
      })

      gsap.timeline().to(works1text.current, {
        x: '100%',
        duration: 0
      })

      gsap.timeline().to(works2text.current, {
        x: '-100%',
        duration: 0
      })

      gsap.timeline().to(works2image.current, {
        x: '100%',
        duration: 0
      })

      tl.fromTo(scrollDownRef.current, {
        y: '30vh'
      }, {
        y: '0',
        delay: 4,
        duration: 2,
        ease: 'sine.inOut'
      })

      ScrollTrigger.create(
        {
          scroller: sectionRef.current,
          trigger: headerRef.current,
          start: 'bottom',
          onUpdate: (self) => {
            self.kill();
            gsap.timeline().to(works1image.current, {
                x: '0%',
                duration: 1,
                ease: 'sine.inOut'
              }
            )
            gsap.timeline().to(works1text.current, {
                x: '0%',
                duration: 1,
                ease: 'sine.inOut'
              }
            )
          }
        }
      )

      ScrollTrigger.create(
        {
          scroller: sectionRef.current,
          trigger: workscontainer.current,
          start: 'top',
          onUpdate: (self) => {
            self.kill();
            gsap.timeline().to(works2image.current, {
                x: '0%',
                duration: 1,
                ease: 'sine.inOut'
              }
            )
            gsap.timeline().to(works2text.current, {
                x: '0%',
                duration: 1,
                ease: 'sine.inOut'
              }
            )
          }
        }
      )
    }

  }, []);



  return (
    <div className="relative min-h-screen w-full text-white max-h-screen">
      <img
        src="images/kristine-tanne-unsplash.jpg"
        alt="Background"
        className={`absolute h-screen w-full object-cover brightness-[80%]`}
        style={{
          opacity: percentage
        }}
        ref={imageRef}
      />
      <div ref={sectionRef} className="relative z-10 w-full max-h-screen overflow-y-auto overflow-x-hidden">
        <section ref={headerRef} className="h-screen flex flex-col">
          <Navbar />
          <div className="mt-auto p-10 grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 w-full">
            <div>
              <h3 className="font-glorify text-[3vh] select-none">
                <u>young</u> &
              </h3>
              <h1
                className="font-nata text-[25vh] leading-[.8] threeDText select-none"
                ref={aspiringRef}
              >
                Aspiring
              </h1>
              <h1
                className="font-nata text-[20vh] leading-[.8] threeDText max-w-fit select-none"
                ref={engineerRef}
              >
                Engineer
              </h1>
            </div>
            <div ref={scrollDownRef} className='hidden md:flex items-center justify-start max-h-fit mt-auto gap-3'>
                <h1 className='font-maelstrom text-[4vh] select-none'>
                <span className='mx-2 animate-pulse'>
                ⟱
                </span> 
                SCROLL DOWN</h1>
            </div>
            <div className="flex flex-col">
              <span
                className="text mt-auto mb-5 text-right text-clip font-skeina text-[3vh] drop-shadow-lg select-none"
              >
                <div ref={(el) => (descriptionRefs.current[0] = el)}>
                    <span className='wave mx-2'>
                    👋🏼
                    </span> 
                    I'M A YOUNG ENTREPRENEUR
                </div>
                <div ref={(el) => (descriptionRefs.current[1] = el)}>
                  WITH THE DREAM OF BECOMING A SOFTWARE ENGINEER & COMPUTER SCIENTIST.
                </div>
                <div ref={(el) => (descriptionRefs.current[2] = el)}>
                  I'M FROM 🇦🇺 AUSTRALIA, HAVE 2 🐱 AND ❤️ THE 🏝️ BEACH
                </div>
              </span>
            </div>
          </div>
          <div className="w-full">
            <Marquee autoFill={true} speed={10}>
              {[
                'ENTREPRENEUR',
                'PROGRAMMER',
                'ASPIRING ENGINEER',
                'DEVELOPER',
                'AVIATION ENTHUSIAST',
                'DESIGNER',
                'UI/UX DESIGNER',
              ].map((item, index) => (
                <div className="flex items-center" key={index}>
                  <h1 className="marqueeText font-skeina text-md">{item}</h1>
                  <div className="spin mx-5">
                    <FontAwesomeIcon icon={icon({ name: 'fan' })} />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        <section ref={workscontainer} className='flex flex-col md:my-[25vh]'>
          <div className='px-5 md:mx-auto md:max-w-[30vw] w-full py-[]'>
            <h1 className='text-start text-[5vh] font-maelstrom my-5'>INTERESTED?</h1>
            <h3 className='text-end font-glorify text-[2vh]'>I DON'T ANY PUBLIC PROJECTS YET, BUT YOU CAN CHECK OUT SOME OF MY AND MY MATES PROJECTS BELOW</h3>
          </div>
          <div class="mt-[10vh] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
            <section ref={works1image} class="flex justify-center items-center relative">
              <div class="ml-auto mr-4 aspect-video bg-black h-[30vh] flex justify-center items-center">
                <a target="_blank" href="https://v1.cmcdev.net">
                  <img src={'images/portfolio_v1.png'} />
                </a>
              </div>
            </section>
            <section ref={works1text} class="border-l p-4">
              <h1 class="text-[3rem] font-glorify">
                Portfolio Version 1
              </h1>
              <p className='text-[2rem] font-skeina text-clip'>This was my first portfolio project & my first time being slightly ambitious with my limits.<br/><br/>This project taught me how to use <u><a href='https://particles.js.org/' target="_blank" className='text-white'>particles.js</a></u> and was my first proper use of animations.</p>
            </section>
          </div>
          <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mt-[15vh]'>
            <section ref={works2text} className='justify-center items-center text-end mr-10'>
              <h1 class="text-[3rem] font-glorify">
                Ollie's Portfolio
              </h1>
              <p className='text-[2rem] font-skeina text-clip'>
                This is my mate Ollie's portfolio.<br/>Check it out
              </p>
            </section>
            <section ref={works2image} className='border-l p-4'>
              <div className='mr-auto ml-4 aspect-video bg-black h-[30vh] flex justify-center items-center'>
                <a target="_blank" href="https://oliver.cmcdev.net">
                  <img src={'images/ollies_portfolio.png'} />
                </a>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
