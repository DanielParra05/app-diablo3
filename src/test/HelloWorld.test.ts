
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import { Quasar } from 'quasar'
import HelloWorld from "../components/HelloWorld.vue"
import { createTestingPinia } from '@pinia/testing'


const wrapperFactory = () => mount(HelloWorld, {
    props: {
        msg: "Mock msg"
    },
    global: {
        plugins: [Quasar, createTestingPinia()]
    },
})

test('mount component', () => {
    expect(HelloWorld).toBeTruthy();
})

test('test button count', async () => {
    const wrapper = wrapperFactory();
    const button = wrapper.get("button");
    await button.trigger("click");
    await button.trigger("click");

    expect(button.text()).toContain("count is: 2");
})
