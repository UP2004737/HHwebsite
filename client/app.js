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
        const figMemList = document.createElement('figure');
        const figcapMemList = document.createElement('figcaption');
        figcapMemList.textContent = member.name;
        figcapMemList.className = 'figcapMemList';
        figcapMemList.dataset.name = member.name;
        figcapMemList.dataset.course = member.course;
        figcapMemList.dataset.year = member.year;
        figcapMemList.dataset.DoB = member.DoB;
        figcapMemList.dataset.funFact = member.funFact;
        figcapMemList.addEventListener('click', showDetails);
        figMemList.append(figcapMemList);
        list.append(figMemList);
    }
}

function showDetails(e) {
    el.memberDetails.innerHTML = "";
    const memberName = e.target.dataset.name;
    const memberCourse = e.target.dataset.course;
    const memberYear = e.target.dataset.year;
    const memberDoB = e.target.dataset.DoB;
    const memberFunFact = e.target.dataset.funFact;
    
    const figMemDetails = document.createElement('figure');
    const figcapMemDetails = document.createElement('figcaption');
    figcapMemDetails.className = 'figcapMemDetails';
    figcapMemDetails.textContent = "\n" + memberName + "\n" + memberCourse + "\n" + memberYear + "\n" + calculateAge(memberDoB) + "\n" + memberFunFact;
    figMemDetails.append(figcapMemDetails);
    el.memberDetails.append(figMemDetails);
}

function calculateAge(dob) {
    let dateOfBirth = new Date(dob);
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
