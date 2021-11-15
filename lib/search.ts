export function search(title: string, query: string) {
    const withing = quitarAcentos(title);
    const res = withing.toLowerCase().includes(query);
    return res;
}

export function format(query: string) {
    const withing = quitarAcentos(query.toLowerCase());
    const carac = withing.replace(/\W/g, " ");
    return carac;
}

export function quitarAcentos(query: string) {
    return query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}