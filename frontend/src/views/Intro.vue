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
				<!-- Sgin In Modal -->
				<div id="sginInModal" class="modal">
					<div class="modal-body">
						<div class="mt-1">
							<span class="hanFont text-black mr-5">로그인</span>
							<span class="text-black close" onclick="togglesginInModal();">X</span>
						</div>
						<form>
							<div class="textForm">
							  <input name="loginId" type="text" class="id" placeholder="아이디" v-model="id">
							</div>
							<div class="textForm">
							  <input name="loginPw" type="password" class="pw" placeholder="비밀번호" v-model="password">
							</div>
							<div class="forgetBox">
								<ul class="text-black font-size-small">
									<li><a href="#">아이디를 잊어버리셨나요?</a></li>
									<li><a href="#">비밀번호를 잊어버리셨나요?</a></li>
								</ul>
							</div>
							<input class="btn" @click="loginSubmit"/>
						  </form>
					</div>
				</div>
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
	  id:"",
	  password: "",
    }),
    methods: {
		loginSubmit: function() { 
			this.$axios({
				method: "post",
				url: "http://3.36.30.114:9999/hh-record" + "/login",
				data: {
				id: this.id,
				password: this.password,
				},
				headers: {
				"Content-Type": "application/json",
				},
				mode: "cors",
			}).then((response) => {
				let data = response.data;
				if(response.code === 200){
					console.log(data)
					sessionStorage.setItem('SESSION',data.AUTH_TOKEN);
					this.$router.push('/')
					// } else {
					// alert("아이디와 비밀번호를 확인하신 후 다시 시도해 주세요.");
					// }
				}else{
					alert(data.status)
				}
			}).catch((err)=>{
				console.log(err)
			});
		},
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
<style scoped>
@import '../assets/intro-assets/css/main.css';
</style>