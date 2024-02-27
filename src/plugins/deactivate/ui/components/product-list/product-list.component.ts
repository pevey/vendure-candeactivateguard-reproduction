import { ChangeDetectionStrategy, Component } from '@angular/core'
import { 
	GetProductListDocument,
	SharedModule, 
	TypedBaseListComponent 
} from '@vendure/admin-ui/core'

@Component({
	selector: 'deactivate-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [SharedModule],
})

export class DeactivateProductListComponent extends TypedBaseListComponent<typeof GetProductListDocument, 'products'> {
	filteredStatus: string | null = 'open'

	// Here we set up the filters that will be available to use in the data table
	readonly filters = this.createFilterCollection()
		.addDateFilters()
		.addFilter({
			name: 'name',
			type: { kind: 'text' },
			label: 'Name',
			filterField: 'name',
		})
		.connectToRoute(this.route);

	// Here we set up the sorting options that will be available to use in the data table
	readonly sorts = this.createSortCollection()
		.defaultSort('createdAt', 'DESC')
		.addSort({ name: 'createdAt' })
		.addSort({ name: 'updatedAt' })
		.addSort({ name: 'name' })
		.connectToRoute(this.route);

	constructor() {
		super()
		super.configure({
			document: GetProductListDocument,
			getItems: data => data.products,
			setVariables: (skip, take) => ({
				options: {
					skip,
					take,
					filter: {
						name: {
							contains: this.searchTermControl.value ?? undefined,
						},
						...this.filters.createFilterInput(),
					},
					sort: this.sorts.createSortInput(),
				},
			}),
			refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges],
		})
	}
}
