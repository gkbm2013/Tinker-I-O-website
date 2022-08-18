<template>
  <h1>{{ $t('index') }}</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {title: this.$nuxt._i18n.t("index")};
  },
  mounted: () => {
    // console.log(window.$nuxt)
  },
}
</script>
