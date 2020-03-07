# sanity-position-input

Position input for [Sanity](https://sanity.io/) that stores selected position.

## Usage

Use it in your schema types:

```js
// [...]
{
  fields: [
    // [...]
    {
      name: 'position',
      title: 'Poistion',
      type: 'position',
      options: {
        choices: ['left', 'center', 'right', 'full', 'drop-left', 'drop-right']
      }
    }
  ]
}
```

Note that the above only works if you import and use the `all:part:@sanity/base/schema-type` part in your schema.

## License

MIT-licensed. See LICENSE.
