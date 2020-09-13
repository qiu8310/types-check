import Vue from 'vue'

declare module "vue/types/vue" {
  interface Vue {
    hello: {
      world: string
    }
  }

  interface VueConfiguration {
  }
}
