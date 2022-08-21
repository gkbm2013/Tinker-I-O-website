<template>
    <nav>
        <ul :class="light? 'masthead-nav-light':'masthead-nav'" class="nav">
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Language
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a :href="switchLocalePath('en')">English</a></li>
                    <li><a :href="switchLocalePath('zh_tw')">繁體中文 (臺灣/中華民國)</a></li>
                    <!--<li><a href="#">Help us for translation!</a></li>-->
                </ul>
            </li>
            <li :class="pageName == 'index'? 'active' : ''"><a :href="localePath('index') + '/#home'">{{ $t("nav_home") }}</a></li>
            <li><a :href="localePath('index') + '#features'">{{ $t("nav_features") }}</a></li>
            <li><a :href="localePath('index') + '#authors'">{{ $t("nav_authors") }}</a></li>
            <li :class="pageName == 'downloads'? 'active' : ''"><a :href="localePath('downloads')">{{ $t("nav_downloads") }}</a></li>
            <li><a href="https://github.com/gkbm2013/tinker-IO" target="_blank">{{ $t("nav_github") }}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        light: Boolean
    },
    data() {
        return {
            pageName: ""
        }
    },
    created() {
        this.pageName = this.$nuxt.$route.name.split("___")[0];
    },
};
</script>
