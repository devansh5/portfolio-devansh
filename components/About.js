import React from "react"
import Image from "next/image"
import profile from "../public/devavatar.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there,
                    </h1>
                    <div className="mt-6 tracking-wider  text-gray-800 dark:text-white font-mono">
                        <p className="mb-4">
                            I'm a software developer . Love to work in Javascript .
                            <br/>  
                            I am interested in developing scalable web application 
                            <br/> 
                            Right now , I'm learning golang and interested to deep dive into web 3.0 .
                            <br/>
                            Beside this , i love to teach and share my learnings .
                            <br/>
                            
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 ml-6 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={220}
                        height={230}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;