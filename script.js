// untuk Memuat data dari localStorage jika tersedia
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('profile')) {
        const profile = JSON.parse(localStorage.getItem('profile'));
        document.getElementById('profile-name').innerText = profile.name;
        document.getElementById('profile-role').innerText = profile.role;
        document.getElementById('profile-availability').innerText = profile.availability;
        document.getElementById('profile-age').innerText = profile.age;
        document.getElementById('profile-location').innerText = profile.location;
        document.getElementById('profile-ersa').innerText = profile.ersa;
        document.getElementById('profile-email').innerText = profile.email;
    }
});

// Fungsi untuk menampilkan form pada saat tombol Edit diklik
function editProfile() {
    document.getElementById('edit-form').style.display = 'block';

    // Memasukkan data profil yang ada ke dalam form
    document.getElementById('name').value = document.getElementById('profile-name').innerText;
    document.getElementById('role').value = document.getElementById('profile-role').innerText;
    document.getElementById('availability').value = document.getElementById('profile-availability').innerText;
    document.getElementById('age').value = document.getElementById('profile-age').innerText;
    document.getElementById('location').value = document.getElementById('profile-location').innerText;
    document.getElementById('ersa').value = document.getElementById('profile-ersa').innerText;
    document.getElementById('email').value = document.getElementById('profile-email').innerText;
}

// Fungsi untuk memperbarui profil saat form disubmit
document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Mendapatkan nilai dari form
    const profile = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        availability: document.getElementById('availability').value,
        age: document.getElementById('age').value,
        location: document.getElementById('location').value,
        ersa: document.getElementById('ersa').value,
        email: document.getElementById('email').value
    };

    // Menyimpan ke localStorage
    localStorage.setItem('profile', JSON.stringify(profile));

    // Memperbarui bagian profil dengan nilai baru
    document.getElementById('profile-name').innerText = profile.name;
    document.getElementById('profile-role').innerText = profile.role;
    document.getElementById('profile-availability').innerText = profile.availability;
    document.getElementById('profile-age').innerText = profile.age;
    document.getElementById('profile-location').innerText = profile.location;
    document.getElementById('profile-ersa').innerText = profile.ersa;
    document.getElementById('profile-email').innerText = profile.email;

    // Menyembunyikan form setelah pengiriman
    document.getElementById('edit-form').style.display = 'none';
});

//  MOCH ERSA NOER FIRMANSYAH