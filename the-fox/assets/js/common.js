const javascript = 'javascript:;'
let url = window.location.pathname
// localStorage.setItem('prepros',true)
let ext = '.html'
url[1] === 'C' || localStorage.getItem('prepros') ? (ext = '.html') : (ext = '')
let Links = [
	{
		title: 'index',
		href: `index`,
		// class: '',
	},
	{
		title: 'pages',
		href: 'pages',
	},
	{
		title: 'portfolio',
		href: 'portfolio',
	},
	{
		title: 'blog',
		href: 'blog',
	},
	{
		title: 'shop',
		href: 'shop',
	},
	{
		title: 'travel',
		href: 'travel',
	},
	{
		title: 'shortcodes',
		href: 'shortcodes',
	},
	{
		title: 'features',
		href: 'features',
		style: '',
	},
	{
		// title: 'contact',
		href: `contact`,
	},
]

const FS1Lhs = [
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, inventore?',
	'Lorem ipsum, dolor sit amet consecteturadipisicing elit.',
	javascript,
	'Read More',
]
const RhsImg =
	'https://the-fox.netlify.app/the-fox/assets/images/twitter.png' ||
	'./assets/images/twitter.png'
const FS1Rhs = [
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
]
const FS2Img =
	'https://the-fox.netlify.app/the-fox/assets/images/footer-blog.png' ||
	'./assets/images/footer-blog.png'
const FS2 = [
	'latest news',
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
]

const FS3Widget = [
	'tags widget',
	{
		title: 'awesome',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'beautiful',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'flat design',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'ios',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'themeforest',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'mass',
		href: javascript,
		class: 'primaryButton',
	},
]

const FS3Useful = [
	'Useful Links',
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
]
const FS4 = [
	'Contact Info',
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
]
let fileName
const path = './'
let head
let error404
let errorTag = document?.getElementById('errorTag')
if (document?.body?.attributes?.page?.nodeValue) {
	fileName = document?.body?.attributes?.page?.nodeValue
} else {
	error404 = `Please provide an attribute to the &lt;body&gt; tag <br> ' page="thisPageName" '`
	fileName = error404
	console.error(
		`${error404}. It may lead to inumerable errors (perhaps styling problems)`
	)
	errorTag.classList.add('script')
	errorTag.innerHTML = `<a>${error404}</a>`
}

if (document?.getElementById('head')) {
	head = document?.getElementById('head')
	let title = fileName || error404
	title = title?.charAt(0)?.toUpperCase() + title?.slice(1)
	head.innerHTML = ``
	head.innerHTML = `
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>The Fox | ${title}</title>
	<link rel="icon" href="./assets/images/fox-icon.png">
	<link rel="stylesheet" href="./assets/css/common.css" />
	${
		fileName !== error404
			? `<link rel="stylesheet" href="./assets/css/${fileName}.css" />`
			: ``
	}
`
}

let disabled = []
let indexLink = './'
let header
let headerLogo =
	'https://the-fox.netlify.app/the-fox/assets/images/fox-logo.png' ||
	'./assets/images/fox-logo.png'
if (document?.getElementById('header')) {
	header = document?.getElementById('header')
	let searchDisplay = true
	if (
		document?.getElementById('header')?.attributes?.search?.nodeValue?.length >
		0
	) {
		searchDisplay = JSON.parse(
			document?.getElementById('header')?.attributes?.search?.nodeValue
		)
	}
	console.log('search icon', searchDisplay)
if (document?.getElementById('header')?.attributes?.hidden) {
	header.innerHTML = ``
} else {
	header.innerHTML = `
		<div class="container">
			<div class="headerWrapper">
				<div class="lhs">
					<a href='${indexLink + 'index' + ext}' title="thefox" id="headerImg">
						<img src="${headerLogo}" class="logo whiteLogo" alt="Logo">
						<img src="./assets/images/fox-logo-black.png" class="logo blackLogo" alt="Logo">
					</a>
					<a class="hamburger" id="hamburger" onclick="showMenu(this)">
						<img src="./assets/images/hamburger.png" alt="hamburger">
					</a>
				</div>
				<div class="rhs" id="rhs">
					<ul id="headerLinks">
						
					</ul>
					${
						searchDisplay === false
							? ''
							: `<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"
										class="search"
										alt="search"
									/>`
					}
				</div>
			</div>
		</div>
`
}
header?.removeAttribute('search')
}
//  else {
// 	let msg = 'id="header" is necessary in &lt;header&gt; tag'
// 	console.error(msg)
// 	errorTag.style.display = 'flex'
// 	errorTag.innerHTML = `<a>${msg}</a>`
// }

if (document?.getElementById('footer')) {
	let footer = document?.getElementById('footer')
	let repoLink =
		document?.getElementById('footer')?.attributes?.repoLink?.nodeValue ||
		'https://github.com/Killer-Amaan-Ali/html-test'
	footer.setAttribute('onclick', 'hideMenu(this)')
	footer.innerHTML = `
		<div class="primaryFooterOuterWrapper">
			<div class="container">
				<div class="primaryFooterInnerWrapper">
					<div>
						<div class="footerSection section1">
							<a href='${indexLink + 'index' + ext}' title="thefox" id="footerImg">
								<img src="${headerLogo}" alt="logo">
							</a>
							<div class="lhs" id="fLhs">
								<ul>
									
								</ul>
							</div>
							<div class="rhs" id="fRhs">
							</div>
						</div>
						<div class="footerSection section2" id="fs2">
							<div class="blog">
								<div class="blogLhs">
								</div>
								<div class="blogRhs">
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="footerSection section3">
							<h5 id="footerWidgetsTitle"></h5>
							<div class="footerWidgets">
								<ul id="footerWidgets">

								</ul>
							</div>
							<h5 id="footerUsefulLinksTitle"></h5>
							<div class="footerLinks">
								<ul id="footerUsefulLinks">

								</ul>
							</div>
						</div>
						<div class="footerSection section4" id="fs4">
							<div class="contact">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="secondaryFooterOuterWrapper">
				<div class="container">
					<div class="secondaryFooterInnerWrapper">
						<div class="lhs">
							<p>Copyright
							<p id="__date" style="margin: 0 4px;">2014</p> <a href="${repoLink}"
								target="_blank">the<b>fox</b></a></p>&nbsp|&nbsp
							<p>All rights reserved</p>&nbsp|&nbsp
							<p>designed by <a href="https://github.com/Killer-Amaan-Ali/" target="_blank">Amaan</a></p>
						</div>
						<div class="rhs">
							<ul id="footerLinks">
							</ul>
						</div>
					</div>
				</div>
			</div>
`
} 
// else {
// 	let msg = 'id="footer" is necessary in &lt;footer&gt; tag'
// 	console.error(msg)
// 	errorTag.style.display = 'flex'
// 	errorTag.innerHTML = `<a>${msg}</a>`
// }

let menuList = document?.getElementById('rhs')

const showMenu = () => {
	for (let i = 0; i < menuList.classList.length; i++) {
		if (menuList.classList[i] === 'rhsActive') {
			localStorage.setItem('drawer', false)
		} else {
			localStorage.setItem('drawer', true)
		}
	}
	menuList.classList.toggle('rhsActive')
}

const hideMenu = () => {
	menuList?.classList?.remove('rhsActive')
	localStorage.setItem('drawer', false)
}

if (document?.body.getElementsByTagName('section')) {
	let section = document?.body.getElementsByTagName('section')
	for (let i = 0; i < section.length; i++) {
		// section[i].setAttribute('onclick', 'hideMenu(this)')
		section[i].addEventListener('click', hideMenu(this))
	}
}

if (
	document?.getElementById('header')?.attributes?.drawer?.nodeValue.length > 0
) {
	if (localStorage.getItem('drawer') === 'true') {
		menuList.classList.add('rhsActive')
	} else {
		menuList.classList.remove('rhsActive')
	}
}

if (
	document?.getElementById('header')?.attributes?.headerLinksProps?.nodeValue
		.length > 0
) {
	let headerProps = JSON.parse(
		document?.getElementById('header')?.attributes?.headerLinksProps?.nodeValue
	)
	if (headerProps.length > 0) {
		if (
			document?.getElementById('header')?.attributes?.concat?.value === 'true'
		) {
			Links = Links.concat(headerProps)
		} else {
			Links = headerProps
		}
	}
}
console.log('header links---', Links)

let hUl
if (
	document?.getElementById('header') &&
	document?.getElementById('headerLinks')
) {
	hUl = document?.getElementById('headerLinks')
	// hUl.innerHTML = ''
}

let fUl
disabled = []
let common = ''
for (let i = 0; i < Links.length; i++) {
	Links[i].title === fileName && (Links[i].class = 'active')
	Links[i].title === 'index' && (Links[i].title = 'home')
	if (Links[i].title === 'home' && Links[i].class === 'active') {
		document?.getElementById('headerImg')?.removeAttribute('href')
		document?.getElementById('footerImg')?.removeAttribute('href')
	}

	Links[i].title === 'features' &&
		((Links[i].title = 'features !'),
		(Links[i].style = 'color:var(--cyan);font-weight:900;'))

	Links[i].class === 'active' && (disabled[i] = 'true')
	let uppercase = []
	uppercase[i] =
		Links[i]?.title?.charAt(0)?.toUpperCase() + Links[i]?.title?.slice(1)

	Links[i].title &&
		(common += `<li ${
			Links[i]?.class?.length > 0 ? `class='${Links[i]?.class}'` : ''
		}>
      <a
        title='${uppercase[i]}'
        id='headerLinks${i}'
				${Links[i]?.style?.length > 0 ? `style='${Links[i]?.style}'` : ''}
        ${Links[i]?.target?.length > 0 ? `target='${Links[i]?.target}'` : ''}
        ${
					disabled[i] !== 'true'
						? `href=${`${path + (Links[i].href || Links[i].title) + ext}`}`
						: 'disabled'
				}
        onclick='activeLink(this)'
			>
        ${Links[i].title}
      </a>
    </li>
    `)
	if (
		document?.getElementById('header') &&
		document?.getElementById('headerLinks')
	) {
		hUl.innerHTML = ''
		hUl.innerHTML = common
		header?.removeAttribute('headerLinksProps')
	}

	if (
		document?.getElementById('footer') &&
		document?.getElementById('footerLinks')
	) {
		fUl = document?.getElementById('footerLinks')
		fUl.innerHTML = common
	}
}
let headerActiveLinks = [],
	footerActiveLinks = []
for (let i = 0; i < Links.length; i++) {
	headerActiveLinks[i] = document?.getElementById(`headerLinks${i}`)
	footerActiveLinks[i] = document?.getElementById(`footerLinks${i}`)
}
const activeLink = element => {
	for (let i = 0; i < Links.length; i++) {
		// headerActiveLinks[i].classList = ''
		// footerActiveLinks[i].classList = ''
		element.classList.add('active')

		headerActiveLinks[i]?.classList == 'active'
			? footerActiveLinks[i]?.classList.add('active')
			: footerActiveLinks[i]?.classList == 'active' &&
			  headerActiveLinks[i]?.classList.add('active')
	}
}

let footerWidgets
let footerWidgetsTitle

if (
	document?.getElementById('footer') &&
	document?.getElementById('footerWidgets') &&
	document?.getElementById('footerWidgetsTitle')
) {
	footerWidgets = document?.getElementById('footerWidgets')
	footerWidgets.innerHTML = ''
	footerWidgetsTitle = document?.getElementById('footerWidgetsTitle')
	footerWidgetsTitle.innerHTML = ''

	let footerWidgetLink = []
	footerWidgetsTitle.innerHTML = FS3Widget[0]
	let randomNo = Math.floor(Math.random() * FS3Widget.length)
	randomNo <= 0
		? (randomNo = 1)
		: randomNo === FS3Widget.length
		? (randomNo = FS3Widget.length - 1)
		: randomNo
	FS3Widget[randomNo].class = `secondaryButton cyan`
	let temp = ''
	for (let i = 1; i < FS3Widget.length; i++) {
		temp += `
			<li>
				<a
					title='${FS3Widget[i].title}'
					id='FS3Widget${i}'
					class='${FS3Widget[i].class || 'primaryButton'}'
					onclick='footerActiveLink(this)'
					href=${FS3Widget[i].href}
				>
					${FS3Widget[i].title}
				</a>
			</li>`
	}
	footerWidgets.innerHTML = temp
	for (let i = 1; i < FS3Widget.length; ++i) {
		footerWidgetLink[i] = document?.getElementById(`FS3Widget${i}`)
	}

	function footerActiveLink(element) {
		for (let i = 1; i < FS3Widget.length; ++i) {
			footerWidgetLink[i].classList = 'primaryButton'
		}
		element.classList = 'secondaryButton cyan'
	}

	let fLhs = document?.getElementById('fLhs')
	fLhs.innerHTML = ``
	fLhs.innerHTML = `
			<p>
			${FS1Lhs[0]}
				<br>
				<br>
			${FS1Lhs[1]}
			</p>
			<ul>
				<li>
					<a href=${FS1Lhs[2]}>
						${FS1Lhs[3]}
					</a>
				</li>
			</ul>
		`

	let fRhs = document?.getElementById('fRhs')
	fRhs.innerHTML = ``
	temp = ''
	for (let i = 0; i < FS1Rhs.length; i++) {
		temp += `
		<div class="socialLinks">
			<div class="linkLhs">
				<a href=${FS1Rhs[i].href} class="cyan">
					<img src=${FS1Rhs[i].img} alt=${FS1Rhs[i].alt}>
				</a>
			</div>
			<div class="linkRhs">
				<p>${FS1Rhs[i].title}</p>
				<p>${FS1Rhs[i].para}</p>
			</div>
		</div>
`
	}
	fRhs.innerHTML = temp

	let fs2 = document?.getElementById('fs2')
	// fs2.innerHTML = ``
	temp = ''
	temp = `<h5>${FS2[0]}</h5>`
	for (let i = 1; i < FS2.length; i++) {
		temp += `
		<div class="blog">
			<div class="blogLhs">
				<img src=${FS2[i].img} alt=${FS2[i].alt}>
			</div>
			<div class="blogRhs">
				<p class="title">${FS2[i].title}</p>
				<p>${FS2[i].para}</p>
				<p>${FS2[i].date}</p>
			</div>
		</div>
`
	}
	fs2.innerHTML = temp
	let footerUsefulLinks = document?.getElementById('footerUsefulLinks')
	let footerUsefulLinksTitle = document?.getElementById(
		'footerUsefulLinksTitle'
	)
	footerUsefulLinks.innerHTML = ``
	footerUsefulLinksTitle.innerHTML = ``

	footerUsefulLinksTitle.innerHTML = FS3Useful[0]
	temp = ''
	for (let i = 1; i < FS3Useful.length; i++) {
		temp += `
<li>
	<a
		title='${FS3Useful[i].title}'
		href=${FS3Useful[i].href}
	>
	${FS3Useful[i].title}
	</a>
</li>
`
	}
	footerUsefulLinks.innerHTML = temp
	let fs4 = document?.getElementById('fs4')
	// fs4.innerHTML = ``
	temp = ''
	temp = `<h5>${FS4[0]}</h5>`
	for (let i = 1; i < FS4.length; i++) {
		temp += `
			<div class="contact">
				<p class="title">${FS4[i].title}</p>
				<p>${FS4[i].para}</p>
				<p>${FS4[i].loc}</p>
			</div>
		`
	}
	fs4.innerHTML = temp
	temp = ''
	let date = document?.getElementById('__date')
	let currentDate = new Date().getFullYear()
	date.innerHTML = ` ${currentDate} `
}
// console.log(document?.body.getElementsByTagName('header')[0].innerHTML)
// document.body.innerHTML += `<script src="./assets/js/${fileName}.js"></script>`
