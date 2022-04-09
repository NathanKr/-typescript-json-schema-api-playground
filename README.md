<h2>Motivation</h2>
Use the API of typescript-json-schema to create schemas


<h2>Installation</h2>
<ul>
<li>ts-node must be installed globally because i use

```ts
nodemon ./src/index.ts
```

</li>

<li>
Add the following to to package.json so nodemon will ignore schemas directories

```json
 "nodemonConfig": {
    "ignore": ["schemas/*"]
}
```

</li>
</ul>
