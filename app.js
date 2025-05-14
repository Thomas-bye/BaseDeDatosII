document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    const tasks = [
        { title: "Tarea 1", img: "img/tarea1.jpg", link: "tasks/tarea1.pdf" },
        { title: "Tarea 2", img: "img/tarea2.jpg", link: "tasks/tarea2.pdf" },
        { title: "Tarea 3", img: "img/tarea3.jpg", link: "tasks/tarea3.pdf" }
    ];

    tasks.forEach(task => {
        let taskElement = document.createElement("div");
        taskElement.classList.add("task");

        taskElement.innerHTML = `
            <img src="${task.img}" alt="${task.title}">
            <h3>${task.title}</h3>
            <a href="${task.link}" target="_blank">Ver tarea</a>
        `;
        
        gallery.appendChild(taskElement);
    });
});