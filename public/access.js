function openModal(jobType) {
    const modal = document.getElementById("careerModal");
    const data = careerData[jobType];
    if (!modal || !data) return;

    document.getElementById("m-image").src = data.image;
    document.getElementById("m-title").textContent = data.title;
    document.getElementById("m-subtitle").textContent = data.subtitle;
    document.getElementById("m-desc").textContent = data.desc;
    document.getElementById("m-salary").textContent = data.salary;

    const skillsList = document.getElementById("m-skills");
    skillsList.innerHTML = "";

    data.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("careerModal");
    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.addEventListener("click", e => {
    const modal = document.getElementById("careerModal");
    if (e.target === modal) closeModal();
});
