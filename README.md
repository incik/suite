# SUITE

_"Shoptet's Ultimate Interactive Template Editor"_

This is a prototype of the capabilities of [Craft.js](https://github.com/prevwong/craft.js). It is a library for creating custom webpage editors.

Demonstrated functionality:
- Custom components
  - custom setting forms for changing the props of the components
  - validation of component composition
    - ProductTitle, ProductDescription, and other "Product" components have to be placed into "ProductContainer")
- enabling/disabling the editor
- rudimentary "undo/redo" functionality
- loading previously defined templates from JSON schema
- conversion of the JSON schema to JSX

## Howtos:

These instructions should help anyone trying to play the project. I write them because Craft's documentation is a bit inconsistent, plus this project has already some "nice-to-have" shortcuts built into it.

### How to add a component

All the components that user can "mess with" are in `/components/user`. There's an `index.js` file that exports content of all the individual components. You should add your component into this listing in order to avoid the need to explicilty list the component in the `resolvers` object of the `Editor` component.

1. 

### How to compose component

1. 

**Component should be also usable as normal React component**. Keep that in mind and don't forget to output children!