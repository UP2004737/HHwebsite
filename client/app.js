const el = {};
let members;

async function loadMembers() {
    let members;
    const response = await fetch('members');
    if (response.ok) {
        members = await response.json();
    } else {
        members = [{msg: "Failed to load members"}];
    }
    return members;
}

function prepareHandles() {
    el.navLinks = document.querySelector("#navLinks");
    el.memberList = document.querySelector("#memberList");
    el.memberDetails = document.querySelector("#memberDetails");
}

function createMemberList(members, list) {
    list.innerHTML = "";

    for (const member of members) {
        const fig = document.createElement('figure');
        const figcap = document.createElement('figcaption');
        figcap.textContent = member.name;
        figcap.className = 'figcap';
        figcap.dataset.name = member.name;
        figcap.dataset.course = member.course;
        figcap.dataset.year = member.year;
        figcap.dataset.DoB = member.DoB;
        figcap.dataset.funFact = member.funFact;
        figcap.addEventListener('click', showDetails);
        fig.append(figcap);
        list.append(fig);
    }
}

function showDetails(e) {
    el.memberDetails.innerHTML = "";
    const memberName = e.target.dataset.name;
    const memberCourse = e.target.dataset.course;
    const memberYear = e.target.dataset.year;
    const memberDoB = e.target.dataset.DoB;
    const memberFunFact = e.target.dataset.funFact;
    
    const fig = document.createElement('figure');
    const figcap = document.createElement('figcaption');
    figcap.append(memberName + "\n");
    figcap.append(memberCourse + "\n");
    figcap.append(memberYear + "\n");
    figcap.append(calculateAge(memberDoB) + "\n");
    figcap.append(memberFunFact + "\n");
    fig.append(figcap);
    el.memberDetails.append(fig);
}

function calculateAge(dob) {
    let dateOfBirth = new Date(dob);
    console.log(typeof dateOfBirth);
    let diff_ms = Date.now() - dateOfBirth.getTime();
    let age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

async function init() {
    prepareHandles();
    members = await loadMembers();
    createMemberList(members, el.memberList);
}

window.addEventListener('load', init);
