document.addEventListener("DOMContentLoaded", function() {
    const sesionesContainer = document.querySelector(".sesiones");
    

    // Datos de las sesiones
    const sesionesData = [
        { imagen: "img/img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/r/personal/s01301a_ms_upla_edu_pe/Documents/Parcial_1.docx?d=w013d8a550ae6401e9371f16b6f3009ff&csf=1&web=1&e=FHP9qD", archivo: "docs/Parcial_1.pdf", nombreArchivo: "Parcial_1.pdf" },
        { imagen: "img/img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EUGDECtHs9BHsxSVp45ny6cBoL7aV_EDsc5MSV0CmBOwCg?e=MFjMzV", archivo: "docs/Parcial_2pdf", nombreArchivo: "Parcial_2.pdf" },
        { imagen: "img/img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EUGDECtHs9BHsxSVp45ny6cBoL7aV_EDsc5MSV0CmBOwCg?e=MFjMzV", archivo: "docs/Parcial_2.pdf", nombreArchivo: "Parcial_2.pdf" },
        { imagen: "img/img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/ESI6GTaR0v1No_dEWp2AIooB0sVwqFmN6uD9Vld7MdhgWw?e=lfzwMz", archivo: "docs/Parcial_4.pdf", nombreArchivo: "Parcial_4.pdf" },
        { imagen: "img/img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EWfnG8_HVW1ClAEuSddhwgsBjLoSHiXFlAjw82m2CbHUxA?e=EAtbPw",  archivo: "docs/Parcial_5.pdf", nombreArchivo: "Parcial_5.pdf" },
        { imagen: "img/img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EW3WtpFERQ1GtLEoqlAQTvUBolP3ggo1lolh06DSdOehgg?e=Qe21oO", archivo: "docs/Parcial_6.pdf", nombreArchivo: "Parcial_6.pdf" }
    ];

    // Generar sesiones dinámicamente
    
    sesionesData.forEach((sesion, index) => {
        let sesionDiv = document.createElement("div");
        sesionDiv.classList.add("sesion");
        sesionDiv.innerHTML = `
            <p>Sesión ${index + 1}</p>
            <a href="${sesion.enlace}" target="_blank" rel="noopener noreferrer">
                <img src="${sesion.imagen}" alt="Documento">
            </a>
            <a href="${sesion.archivo}" download="${sesion.archivo}" class="boton-descarga">Descargar</a>
        `;
        sesionesContainer.appendChild(sesionDiv);
    });
    document.querySelectorAll(".boton-descarga").forEach(boton => {
        boton.addEventListener("click", function() {
            const enlaceArchivo = this.getAttribute("data-enlace");
            const nombreArchivo = this.getAttribute("data-nombre");

            const link = document.createElement("a");
            link.href = enlaceArchivo;
            link.setAttribute("download", nombreArchivo);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});