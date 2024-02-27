import { addNavMenuItem } from '@vendure/admin-ui/core'

export default [
	addNavMenuItem({
		id: 'deactivate-product-list',
		label: 'Custom Product List',
		routerLink: ['/extensions/products'],
		icon: 'sad-face',
	}, 'catalog')
]
