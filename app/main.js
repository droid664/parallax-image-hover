import gsap from 'gsap'
import './style.css'

gsap.defaults({
	overwrite: true,
})

document.addEventListener('DOMContentLoaded', () => {
	let image = document.querySelector('.image')

	image.addEventListener('mousemove', (e) => {
		let offsetX = e.offsetX
		let offsetY = e.offsetY
		let rect = image.getBoundingClientRect()
		let translateX = offsetX - rect.width / 2
		let translateY = offsetY - rect.height / 2

		gsap.to(image, {
			x: translateX,
			y: translateY,
			backgroundPositionX: `${(translateX / rect.width) * 100 + 50}%`,
			backgroundPositionY: `${(translateY / rect.height) * 100 + 50}%`,
			ease: 'power3.out',
		})
	})
	image.addEventListener('mouseout', () => {
		gsap.to(image, {
			x: 0,
			y: 0,
			backgroundPositionX: '50%',
			backgroundPositionY: '50%',
		})
	})
})
