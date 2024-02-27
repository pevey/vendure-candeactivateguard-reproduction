# vendure-candeactivateguard-reproduction

- clone repo
- yarn install
- yarn dev
- go to http://localhost:3000/admin
- on side navigation bar, select the new "Custom Product List" entry under Catalog
- click on any item to get to the detail view
- change the text in the name field
- attempt to leave the page by clicking any other item on the navigation bar
- should see error:
```
ERROR Error: Uncaught (in promise): TypeError: component.canDeactivate is not a function
```