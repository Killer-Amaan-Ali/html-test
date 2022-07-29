let header = document.getElementById('header')
header.innerHTML = `
		<div class="container">
			<div class="headerWrapper">
				<div class="lhs">
					<a href="javascript:;" title="thefox">
						<img src="./assets/images/fox-logo.png" class="logo whiteLogo" alt="Logo">
						<img src="./assets/images/fox-logo-black.png" class="logo blackLogo" alt="Logo">
					</a>
					<a class="hamburger" id="hamburger" onclick="showMenu(this)">
						<img src="./assets/images/hamburger.png" alt="hamburger">
					</a>
				</div>
				<div class="rhs" id="rhs">
					<ul id="headerLinks">
						<li><a href="#">Home</a></li>
						<li><a href="#">Pages</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Shop</a></li>
						<li><a href="#">Home</a></li>
						<li><a href="#">Home</a></li>
						<li><a href="#">Features</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"
						alt="search">
				</div>
			</div>
		</div>
`