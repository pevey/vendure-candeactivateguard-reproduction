import { graphql } from '../../gql'

export const GET_PRODUCT_DETAIL = graphql(`
	query GetProductDetail($id: ID!) {
		product(id: $id) {
			id
			name
			slug
		}
	}
`)