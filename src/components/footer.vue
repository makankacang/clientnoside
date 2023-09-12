<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- Left section -->
        <div class="col-md-4 offset-sm-1">
          <div class="logo">
            <img src="../assets/images/logo.png" alt="NoSide Logo" width="170">
          </div>
          <div class="social-media">
            <a href="#" class="social-icon bg-facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-icon bg-instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-icon bg-twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="social-icon bg-youtube"><i class="bi bi-youtube"></i></a>
            <!-- Add more social media icons here -->
          </div>
        </div>
        <!-- Middle section -->
        <div class="col-md-2 offset-md-1">
          <h6>USEFUL LINKS</h6> <!-- Adjusted heading size -->
          <ul class="list-unstyled">
            <li><a href="/repositori">Repositori</a></li>
            <li><a href="#">Jurnal</a></li>
            <li><a href="#">Konferensi</a></li>
            <li><a href="#">Registrasi</a></li>
          </ul>
        </div>
        
        <!-- Right section -->
        <div class="col-md-3">
          <h6>CONTACTS</h6> <!-- Adjusted heading size -->
          <div class="contact-info">
            <div class="contact-icon">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div class="contact-details">
              <p>Komplek, Jl. Cikutra Baru Raya Jl. Cikutra Baru IV No.10, Kota Bandung, Jawa Barat 40123</p>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-icon">
              <i class="bi bi-envelope-open"></i>
            </div>
            <div class="contact-details">
              <p>keberlanjutanstrategis@gmail.com<br>info@keberlanjutan.com<br>support@keberlanjutan.com</p>
            </div>
          </div>          
          <div class="contact-info">
            <div class="contact-icon">
              <i class="bi bi-telephone"></i>
            </div>
            <div class="contact-details">
              <p>Office: (022) 2051-1881, (022) 20466451<br>Mobile: +62 821 1628 1143</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Copyright -->
      <div class="row">
        <div class="col-md-12 offset-sm-1">
          <p class="copyright">© 2018 Official Site of HKBP</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Customize with additional CSS styles */
.footer {
  background-color: #121212;
  color: #fff;
  padding: 80px 0;
}

/* Styling for links */
.footer a {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.7;
}

/* Hover effect for links */
.footer a:hover {
  text-decoration: underline;
}

/* Adjusted heading size */
.footer h6 {
  color: #F05454;
  margin-bottom: 20px;
}

/* Adjust the gap between sections */
.col-md-4 {
  margin-bottom: 30px;
}

/* Logo styling */
.logo img {
  display: block;
  margin-bottom: 25px;
}

/* Social media icons section */
.social-media {
  display: flex;
  gap: 11px;
}

/* Styling for social media icons */
.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 14px;
  color: #fff;
  transition: opacity 0.3s;
}

/* Background color for social media icons */
.bg-facebook {
  background-color: #1877f2;
}
.bg-instagram {
  background-color: #e4405f;
}
.bg-twitter {
  background-color: #1da1f2;
}
.bg-youtube {
  background-color: #ff0000;
}

/* Apply hover effect globally within scoped style */
::v-deep .social-icon:hover {
  opacity: 0.8;
  text-decoration: none;
}

/* Contact info section */
.contact-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

/* Styling for contact icons */
.contact-icon {
  margin-right: 10px;
  font-size: 15px;
  color: #F05454;
  align-self: flex-start;
}

/* Styling for contact details */
.contact-details p {
  margin: 0;
  line-height: 1.7;
  font-size: 13px;
}

/* Copyright styling */
.footer .copyright {
  font-size: 12px;
  color: #ccc;
  margin-top: 20px;
}
</style>
