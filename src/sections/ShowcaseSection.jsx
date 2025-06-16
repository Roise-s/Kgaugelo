import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5}
        )
    }, [])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className="w-full">
         <div className="showcaselayout">
            {/* LEFT */}
            <div className="first-project-wrapper" ref={project1Ref}>
                <a href="https://geminipro-one-umber.vercel.app/" target='_blank'>
                    <div className="image-wrapper">
                    <img src='/images/azz.png' alt='Ryde' />
                    </div>
                    <div className="text-content">
                    <h2>
                        Kasi AI, a Large Language Model website.
                    </h2>
                    <p className='text-white-50 md:text-xl'>
                        This project is a simple text generator built using a large language model (LLM), basically an AI that’s really good at working with text. It's a web-based app where you enter a prompt, hit a button, and the AI gives you back a response. Could be a sentence, a paragraph, or more.
                    </p>
                </div>
                </a>
                
            </div>
            {/* RIGHT */}
            <div className="project-list-wrapper overflow-hidden">
                <a href="https://xoraa.vercel.app/" target='_blank'>
                    <div className="project" ref={project2Ref}>
                        <div className="">
                            <img src='/images/az.png' alt='Library Management Platform' />
                        </div>
                        <h2>Xora, a Modern UI/UX SaaS website.</h2>
                    </div>
                </a>

                <a href="https://zeenxumalo.vercel.app/" target='_blank'>
                    <div className="project" ref={project3Ref}>
                        <div className="">
                            <img src='/images/aza.png' alt='YC Directory' />
                        </div>
                        <h2>Zee Nxumalo's Website</h2>
                    </div>
                </a>
                
            </div>
         </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
