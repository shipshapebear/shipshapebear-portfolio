import React, { useEffect, useRef, useState } from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { useWasSeen } from '@utils/useWasSeen'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import useWindowSize from '@utils/WindowSize';
import { CSS3Logo } from "@images/css3-logo.png"
import { useLenis } from '@studio-freight/react-lenis';
import { AnimatePresence, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const MainContent = ({ data }) => {

    const [wasSeen, wasSeenRef] = useWasSeen()
    const { width } = useWindowSize()
    const lenis = useLenis()

    // useEffect(() => {
    //     if (wasSeen) {
    //         console.log(`test 2: ${wasSeen}`)
    //     }
    // }, [wasSeen])

    let component = useRef<HTMLDivElement>(null);
    let items = useRef<HTMLDivElement>(null)
    let container = useRef<HTMLDivElement>(null)
    let textSectionRef = useRef<HTMLDivElement>([])


    type Container = {
        container: number
        items: number
    }
    const [containerHeights, setContainerHeights] = useState<Container>({
        container: 0,
        items: 0
    })

    useEffect(() => {
        setContainerHeights({
            container: container.current?.clientHeight as number,
            items: textSectionRef.current?.[0]?.clientHeight as number
        })

    }, [width])


    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".pin-spacer", {
                scrollTrigger: {
                    trigger: ".pin-spacer",
                    start: 'top 260px',
                    pin: true,
                    pinSpacing: true,
                    markers: false,
                    end: `+=${containerHeights.container - containerHeights.items}`,
                }
            });
        }, component); // <- selector scoping
        return () => ctx.revert();
    }, [containerHeights]);

    const [itemIndex, setItemIndex] = useState(0)
    const snapControl = {
        snapTo: 1,
        duration: 0.2,
        delay: 0,
        ease: "easeInOut",
    }

    useEffect(() => {
        const ctx = gsap.context((self) => {
            const textBoxs = self.selector('.text-section');
            gsap.to(".pin-spacer", {
                scrollTrigger: {
                    trigger: ".pin-spacer",
                    start: 'top 260px',
                    pin: true,
                    pinSpacing: true,
                    markers: false,
                    end: `+=${containerHeights.container - containerHeights.items}`,
                }
            });
            textBoxs.forEach((box, index) => {
                const isLastChild = index === textSectionRef.current?.length - 1;
                gsap.to(box, {
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 260px',
                        end: `+=${containerHeights.items}`,
                        scrub: true,
                        markers: false,
                        onEnter: (self) => {
                            if (isLastChild) return                          
                            setItemIndex((itemIndex) => itemIndex + self.direction)
                        }
                        ,
                      
                        onLeaveBack: (self) => {
                            if (isLastChild) return
                            setItemIndex((itemIndex) => itemIndex + self.direction)
                        },
                        snap: isLastChild ? 0 : snapControl
                    },
                });
            });
        }, container);

        return () => ctx.revert();
    }, [lenis]);



    return (
        <>
            <div id="projects" className="mt-20 grid grid-cols-1 max-w-[80vw] scroll-p-[50px] mx-auto lg:grid-cols-12 gap-4 2xl:gap-6 items-start -my-4" ref={component}>
                <div className="col-span-6 relative w-full  hidden lg:block">
                    <AnimatePresence>
                        <div className='pin-spacer'>
                            <div className="pb-[100%] w-full hidden lg:block"></div>
                            {data.prismicProjects.data.project_items.map((project, index) => {
                                if (index === itemIndex)
                                    return (
                                        <motion.div
                                            key={project.project_image.url}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                            exit={{ opacity: 0 }} className="sticky-media absolute inset-0 py-4">
                                            <div className="rounded-2xl border-2 relative overflow-hidden pb-0 h-full boder-border">
                                                <GatsbyImage image={project.project_image.gatsbyImageData} className="object-cover h-full" alt="test" placeholder="blur" />
                                            </div>
                                        </motion.div>)
                            })}
                        </div>
                    </AnimatePresence>
                </div>


                <div className="col-span-6" ref={container}>
                    {data.prismicProjects.data.project_items.map((project, index) =>
                        <div className="text-section relative group" ref={textSectionRef} key={index} ref={(element) => { textSectionRef.current[index] = element }} >
                            <div className="pb-[100%] w-full hidden lg:block">
                            </div>
                            <div className="lg:absolute lg:inset-0 py-4">
                                <div className="bg-background mt-6 lg:mt-0 rounded-2xl border-2 flex flex-col justify-center h-full lg:py-0 md:px-12 border-gray-15 font-[12vw]">
                                    {project.project_description.text}
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
            <div className='h-screen'>
            </div>
        </>
    )
}

export default MainContent