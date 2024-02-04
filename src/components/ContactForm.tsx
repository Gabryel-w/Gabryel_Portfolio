"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function ContactForm() {
    const [state, handleSubmit] = useForm("mqkrpqyr");


    if (state.succeeded) {
        return <h1 className='text-center text-green-500 mt-56 '>Obrigado Pelo Contato !!</h1>;
    }

    return (
        <div className='mt-80'> 
            <section className=" backdrop-blur-md emailSec grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
                <div className="md:col-span-1">
                    <h1 className="text-xl font-bold text-white my-2">Contato</h1>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta.
                        Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para entrar em contato com você!
                    </p>
                </div>

                <div className="md:col-span-1">
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label className="text-white block mb-2 text-sm font-medium" htmlFor="Name">
                                Nome Completo
                            </label>
                            <input
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                id="name"
                                type="text"
                                name="name"
                            />
                        </div>

                        <div className='mb-6'>
                            <label className="text-white block text-sm mb-2 font-medium" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className='mb-6'>
                            <label className="text-white block text-sm mb-2 font-medium" htmlFor="email">
                                Assunto
                            </label>
                            <input
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                id="subject"
                                type="subject"
                                name="subject"
                            />
                        </div>

                        <div className='mb-6'>
                            <label className="text-white block text-sm mb-2 font-medium" htmlFor="message">
                                Mensagem
                            </label>
                            <textarea
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                id="message"
                                name="message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
