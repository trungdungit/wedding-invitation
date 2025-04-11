"use client"

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const timelines = [
    {
        title: "Tiệc thân mật nhà trai",
        description: "Tổ chức vào lúc 19h00 ngày 12.4.2025 tại tư gia nhà trai",
        url: "https://maps.app.goo.gl/WK8ts8XoD3b1nfar8",
        place: "Số 262 đường Trần Phú, Hồng Lĩnh, Hà Tĩnh"
    },
    {
        title: "Tiệc thân mật nhà gái",
        description: "Tổ chức vào lúc 19h00 ngày 12.4.2025 tại tư gia nhà gái",
        url: "https://maps.app.goo.gl/EiaPhGxFR6PLLh9A8",
        place: "Số 50A đường 3-2, Hồng Lĩnh, Hà Tĩnh"
    },
    {
        title: "Lễ Vu quy",
        description: "Tổ chức vào lúc 9h00 ngày 13.4.2025 tại tư gia nhà gái",
        url: "https://maps.app.goo.gl/EiaPhGxFR6PLLh9A8",
        place: "Số 50A đường 3-2, Hồng Lĩnh, Hà Tĩnh"
    },
    {
        title: "Lễ thành hôn",
        description: "Tổ chức vào lúc 11h00 ngày 13.4.2025 tại Khách sạn Việt Thái",
        url: "https://maps.app.goo.gl/Jpz4xraFTEiPhgKx5",
        place: "Số 104 Nguyễn Ái Quốc, Hồng Lĩnh, Hà Tĩnh"
    }
]

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true
    }
})

export default function OurStory() {

    const stagger: Variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.2,
                staggerChildren: 0.5,
                type: "spring"
            },
        }
    }

    const bluryEffect: Variants = {
        initial: {
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.95
        },
        animate: {
            opacity: 1,
            filter: "blur(0)",
            scale: 1,
            transition: {
                duration: 1
            }
        }
    }

    const fadeIn: Variants = {
        initial: {
            opacity: 0,
            y: "40px",
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                delay: 0.4
            }
        }
    }


    return (
        <section className="container-box2 mt-betweenSectionMd xl:mt-betweenSection">
            <motion.h2
                className="px-4 md:px-0 heading-4 md:heading-3 xl:heading-2 font-dancing-script font-bold text-center"
                {...anim(bluryEffect)}
            >
                Trân trọng kính mời Bạn tới dự bữa Tiệc thân mật & Lễ Thành hôn chung vui cùng chúng tôi
            </motion.h2>
            <motion.h2
                className="px-4 md:px-0 heading-4 md:heading-3 xl:heading-2 font-dancing-script font-bold text-center"
                {...anim(bluryEffect)}
            >
                Trung Dũng & Gia Khánh
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-betweenBoxMd xl:mt-betweenBox gap-14 md:gap-6 lg:gap-[4.75rem] xl:gap-[10.4375rem]">
                <motion.div className="px-4 md:px-0 space-y-4 md:space-y-[2.375rem] col-span-1" {...anim(stagger)}>
                    {timelines.map((timeline, i) => (
                        <Timeline
                            key={i}
                            title={timeline.title}
                            description={timeline.description}
                            place={timeline.place}
                            url={timeline.url}
                            delay={0.2 * (i + 1)}
                        />
                    ))}
                </motion.div>
                <motion.div className="w-full xl:w-[527px] h-[461px]" {...anim(fadeIn)}>
                    <Image
                        src="/photos/our-story.jpg"
                        width={1200}
                        height={1200}
                        alt="our-story-photo"
                        quality={100}
                        className="size-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    )
}



type Props = {
    title: string;
    description: string;
    place: string;
    url: string;
    delay: number
}

function Timeline({ title, description, place, url, delay }: Props) {

    const variants: Variants = {
        initial: {
            opacity: 0,
            x: "-50px"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay,
                type: "spring",
                bounce: 0
            }
        }
    }

    return (
        <motion.div
            className="flex justify-start gap-2 md:gap-x-4"
            {...anim(variants)}
        >
            <GoDotFill className="text-base md:text-lg lg:text-xl translate-y-1" />
            <div className="space-y-2 lg:space-y-4">
                <h4 className="text-base md:heading-4 font-dancing-script font-bold">{title}</h4>
                <p className="text-xs md:text-base font-roboto-slab">{description}</p>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs md:text-base font-roboto-slab text-blue-500 underline"
                >
                    {place}
                </a>
            </div>
        </motion.div>
    )
}