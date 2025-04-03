import { ExternalLink } from "lucide-react"
import { ReactNode } from "react"

interface LinkProps {
    icon: ReactNode
    text: string
    rede: string
}

export function Links({ text, icon, rede }: LinkProps) {
    function handleRedirection(rede: string) {
        window.open(rede, '_blank', "noopener,noreferrer")
    }

    return (
        <div className="w-[400px] flex items-center justify-between bg-link p-5 rounded-lg">
            <div className="flex items-center gap-2.5">
                {icon}
                <h3 className="text-link-text">{text}</h3>
            </div>

            <ExternalLink size={20} className="text-share cursor-pointer" onClick={() => handleRedirection(rede)} />
        </div>
    )
}