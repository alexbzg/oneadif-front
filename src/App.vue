<template>
  <div id="index_page">
		<img id="lang" src="/images/lang.png">
		<img id="logo" src="/images/index_logo.png">
		<div id="slogan">
			Загрузите ваш ADIF и мы сами отправим его на<br/><span id="elogs">LoTW, eQSL, ClubLog, HAMLOG, CFMRDA, myDX</span>
		</div>

		<div id="login_block">
			<table class="login_form">
				<tr>
					<td>
						Логин
					</td>
					<td>
						Пароль
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td>
						<input id="login" type="text" name="login">
					</td>
					<td>
						<input id="password" type="password" name="password">
					</td>
					<td>
						<input id="login_btn" type="submit" name="login_btn" value="Вход">
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<span id="password_recovery_link">Забыли пароль?</span>
					</td>
					<td></td>
				</tr>
			</table>
			<div id="error_message" style="display: none;">Неверный логин/пароль</div>
			<div id="registration_link">Регистрация нового пользователя</div>
		</div>


		<div id="registration_block" style="display: none;">
			<table class="login_form">
				<tr>
					<td>
						Логин
					</td>
					<td>
						Email
					</td>
					<td>
						Пароль
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td>
						<input id="login" type="text" name="login">
					</td>
					<td>
						<input id="email" type="text" name="email">
					</td>
					<td>
						<input id="password" type="password" name="password">
					</td>
					<td>
						<input id="register_btn" type="submit" name="register_btn" value="Регистрация">
					</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td class="register_notes">минимум 8 символов</td>
					<td></td>
				</tr>
			</table>

			<div id="error_message" style="display: none;">Неверный email</div>
			<div id="login_link">Вход на сайт</div>
		</div>



		<div id="recovery_block" style="display: none;">
			<table class="login_form">
				<tr>
					<td>
						Логин
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td>
						<input id="login" type="text" name="login">
					</td>
					<td>
						<input id="recovery_btn" type="submit" name="register_btn" value="Восстановить пароль">
					</td>
				</tr>
			</table>

			<div id="error_message" style="display: none;">Неверный логин</div>
			<div id="ok_message" style="display: none;">На email, указанный при регистрации,<br/>отправлена ссылка для указания нового пароля.</div>
			<div id="login_link">Вход на сайт</div>
		</div>


  </div>
</template>

<script>
import './style.css'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
</style>
