import React from "react";
import Image from "next/image";


export default function Skills() {
    return(
        <>
         <div className="skillsContainer">
                <h1 className="title mb-20">Habilidades</h1>

                <div className="cards">
                    <div className="box">
                        <p>HTML5</p>
                        <Image alt="HTML" src='/html.png' width={40} height={40} />
                    </div>
                    <div className="box">
                        <p>React.js</p>
                        <Image alt="React" src='/react.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>React - N</p>
                        <Image alt="React Native" src='/reactNative.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Tailwind</p>
                        <Image alt="Tailwind" src='/tailwind.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>TypeScript</p>
                        <Image alt="TypeScript" src='/typescript.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Redux</p>
                        <Image alt="Redux" src='/redux.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>JavaScript</p>
                        <Image alt="JavaScript" src='/javascript.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Node.js</p>
                        <Image alt="Node" src='/node-js.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>CSS</p>
                        <Image alt="CSS" src='/css.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Vue.js</p>
                        <Image alt="Vue" src='/vue.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Next.js</p>
                        <Image alt="Next" src='/nextjs.svg' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Python</p>
                        <Image alt="Python" src='/python.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>MySQL</p>
                        <Image alt="MySQL" src='/mysql.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Git</p>
                        <Image alt="Git" src='/git.svg' width={50} height={50} />
                    </div>
                </div>

            </div>
        </>
    );
}