<template>
		<div id="wrapper">
			<div id="bg"></div>
			<div id="overlay"></div>
			<div id="main">

				<!-- Header -->
				<header id="header">
					<h1 class="hanFont">자신만의 이야기를 담고 싶으신가요?</h1>
					<p class="hanFont">나만의 일기 만들러 가기</p>
					<nav>
						<ul>
							<li><a href="#" class="icon brands fa-dribbble "></a></li>
							<li><a id="sginUpBtn" @click="toggleModal" href="#" class="icon solid fa-envelope"></a></li>
							<br>
							<span style="margin-left: 0.5em; margin-right: 1.5em;">Sign In</span>
							<span style="margin-left: 1em;" >Sign Up</span>
						</ul>
					</nav>
				</header>
				<!-- Sign Up Modal -->
				<div v-if="modalShow" class="modal">
					<div class="modal-body">
						<div class="mt-1">
							<span class="hanFont text-black mr-5">회원가입</span>
							<span class="text-black close" @click="toggleModal">X</span>
						</div>
						<form action="doJoin" method="POST" onsubmit="DoJoinForm__submit(this); return false;">
							<div class="textForm">
							  <input name="loginId" type="text" class="id" placeholder="아이디">
							</div>
							<div class="textForm">
							  <input name="loginPw" type="password" class="pw" placeholder="비밀번호">
							</div>
							 <div class="textForm">
							  <input name="loginPwConfirm" type="password" class="pw" placeholder="비밀번호 확인">
							</div>
							<div class="textForm">
							  <input name="name" type="password" class="name" placeholder="이름">
							</div>
							 <div class="textForm">
							  <input name="email" type="text" class="email" placeholder="이메일">
							</div>
							<div class="textForm">
							  <input name="cellphoneNo" type="number" class="cellphoneNo" placeholder="전화번호">
							</div>
							<input type="submit" class="btn" value="J O I N"/>
						  </form>
					</div>
				</div>
				<!-- Footer -->
				<footer id="footer">
					<span class="copyright">copyright 2022 &copy; Design for html5up Make for <a href="#">HH</a>.</span>
				</footer>


			</div>
		</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  data: () => ({
      active: false,
      value: null,
	  modalShow:false,
    }),
    methods: {
		toggleModal(){
			this.modalShow = !this.modalShow;
		},

      onConfirm () {
        this.value = 'Agreed'
      },
      onCancel () {
        this.value = 'Disagreed'
      }
    }
};
</script>
<style>
@import '../assets/intro-assets/css/main.css';
</style>