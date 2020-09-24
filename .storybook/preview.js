import Vue from 'vue'
import { addParameters } from "@storybook/vue";
import HelloWorld from '../src/components/HelloWorld.vue'
import JsxComponent from '../src/components/JsxComponent.vue'

// task story
import '../src/index.css';

Vue.component('HelloWorld', HelloWorld)
Vue.component('JsxComponent', JsxComponent)

addParameters({
  docs: { inlineStories: true }
});
