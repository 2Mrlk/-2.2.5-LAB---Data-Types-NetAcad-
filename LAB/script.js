let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

contacts.push({
    name: 'Gabriel Ganley',
    phone: '0000 222 5768',
    email: 'gabriel.ganley.freakseason@gmail.com'
});


let first = contacts[0];
let lastIndex = contacts.length - 1;
let last = contacts[lastIndex];

console.log(first);
console.log(last);


const grid = document.getElementById('contatos-grid');

contacts.forEach(c => {
    grid.innerHTML += `
        <div class="card">
            <h3>${c.name}</h3>
            <p><strong>Tel:</strong> ${c.phone}</p>
            <p><strong>Email:</strong> ${c.email}</p>
        </div>
    `;
});


document.getElementById('primeiro-contato').innerHTML = `<strong>Primeiro:</strong> ${first.name}`;
document.getElementById('ultimo-contato').innerHTML = `<strong>Último:</strong> ${last.name}`;