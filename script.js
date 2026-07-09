let cart = [];
let total = 0;

function tambah(nama, harga){

cart.push({
nama:nama,
harga:harga
});

total += harga;

tampil();

}

function tampil(){

let isi = "";

cart.forEach((item,i)=>{

isi += `
<li>
${item.nama}
<span>
Rp ${item.harga.toLocaleString()}
<button onclick="hapus(${i})">X</button>
</span>
</li>
`;

});

document.getElementById("keranjang").innerHTML = isi;

document.getElementById("total").innerHTML = total.toLocaleString();

}

function hapus(index){

total -= cart[index].harga;

cart.splice(index,1);

tampil();

}

function checkout(){

if(cart.length==0){

alert("Keranjang masih kosong!");

return;

}

alert("Terima kasih telah berbelanja di Dina Bakery.\n\nTotal Bayar : Rp "+total.toLocaleString());

cart=[];

total=0;

tampil();

}