<template>
  				<!-- Header -->
					<header id="header">
						<div class="inner">

							<!-- Logo -->
							<router-link to="/" class="logo">
								<span class="symbol"><img src="../assets/main-images/logo.svg" alt="" /></span><span class="title">HH</span>
							</router-link>

							<!-- Nav -->
							<nav>
								<ul>
									<li><a href="#menu">Menu</a></li>
								</ul>
							</nav>
						</div>
						<!-- Menu -->
						<body class="is-menu-visible">

						<nav id="menu">
							<div class="inner">
								<h2>Menu</h2>
								<ul>
									<li><a><router-link to='/Main' >Home</router-link></a></li>
									<li><a><router-link to="/Calendar" >달력 보기</router-link></a></li>
									<li><a><router-link to="/Detail" >템플릿 보기</router-link></a></li>
									<li><a><router-link to="/Detail" >내 정보</router-link></a></li>
									<li><a><router-link to="/Calendar" >Elements</router-link></a></li>
									<li><a><router-link to="/Intro" >인트로</router-link></a></li>
								</ul>
							</div>
						</nav>
						</body>
					</header>
</template>

<script>
export default {

}
</script>

<style>

</style>