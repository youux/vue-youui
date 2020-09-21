module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.test.js',
        templateFile: 'plop-component/__tests__/component.test.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-component/src/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-component/stories/component.stories.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-component/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'plop-component/LICENSE'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-component/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-component/README.hbs'
      }
    ]
  })
}
