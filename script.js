const hamEl = document.querySelector('.ham-icon');
const sideBarEl = document.getElementById('sidebar');
const sideBarElMin = document.getElementById('sidebar-min');

const toggleSideBar = () => {
    if (!sideBarEl.classList.contains('hide')) {
        sideBarEl.classList.add('hide');
    } else {
        sideBarEl.classList.remove('hide');
    }
};
hamEl.addEventListener('click', function () {
    if (sideBarEl.classList.contains('hide')) {
        sideBarEl.classList.remove('hide');
        sideBarElMin.classList.add('hide');
    } else {
        sideBarEl.classList.add('hide');
        sideBarElMin.classList.remove('hide');
    }
});

/**
 * * important
 * ! error
 * TODO : some left work
 * ? some questions
 * // line through
 */
