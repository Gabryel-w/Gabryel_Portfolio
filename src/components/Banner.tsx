import Image from "next/image";




export default function Banner() {
    return (
        <>
            <div className="Banner flex">
                <div className="container flex m-60">
                    <div className="Text-Container ">
                        <h1>Olá, eu sou o</h1>
                        <span> Gabryel Willers</span>
                        <p className="color-gray">Desenvolvedor Front End</p>

                       

                    </div>

                    <div>
                        <div className="mx-56 home-img">
                            <img src="/Logo.png" alt="Logo Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}