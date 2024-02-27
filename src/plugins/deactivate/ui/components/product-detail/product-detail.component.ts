import { ResultOf } from '@graphql-typed-document-node/core'
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker'
import {
	DataService,
	LanguageCode,
	SharedModule,
	TypedBaseDetailComponent
} from '@vendure/admin-ui/core'
import { GetProductDetailDocument } from '../../gql/graphql'

@Component({
	selector: 'deactivate-product-detail',
	templateUrl: './product-detail.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [SharedModule],
})
export class DeactivateProductDetailComponent extends TypedBaseDetailComponent<typeof GetProductDetailDocument, 'product'> implements OnInit, OnDestroy {
	detailForm = this.formBuilder.group({
		name: ['', Validators.required]
	})

	constructor(
		protected dataService: DataService, 
		private formBuilder: FormBuilder
	) {
		super()
	}

	ngOnInit(): void {
		this.init()
	}

	ngOnDestroy(): void {
		this.destroy()
	}

	create() {
		return
	}

	update() {
		return
	}

	canDeactivate(): boolean {
		return super.canDeactivate()
	}

	protected setFormValues(entity: NonNullable<ResultOf<typeof GetProductDetailDocument>['product']>, languageCode: LanguageCode): void {
		this.detailForm.patchValue({
			name: entity?.name,
		})
	}
}
