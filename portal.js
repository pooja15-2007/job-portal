"use strict";
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Bangalore",
        salary: "₹12 LPA",
        role: "Frontend",
        type: "Fulltime"
    },
    {
        id: 2,
        title: "Backend Engineer",
        company: "Amazon",
        location: "Hyderabad",
        salary: "₹15 LPA",
        role: "Backend",
        type: "Remote"
    },
    {
        id: 3,
        title: "Fullstack Developer",
        company: "Microsoft",
        location: "Chennai",
        salary: "₹18 LPA",
        role: "Fullstack",
        type: "Hybrid"
    },
    {
        id: 4,
        title: "Frontend Engineer",
        company: "Infosys",
        location: "Remote",
        salary: "₹7 LPA",
        role: "Frontend",
        type: "Remote"
    }
];
const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const roleFilter = document.getElementById("roleFilter");
const locationFilter = document.getElementById("locationFilter");
function renderJobs(jobArray) {
    jobList.innerHTML = "";
    jobArray.forEach(job => {
        const div = document.createElement("div");
        div.className = "job";
        div.innerHTML = `

<h3>${job.title}</h3>
<p><b>${job.company}</b></p>
<p>${job.location}</p>
<p>${job.salary}</p>

<div class="tags">
<span class="tag">${job.role}</span>
<span class="tag">${job.type}</span>
</div>

<button class="apply">Apply Now</button>

`;
        jobList.appendChild(div);
    });
}
function filterJobs() {
    const search = searchInput.value.toLowerCase();
    const role = roleFilter.value;
    const location = locationFilter.value;
    const filtered = jobs.filter(job => {
        return ((job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search)) &&
            (role === "all" || job.role === role) &&
            (location === "all" || job.location === location));
    });
    renderJobs(filtered);
}
searchInput.addEventListener("input", filterJobs);
roleFilter.addEventListener("change", filterJobs);
locationFilter.addEventListener("change", filterJobs);
renderJobs(jobs);
