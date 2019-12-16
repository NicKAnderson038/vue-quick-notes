# Vue Quick Notes

Check out <a href="https://nickanderson038.github.io/vue-quick-notes/" target="_blank">DEMO</a> here.

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

## Description

This project is using [Vue Composition API](https://vue-composition-api-rfc.netlify.com) (inspired by React Hooks) with Vuex and Vue Router.

Vue Composition API is becoming the preferred way of creating components in upcoming Vue@3. It's ported to Vue@2 using "Vue2 plugin for the Composition API".

The main motivation of using this approach is to utilize fantastic [logic reuse & code organization](https://vue-composition-api-rfc.netlify.com/#logic-reuse-code-organization). After initial adjustment to new way of component definition it becomes obvious that it's easier to grasp component's logic as it's clearly separated from unrelated code (as opposed to previous data/computed/methods separation).

![vue-quick-notes](https://kaizenmedia.co.za/content/images/size/w300/2019/10/Vue.js-composition-API.png)
