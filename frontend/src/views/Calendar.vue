<template>
    		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<div class="inner">

							<!-- Logo -->
								<a href="main.html" class="logo">
									<span class="symbol"><img src="../assets/logo.svg" alt="" /></span><span class="title">HH</span>
								</a>

								<div>
									<span class="sub-date">2022.01.04</span>
								</div>

							<!-- Nav -->
								<nav>
									<ul>
										<li><a href="#menu">Menu</a></li>
									</ul>
								</nav>

						</div>
					</header>

				<!-- Menu -->
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="main.html">Home</a></li>
							<li><a href="record_celendar.html">달력 보기</a></li>
							<li><a href="record_detail.html">템플릿 보기</a></li>
							<li><a href="record_detail.html">내 정보</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</nav>

					<div class="celendar" style="background-color: rgb(124, 184, 151); height: 600px;">
                          <dal />
                    </div>

				<!-- Footer -->
				<footer id="footer">
					<div class="inner">
						<section>
							<h2>Follow</h2>
							<ul class="icons">
								<li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
								<li><a href="#" class="icon solid style2 fa-phone"><span class="label">Phone</span></a></li>
								<li><a href="#" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
								<li><a href="#" class="icon brands style2 fa-google"><span class="label">Email</span></a></li>
							</ul>
						</section>
						<ul class="copyright">
							<li>&copy; Untitled. All rights reserved</li>
							<li>문의 사항은 메일로 보내주세요. 감사합니다.</li>
							<li>Version 1.0.0</li>
						</ul>
					</div>
				</footer>

			</div>
</template>

<script>

import dal from '../components/Calendar.vue'
// Register components in your 'main.js'

export default {
    components: {

        dal
    }
}
</script>

<style>
	@import '../assets/main-assets/css/main.css';
</style>