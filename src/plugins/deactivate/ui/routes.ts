import { CanDeactivateDetailGuard, registerRouteComponent } from '@vendure/admin-ui/core'

import { DeactivateProductListComponent } from './components/product-list/product-list.component'
import { DeactivateProductDetailComponent } from './components/product-detail/product-detail.component'
import { GET_PRODUCT_DETAIL } from './components/product-detail/product-detail.graphql'

export default [
	registerRouteComponent({
		path: '',
		component: DeactivateProductListComponent,
		breadcrumb: [{ label: 'Custom Order List', link: ['/extensions', 'products'] }],
	}),
	registerRouteComponent({
		path: ':id',
		component: DeactivateProductDetailComponent,
		query: GET_PRODUCT_DETAIL,
		entityKey: 'product',
		getBreadcrumbs: entity => [
			{ label: 'Custom Order List', link: ['/extensions', 'products'] },
			{
				label: entity ? `Product: ${entity?.name}` : 'Create New Entity',
				link: [entity?.id],
			}
		],
		routeConfig: {
			path: ':id',
			component: DeactivateProductDetailComponent,
			canDeactivate: [CanDeactivateDetailGuard],
		},
	}),
]