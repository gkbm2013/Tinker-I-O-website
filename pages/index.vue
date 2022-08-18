<template>
  <div style="height: 100%;">
    <CoverSection></CoverSection>
    <IntroSection></IntroSection>
    <AuthorIntroSection></AuthorIntroSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import CoverSection from "../components/CoverSection.vue";
import IntroSection from "../components/IntroSection.vue";
import AuthorIntroSection from "../components/AuthorIntroSection.vue";

export default {
  name: "IndexPage",
  components: { CoverSection, IntroSection, AuthorIntroSection },
  head() {
    return {
      title: this.$nuxt._i18n.t("head_title"),
    };
  },
  mounted: () => {
    // console.log(window.$nuxt)
  },
}
</script>

<style>
/* stylelint-disable */
html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}

/* stylelint-enable */
</style>