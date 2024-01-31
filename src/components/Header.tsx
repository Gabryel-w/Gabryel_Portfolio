import Link from 'next/link';


export default function Header() {
    return (
        <>
            <div className="header fixed top-0 left-0 right-0 z-50 flex justify-between bg-gray-1000 p-8">
                <h1 className="text-2xl title ">G.W Portfólio</h1>

                <div>
                    <nav>
                        <ul className='flex'>
                            <li>
                                <Link href="#Inicio">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="#Sobre">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="#Projetos">
                                    Projetos
                                </Link>
                            </li>
                            <li>
                                <Link href="#Contato">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>



            </div>








        </>
    );
}