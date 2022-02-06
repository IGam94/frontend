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
							<li><a @click="toggleLogin" class="icon brands fa-dribbble "></a></li>
							<li><a id="sginUpBtn" @click="toggleSignUp" class="icon solid fa-envelope"></a></li>
							<br>
							<span style="margin-left: 0.5em; margin-right: 1.5em;" @click="toggleLogin">Sign In</span>
							<span style="margin-left: 1em;" @click="toggleSignUp">Sign Up</span>
						</ul>
					</nav>
				</header>
				<!-- Sgin In Modal -->
				<div v-if="loginShow" id="sginInModal" class="modal">
					<div class="modal-body">
						<div class="mt-1">
							<span class="hanFont text-black mr-5">로그인</span>
							<span class="text-black close"  @click="toggleLogin">X</span>
						</div>
						<form>
							<div class="textForm">
							  <input name="loginId" type="text" class="id" placeholder="아이디" v-model="loginId">
							</div>
							<div class="textForm">
							  <input name="loginPw" type="password" class="pw" placeholder="비밀번호" v-model="loginPassword">
							</div>
							<div class="forgetBox">
								<ul class="text-black font-size-small">
									<li><a href="#">아이디를 잊어버리셨나요?</a></li>
									<li><a href="#">비밀번호를 잊어버리셨나요?</a></li>
								</ul>
							</div>
							<input class="btn" @click="loginSubmit" value="L O G I N"/>
						  </form>
					</div>
				</div>
				<!-- Sign Up Modal -->
				<div v-if="signUpShow" class="modal">
					<div class="modal-body">
						<div class="mt-1">
							<span class="hanFont text-black mr-5">회원가입</span>	
							<span class="text-black close" @click="toggleSignUp">X</span>
						</div>
						<form onsubmit="return false;">
							<div class="textForm">
							  <input name="loginId" type="text" class="id" placeholder="아이디" v-model="signUpId">
							</div>
							<div class="textForm">
							  <input name="loginPw" type="password" class="pw" placeholder="비밀번호" v-model="signUpPassword">
							</div>
							 <div class="textForm">
							  <input name="loginPwConfirm" type="password" class="pw" placeholder="비밀번호 확인" v-model="signUpPasswordCheck">
							</div>
							<div class="textForm">
							  <input name="name" type="text" class="name" placeholder="이름" v-model="signUpName">
							</div>
							 <div class="textForm">
							  <input name="email" type="text" class="email" placeholder="이메일" v-model="signUpEmail">
							</div>
							<div class="textForm">
							  <input name="cellphoneNo" type="number" class="cellphoneNo" placeholder="전화번호" v-model="signUpPhoneNumber">
							</div>
							<input type="submit" @click="signUpSubmit" class="btn" value="J O I N"/>
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
	  loginShow:false,
	  signUpShow:false,
	  loginId:"",
	  loginPassword: "",
	  signUpId:"",
	  signUpPassword:"",
	  signUpPasswordCheck:"",
	  signUpName:"",
	  signUpPhoneNumber:"",
	  signUpEmail:"",
    }),
    methods: {
		loginSubmit: function() {
			let request = {
				id: this.loginId,
				password: this.loginPassword,
			} 
			this.$axios({
				method: "post",
				url: "http://3.36.30.114:9999/hh-record-intro" + "/login",
				data: request,
				headers: {
				"Content-Type": "application/json",
				},
				mode: "cors",
			}).then((response) => {
				let data = response.data;
				if(response.code === 200){
					
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
		signUpSubmit: function() {
			if(this.signUpPassword !==this.signUpPasswordCheck){
				alert("비밀번호가 일치하지 않습니다.")
				return false
			}
			let request = {
				    id:this.signUpId,
					userName:this.signUpName,
					email:this.signUpEmail,
					phoneNumber:this.signUpPhoneNumber,
					password:this.signUpPassword
			} 
			this.$axios({
				method: "post",
				url: "http://3.36.30.114:9999/hh-record-intro" + "/sign-up",
				data: request,
				headers: {
				"Content-Type": "application/json",
				},
				mode: "cors",
			}).then((response) => {
				
				if(response.code === 200){
					alert(response.data)
					this.toggleSignUp()
				}else{
					alert("회원가입에 실패하였습니다.")
				}
			}).catch((err)=>{
				console.log(err)
			});
		},
		toggleLogin(){
			this.loginShow = !this.loginShow;
		},
		toggleSignUp(){
			this.signUpShow = !this.signUpShow;
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