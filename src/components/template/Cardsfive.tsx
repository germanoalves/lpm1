export default function Cardfive() {
    return (
        <div className="flex justify-center items-center md:max-w-7xl mx-auto my-20  md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2  justify-center rounded-2xl place-items-center shadow-2xl md:px-24 md:py-10 md:gap-24">
                <div>
                    <iframe className=" rounded-lg w-screen px-4 md:px-0 md:w-96 md:h-96"  src="https://www.youtube.com/embed/0abPNVOt_-U?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="px-3 my-6">
                    <h2 className="text-blue font-mt font-bold text-tth1 mb-4">Com o Maestrus você tem o poder do ensino disponível a qualquer hora, em qualquer lugar.</h2>
                    <p className="leading-6 text-ftsqr  font-pp text-titles text-gray">Conheça tudo o que o Maestrus pode lhe oferecer em menos de 10 minutos.
                    </p>
                </div>
            </div>
        </div>
    )
}