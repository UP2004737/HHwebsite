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

let navLinks = document.getElementById("navLinks");
