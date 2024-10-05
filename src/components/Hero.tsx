import '@/app/globals.css';
import { useState } from 'react';

//funcion para copiar el email al clickear el mensaje
const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = 'gusta.quiroga033@gmail.com'; // mi dirección de correo electrónico
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reiniciar el estado de 'copied' después de 3 segundos
    };

    //cuerpo del footer
    return (
        <footer className="bg-gray-800 bg-transparent text-white text-center py-4">
        
            <p> {/*mensaje de mi autoria y copar email */}
                Developed by Gustavo Quiroga |{' '}
                <span className="cursor-pointer underline" onClick={handleCopyEmail}>
                    Click para copiar mi email
                </span>
                
            </p>
            {/* notificacion de mensaje copiado */}
            {copied && <span className="ml-2 text-gray-500">Copiado al portapapeles</span>}

            {/* iconos con info de contacto */}
            
        </footer>
    );
};

export default Footer;