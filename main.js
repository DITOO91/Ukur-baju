document.getElementById('hasil').addEventListener('click', calculateUkuranBaju);

function calculateUkuranBaju() {
  const beratBadanInput = document.getElementById('bb');
  const tinggiBadanInput = document.getElementById('tb');
  const result = document.getElementById('result');

  const berat = parseFloat(beratBadanInput.value);
  const tinggi = parseFloat(tinggiBadanInput.value);

  if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
    result.textContent = 'mohon masukan nilai yg benar!';
    result.style.color = 'red';
    return;
  }

  let kategori;
  if (berat <= 57 && tinggi <= 151) {
    kategori = 'Size S';
  } else if (berat <= 59 && tinggi <= 151) {
    kategori = 'Size M';
  } else if (berat <= 67 && tinggi <= 151) {
    kategori = 'Size M';
  } else if (berat <= 75 && tinggi <= 151) {
    kategori = 'Size L';
  } else if (berat >= 77 && tinggi <= 151) {
    kategori = 'Size XL';
  } else if (berat <= 62 && tinggi <= 157) {
    kategori = 'Size S';
  } else if (berat <= 70 && tinggi <= 157) {
    kategori = 'Size M';
  } else if (berat <= 79 && tinggi <= 157) {
    kategori = 'Size L';
  } else if (berat <= 84 && tinggi <= 157) {
    kategori = 'Size XL';
  } else if (berat >= 85 && tinggi <= 157) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 160) {
    kategori = 'Size S';
  } else if (berat <= 70 && tinggi <= 160) {
    kategori = 'Size M';
  } else if (berat <= 79 && tinggi <= 160) {
    kategori = 'Size L';
  } else if (berat <= 84 && tinggi <= 160) {
    kategori = 'Size XL';
  } else if (berat >= 85 && tinggi <= 160) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 165) {
    kategori = 'Size S';
  } else if (berat <= 70 && tinggi <= 165) {
    kategori = 'Size M';
  } else if (berat <= 81 && tinggi <= 165) {
    kategori = 'Size L';
  } else if (berat <= 84 && tinggi <= 165) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 165) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 169) {
    kategori = 'Size S';
  } else if (berat <= 71 && tinggi <= 169) {
    kategori = 'Size M';
  } else if (berat <= 81 && tinggi <= 169) {
    kategori = 'Size L';
  } else if (berat <= 89 && tinggi <= 169) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 169) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 173) {
    kategori = 'Size S';
  } else if (berat <= 71 && tinggi <= 173) {
    kategori = 'Size M';
  } else if (berat <= 81 && tinggi <= 173) {
    kategori = 'Size L';
  } else if (berat <= 89 && tinggi <= 173) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 173) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 176) {
    kategori = 'Size S';
  } else if (berat <= 71 && tinggi <= 176) {
    kategori = 'Size M';
  } else if (berat <= 81 && tinggi <= 176) {
    kategori = 'Size L';
  } else if (berat <= 89 && tinggi <= 176) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 176) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 179) {
    kategori = 'Size S';
  } else if (berat <= 71 && tinggi <= 179) {
    kategori = 'Size M';
  } else if (berat <= 81 && tinggi <= 179) {
    kategori = 'Size L';
  } else if (berat <= 89 && tinggi <= 179) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 179) {
    kategori = 'Size XXL';
  } else if (berat <= 62 && tinggi <= 182) {
    kategori = 'Size S';
  } else if (berat <= 71 && tinggi <= 182) {
    kategori = 'Size M';
  } else if (berat <= 81 && tinggi <= 182) {
    kategori = 'Size L';
  } else if (berat <= 89 && tinggi <= 182) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 182) {
    kategori = 'Size XXL';
  } else if (berat <= 75 && tinggi <= 186) {
    kategori = 'Size M';
  } else if (berat <= 88 && tinggi <= 186) {
    kategori = 'Size L';
  } else if (berat <= 90 && tinggi <= 186) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 186) {
    kategori = 'Size XXL';
  } else if (berat <= 75 && tinggi <= 191) {
    kategori = 'Size M';
  } else if (berat <= 88 && tinggi <= 191) {
    kategori = 'Size L';
  } else if (berat <= 90 && tinggi <= 191) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 191) {
    kategori = 'Size XXL';
  } else if (berat <= 75 && tinggi <= 194) {
    kategori = 'Size M';
  } else if (berat <= 88 && tinggi <= 194) {
    kategori = 'Size L';
  } else if (berat <= 90 && tinggi <= 194) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi <= 194) {
    kategori = 'Size XXL';
  } else if (berat <= 75 && tinggi >= 195) {
    kategori = 'Size M';
  } else if (berat <= 88 && tinggi >= 195) {
    kategori = 'Size L';
  } else if (berat <= 90 && tinggi >= 195) {
    kategori = 'Size XL';
  } else if (berat >= 90 && tinggi >= 195) {
    kategori = 'Size XXL';
  }

  result.innerHTML = `Ukuran Baju Kamu <span> ${kategori} </span>`;
  result.style.color = 'red';
}
