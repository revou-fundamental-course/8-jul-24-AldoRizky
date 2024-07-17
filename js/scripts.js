document.getElementById("button-submit").addEventListener('click', function() {
    calculateBMI();
});


document.getElementById("button-reset").addEventListener('click', function() {
    document.getElementById('input-berat-badan').value = "";
    document.getElementById('input-tinggi-badan').value = "";
    document.getElementById('input-usia').textContent = "";
    document.getElementById('skor-bmi').textContent = "";
    document.getElementById('kategori-bmi').textContent = "";
    document.getElementById('range-bmi').textContent = "";
    document.getElementById('deskripsi-kategori').textContent = "";
    document.getElementById('saran').textContent = "";
});


function calculateBMI() {
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100; 
    const bmi = weight / (height * height);

    let kategori = "";
    let deskripsi = "";
    let range = "";
    let saran = "";
    
    if (bmi < 18.5) {
        kategori = "Berat badan kurang";
        deskripsi = "Anda berada dalam kategori berat badan kurang.";
        range = "dibawah 18.5";
        saran = "Tingkatkan berat badan dengan mengatur kebutuhan kalori harian dan rutin berolahraga.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Berat badan normal";
        deskripsi = "Anda berada dalam kategori berat badan normal.";
        range = "18.5 - 24.9";
        saran = "Pertahankan berat badan anda. Jaga pola makan yang cukup dan tetap rutin berolahraga.";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Berat badan berlebih";
        deskripsi = "Anda berada dalam kategori berat badan berlebih.";
        range = "25 - 29.9";
        saran = "Turunkan berat badan anda. Mulai rutin berolahraga dan mengatur kebutuhan kalori harian.";
    } else {
        kategori = "Obesitas";
        deskripsi = "Anda berada dalam kategori obesitas.";
        range = "lebih dari 29.9";
        saran = "Segera turunkan berat badan dan konsultasikan ke dokter untuk penanganan lebih lanjut.";
    }

    document.getElementById('skor-bmi').textContent = bmi.toFixed(1);
    document.getElementById('kategori-bmi').textContent = kategori;
    document.getElementById('range-bmi').textContent = "Hasil BMI "+range;    
    document.getElementById('deskripsi-kategori').textContent = deskripsi;
    document.getElementById('saran').textContent = saran;    
}