const { reverse } = require('dns');
const { resolve } = require('path');
const readline = require('readline');
const { isArrayBufferView } = require('util/types');

function input(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        })
    })
}

//enkripsi reverse word
function reverseWord(str) {
    let hasil = ''
    for (let i = str.length - 1; i >= 0; i--) {
        hasil += str[i]
    }
    return hasil
}

//enkripsi tukar besar kecil
function setLowerUpperCase(str) {
    let hasil = ''
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(char === char.toUpperCase()){
            hasil += char.toLowerCase();
        }else{
            hasil += char.toUpperCase()
        }
    }
    return hasil
}

//enkripsi vokal
function changeVocals(str) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let hasil = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let lowidx = lower.indexOf(char);
        let upidx = upper.indexOf(char);
        if ((char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o') && lowidx !== -1) {
            hasil += lower[(lowidx + 1)]
        } else if ((char === 'A' || char === 'I' || char === 'U' || char === 'E' || char === 'O') && upidx !== -1) {
            hasil += upper[(upidx + 1)]
        }else {
            hasil += char
        }
    }
    return hasil
}

//fungsi gabungan enkripsi
function encrypt(str) {
    const vokal = changeVocals(str);
    const swapped = setLowerUpperCase(vokal);
    const reversed = reverseWord(swapped);
    return reversed;
}


const enkripsi = encrypt('KriPtoGraFI')

// fungsi utama untuk kuis
async function main() {
    console.log('======================================')
    console.log('   TEKA-TEKI KRIPTOGRAFI SEFERHANA    ')
    console.log('======================================')
    console.log('')

    while (true) {
    console.log('Soal 1. SWAP REVERSE WORD')
    console.log('AKIl > Lika')
    console.log('Chipertext: DLROw OLLEh')
    console.log('Tugas: Deckripsi pesan diatas')
        const soal1 = await input('Jawaban Kamu: ')
        if (soal1 === 'Hello World') {
            console.log('Selamat kamu benar!');
            console.log('');
            break
        } else {
            console.log('');
            console.log('Jawaban kamu kurang tepat');
            console.log('HINT: 1. Ubah huruf kecil ke besar dan sebaliknya');
            console.log('HINT: 2. Balik katanya');
            console.log('');
        }
    }
    while (true) {
    console.log('Soal 2. SUBSTITUSI VOKAl')
    console.log('cihuy > yvhjc');
    console.log('Chipertext: jnfprmbtjkb')
    console.log('Tugas: Deckripsi pesan diatas')
        const soal2 = await input('Jawaban Kamu: ')
        if (soal2 === 'informatika') {
            console.log('Selamat kamu benar!');
            console.log('');
            break
        } else {
            console.log('');
            console.log('Jawaban kamu kurang tepat');
            console.log('HINT: Ubah huruf vokal a > b, i > j, u > v, e > f, o > p');
            console.log('');
        }
    }
    while (true) {
    console.log('Soal 3. ENCRYPT')
    console.log('Informatika > BKJTBMRPFNj')
    console.log('Chipertext: KriPtoGraFI')
    console.log('Tugas: Enkripsi pesan diatas')
        const soal3 = await input('Masukan kode enkripsinya: ')
        if (soal3 === enkripsi) {
            console.log('Selamat kamu benar!');
            console.log('');
            console.log('');
            break
        } else {
            console.log('');
            console.log('Jawaban kamu kurang tepat ');
            console.log('HINT: IKUTI SOAL 1 DAN 2');
            console.log('');
        }
    }
}

main();
