import YouLinks from '../src/links.vue'

export default {
  title: 'YouLinks',
  component: YouLinks
}

export const LinksDefault = _ => ({
  components: { YouLinks },
  template: `
    <div>
      <you-links href="hrttp://www.baidu.com">百度></you-links>
    </div>
  `
})

export const LinksDisabled = _ => ({
  components: { YouLink },
  template: `
    <div>
      <you-links disabled href="hrttp://www.baidu.com">百度</you-links>
    </div>
  `
})
