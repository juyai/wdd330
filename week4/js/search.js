const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`you searched for: ${input.value}`);
    event.preventDefault();
}

const input = form.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'));

//input.addEventListener('blur', () => alert('blurred'));

//input.addEventListener('change', () => alert('changed'));

//input.value = 'search Here';
/*input.addEventListener('focus', function(){
    if(input.value === 'search Here') {
        input.value = '';
    }
},false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'search here';
    }
}, false);*/