import { ReactNode } from "react"

interface CardProps {
    icon: ReactNode
    text: String
    detail: String
}

export function Card({ text, detail, icon }: CardProps) {
    return (
        <div className="border border-border p-5 rounded-lg flex flex-col gap-2.5">
            {icon}
            <h1 className="text-text-primary font-bold">{text}</h1>
            <h3 className="text-text-primary font-normal">{detail}</h3>
        </div>
    )
}