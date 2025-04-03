import { Database, Github, Infinity, Laptop, Linkedin, Mail } from "lucide-react";
import { Card } from "../../components/card";
import { Links } from "../../components/links";

export function Home() {
    return (
        <main>
            <div className="bg-[url('/Intro.png')] bg-cover bg-center h-screen flex justify-center items-center">
                <h1 className="text-text-primary text-6xl">BYTE Group</h1>
            </div>

            <div className="h-[50vh] max-lg:h-screen bg-back-secondary flex justify-center items-center flex-col gap-5">
                <div className="text-center">
                    <h3 className="text-title">Nossos Serviços</h3>
                    <h2 className="text-text-primary font-bold text-xl">Como podemos ajudar no seu negócio</h2>
                </div>

                <div className="flex gap-5 max-lg:flex-col">
                    <Card
                        icon={<Laptop size={48} className="text-computer" />}
                        text="Websites e Aplicativos"
                        detail="Desenvolvimento de interfaces"
                    />

                    <Card
                        icon={<Database size={48} className="text-banco" />}
                        text="API e banco de dados"
                        detail="Criação de serviços do sistema"
                    />

                    <Card
                        icon={<Infinity size={48} className="text-devops" />}
                        text="DevOps"
                        detail="Gestão e infraestrutura da aplicação"
                    />
                </div>
            </div>

            <div className="bg-[url('Background_Contacts.png')] bg-cover bg-center h-screen flex flex-col justify-center items-center gap-5">
                <div className="text-center">
                    <h3 className="text-computer text-lg">Contato</h3>
                    <h1 className="text-text-primary text-2xl font-bold">Gostou do nosso trabalho?</h1>
                    <h2 className="text-detail">Entre em contato ou acompanhe as minhas redes sociais!</h2>
                </div>

                <div className="flex flex-col justify-center items-center gap-5">
                    <Links
                        icon={<Linkedin size={28} className="text-link-text" />}
                        text="Linkedin"
                        rede="https://github.com/B-Y-T-E-group"
                    />

                    <Links
                        icon={<Github size={28} className="text-link-text" />}
                        text="GitHub"
                        rede="https://github.com/B-Y-T-E-group"
                    />

                    <Links
                        icon={<Mail size={28} className="text-link-text" />}
                        text="E-mail"
                        rede="https://github.com/B-Y-T-E-group"
                    />
                </div>
            </div>
        </main>
    )
}