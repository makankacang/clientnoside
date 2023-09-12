<template>
    <navbar />
    <!-- about us -->
    <div class="container-s py-2 rounded">
      <div class="container">
        <div class="booking p-5">
          <div class="row g-2 align-items-center">
            <div class="col-md-7 text-white">
              <h2 class="text-uppercase mb-sm-4">NOSIDE</h2>
              <p class="mb-1">Editor atau penerbit Jurnal dan conference di lembaga penelitian memiliki pilihan untuk menempatkan publikasi mereka di NOSIDE. Untuk mengunggah Jurnal dan conference yang ada seluruhnya, kami menawarkan layanan penuh, yaitu tim NOSIDE menangani seluruh proses mulai dari merekam data judul dan metadata tambahan seperti abstrak, kata kunci, dan kode JEL (jika tersedia dalam dokumen) hingga pengimporan batch terakhir dari file PDF. Kembali terbitan Jurnal dan conference saat ini juga dapat disimpan di NOSIDE. Masalah baru diimpor ke NOSIDE segera setelah dipublikasikan di situs web Anda atau segera setelah Anda memberikannya kepada kami dengan cara lain. Jika editor atau penerbit sudah memiliki database bibliografi yang dapat menyediakan metadata yang sesuai dalam format standar seperti "Dublin Core", "Marc21" atau format RePEc "ReDIF", data ini mungkin digunakan untuk impor massal. Ini akan memungkinkan kami mengunggah judul Anda lebih cepat. Team NOSIDE juga membantu mempromosikan Jurnal dan Conference. Jurnal dan Jurnal Akses Terbuka hanya dapat dimasukkan dalam NOSIDE dengan syarat bahwa telah terindex di Repository Onesearch, DOI, Garuda Dikti, Sinta dan DOAJ.</p>
            </div>
            <div class="col-md-1">
              <img src="../assets/images/aboutus.png" alt="NoSide" width="400">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- about us -->

   <!-- about us -->
    <div class="container-s py- rounded">
      <div class="container">
        <div class="pages p-5">
          
          <div class="row g-0 align-items-center">
            <div class="col-md-6 text-white">
              <h2 class="mb-sm-2 text-white">Repositori</h2>
              <p class="mb-4">Buat Repositori baru dan juga kelola Repositori<br>dengan kami</p>
              <a class="btn btn-danger px-3" href="/repositori">Mulai <i class="bi bi-arrow-right-short"></i></a>
            </div>
            <div class="col-md-2">
              <div class="image-container">
                <img src="../assets/images/bukulaptop.png" alt="Repositori" width="350">
              </div>
            </div>
          </div>
  
              <div class="row g-0 align-items-center">
                <div class="col-md-1">
                  <div class="image-container2">
                    <img src="../assets/images/buku.png" alt="Jurnal" width="350">
                  </div>
                </div> 
                <div class="col-sm-4 text-white ppp">
                    <h2 class="mb-sm-2 text-white">Jurnal</h2>
                    <p class="mb-4">Buat Jurnal baru dan juga kelola Jurnal<br> dengan kami    </p>
                    <a class="btn btn-danger px-3" href="/jurnal">Mulai <i class="bi bi-arrow-right-short"></i></a>
                </div>
              </div>

              <div class="row g-0 align-items-center">
                <div class="col-md-6 text-white">
                  <h2 class="mb-sm-2 text-white">Konferensi</h2>
                  <p class="mb-4">Buat Konferensi baru dan juga kelola Konferensi<br>dengan kami</p>
                  <a class="btn btn-danger px-3" href="">Mulai <i class="bi bi-arrow-right-short"></i></a>
                </div>
                <div class="col-md-2">
                  <div class="image-container3">
                    <img src="../assets/images/laptop.png" alt="Konferensi" width="350">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    <!-- about us -->
    <Footer />

    <div class="rectangle-shape"></div>
    <div class="rectangle-shape2"></div>
    <div class="rectangle-shape3"></div>

  
  </template>
  
  <script>
  import navbar from '@/components/navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      navbar,
      Footer,
    },
  };
  </script>
  
  <style>

  body {
    position: relative; /* Make sure the body is positioned relatively */
    z-index: 1; /* Set the z-index to ensure the body is above the rectangle */
    background-color: #181818;
  }

  @media (max-width: 768px) {
  /* Adjust the styles for smaller screens here */

  body {
    overflow-x: auto; /* Allow horizontal scrolling on small screens */
  }

  /* Example: Reduce padding for mobile */
  .booking {
    padding: 1rem;
  }

  /* Example: Adjust font size for mobile */
  .booking h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  /* Example: Adjust margin for mobile */
  .booking p {
    margin-bottom: 10px;
  }

  /* Add more styles as needed for smaller screens */
}
  </style>
  