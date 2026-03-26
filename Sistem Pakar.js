function diagnosa() {

    // ambil semua checkbox
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let gejala = [];

    // ambil yang dicentang
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            gejala.push(checkboxes[i].value);
        }
    }

    console.log("Gejala dipilih:", gejala); // buat cek

    // RULE
    const rules = {
        A1: ["B1","B2"],
        A2: ["B3","B4","B5","B11","B12"],
        A3: ["B6","B7","B8","B10","B21","B22"],
        A4: ["B1","B3","B5","B9","B10","B12","B13"],
        A5: ["B10","B13","B14"],
        A6: ["B11","B15"],
        A7: ["B7","B12"],
        A8: ["B16","B17"],
        A9: ["B1","B3","B4","B5"],
        A10: ["B18","B19"],
        A11: ["B9","B20"],
        A12: ["B19"],
        A13: ["B21"],
        A14: ["B5","B23"],
        A15: ["B10"],
        A16: ["B10","B24"],
        A17: ["B10","B25"]
    };

    const solusi = {
        A1: "MONITOR RUSAK",
        A2: "MEMORI RUSAK",
        A3: "HDD RUSAK",
        A4: "VGA RUSAK",
        A5: "SOUND CARD RUSAK",
        A6: "OS BERMASALAH",
        A7: "APLIKASI RUSAK",
        A8: "PSU RUSAK",
        A9: "PROSESOR RUSAK",
        A10: "MEMORY KURANG",
        A11: "MEMORY VGA KURANG",
        A12: "CLOCK PROSESOR KURANG",
        A13: "KABEL IDE RUSAK",
        A14: "DAYA PSU KURANG",
        A15: "USB RUSAK",
        A16: "KEYBOARD RUSAK",
        A17: "MOUSE RUSAK"
    };

    let maxScore = 0;
    let hasilA = "";

    // hitung kecocokan
    for (let key in rules) {
        let cocok = 0;

        for (let i = 0; i < rules[key].length; i++) {
            if (gejala.includes(rules[key][i])) {
                cocok++;
            }
        }

        if (cocok > maxScore) {
            maxScore = cocok;
            hasilA = key;
        }
    }

    if (gejala.length === 0) {
        document.getElementById("hasil").innerHTML = "Pilih gejala dulu!";
    } 
    else if (maxScore === 0) {
        document.getElementById("hasil").innerHTML = "Tidak ditemukan diagnosa yang cocok";
    } 
    else {
        document.getElementById("hasil").innerHTML =
            "Diagnosa: <b>" + hasilA + " - " + solusi[hasilA] + "</b><br>" +
            "Jumlah gejala cocok: " + maxScore;
    }
}