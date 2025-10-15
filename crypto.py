# enkripsi reverse word
def reverse_word(s):
    return s[::-1]


# enkripsi tukar besar kecil
def set_lower_upper_case(s):
    hasil = ''
    for char in s:
        if char.isupper():
            hasil += char.lower()
        else:
            hasil += char.upper()
    return hasil


# enkripsi vokal
def change_vocals(s):
    lower = 'abcdefghijklmnopqrstuvwxyz'
    upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    hasil = ''
    for char in s:
        if char in 'aiueo':
            idx = lower.index(char)
            hasil += lower[(idx + 1) % 26]
        elif char in 'AIUEO':
            idx = upper.index(char)
            hasil += upper[(idx + 1) % 26]
        else:
            hasil += char
    return hasil


# fungsi gabungan enkripsi
def encrypt(s):
    vokal = change_vocals(s)
    swapped = set_lower_upper_case(vokal)
    reversed_str = reverse_word(swapped)
    return reversed_str


enkripsi = encrypt('KriPtoGraFI')


print('======================================')
print('   TEKA-TEKI KRIPTOGRAFI SEFERHANA    ')
print('======================================\n')

while True:
    print('Soal 1. SWAP REVERSE WORD')
    print('AKIl > Lika')
    print('Chipertext: DLROw OLLEh')
    print('Tugas: Dekripsi pesan di atas')
    soal1 = input('Jawaban Kamu: ')
    if soal1 == 'Hello World':
        print('Selamat kamu benar!\n')
        break
    else:
        print('\nJawaban kamu kurang tepat')
        print('HINT: 1. Ubah huruf kecil ke besar dan sebaliknya')
        print('HINT: 2. Balik katanya\n')

while True:
    print('Soal 2. SUBSTITUSI VOKAL')
    print('cihuy > yvhjc')
    print('Chipertext: jnfprmbtjkb')
    print('Tugas: Dekripsi pesan di atas')
    soal2 = input('Jawaban Kamu: ')
    if soal2 == 'informatika':
        print('Selamat kamu benar!\n')
        break
    else:
        print('\nJawaban kamu kurang tepat')
        print('HINT: Ubah huruf vokal a > b, i > j, u > v, e > f, o > p\n')

while True:
    print('Soal 3. ENCRYPT')
    print('Informatika > BKJTBMRPFNj')
    print('Chipertext: KriPtoGraFI')
    print('Tugas: Enkripsi pesan di atas')
    soal3 = input('Masukan kode enkripsinya: ')
    if soal3 == enkripsi:
        print('Selamat kamu benar!\n\n')
        print('')
        break
    else:
        print('\nJawaban kamu kurang tepat')
        print('HINT: IKUTI SOAL 1 DAN 2\n')


