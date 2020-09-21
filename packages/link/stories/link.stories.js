import YouLink from '../src/link.vue'

export default {
  title: 'YouLink',
  component: YouLink
}

export const LinkDefault = _ => ({
  components: { YouLink },
  template: `
    <div>
      <you-link href="hrttp://www.baidu.com">百度</you-link>
    </div>
  `
})

export const LinkDisabled = _ => ({
  components: { YouLink },
  template: `
    <div>
      <you-link disabled href="hrttp://www.baidu.com">百度</you-link>
    </div>
  `
})
