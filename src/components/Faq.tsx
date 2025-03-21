"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Quais são seus objetivos como desenvolvedor nos próximos anos?",
        answer:
            "Nos próximos anos, quero me tornar um desenvolvedor full stack ainda mais sólido, com foco em arquitetura escalável e boas práticas de desenvolvimento. Além disso, pretendo me aprofundar em liderança técnica para atuar como tech lead ou arquiteto de software, ajudando equipes a construir soluções eficientes e bem estruturadas.",
    },
    {
        question: "Você trabalha com projetos freelance?",
        answer:
            "Sim! Estou disponível para projetos freelance e desenvolvimento sob demanda.",
    },
    {
        question: "Como você aborda problemas complexos de código?",
        answer:
            "Minha abordagem começa com a compreensão total do problema. Divido-o em partes menores e tento reproduzir o erro em um ambiente isolado. Em seguida, pesquiso possíveis soluções, utilizo debugging eficiente e, se necessário, consulto documentação ou a comunidade.",
    },
    {
        question: "Quais desafios técnicos você já enfrentou e como os resolveu?",
        answer:
            " Em um dos meus projetos, precisei otimizar a performance de um dashboard que estava carregando dados de forma ineficiente. Identifiquei gargalos na requisição ao banco de dados e implementei cache no frontend, além de ajustar as consultas no backend. Como resultado, reduzi o tempo de carregamento em 60%, melhorando a experiência do usuário.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-6 bg-gray-100 bg">
            <div className="max-w-3xl mx-auto text-center">
                <div className="flex itens-center text-center justify-center mb-10">
                    <h1 className="text-5xl font-bold mb-6 border-l-4 border-blue-600 pl-4 text-gray-800">
                        Perguntas frequentes
                    </h1>
                </div>
                <p className="text-lg text-gray-600">
                    Aqui estão algumas dúvidas comuns sobre meu trabalho e experiência.
                </p>
            </div>

            <div className="max-w-2xl mx-auto mt-10 space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl p-5">
                        <button
                            className="w-full flex justify-between items-center text-left text-gray-800 font-semibold text-lg"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-6 h-6 text-gray-600" />
                            </motion.div>
                        </button>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
