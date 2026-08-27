"use client";

import { useEffect, useState } from "react";

/**
 * O ano do rodapé.
 *
 * A home é estática, então um `new Date()` num componente de servidor é
 * avaliado no build e congela ali até o próximo deploy. Este componente
 * renderiza o ano do build no SSR e o corrige no cliente após montar.
 */
export default function CurrentYear() {
    const [year, setYear] = useState(() => new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return <span suppressHydrationWarning>{year}</span>;
}
