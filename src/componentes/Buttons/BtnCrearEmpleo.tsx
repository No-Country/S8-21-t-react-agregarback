import { Link } from "react-router-dom";

export default function BtnCrearEmpleo() {
    return (
        <Link 
            to={'/'} 
            className="bg-zinc-300 p-4 rounded-xl block w-48 text-center"
        >
            Crear nuevo empleo
        </Link>
    )
}