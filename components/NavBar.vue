<template>
    <nav>
        <ul :class="light? 'masthead-nav-light':'masthead-nav'" class="nav">
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Language
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="?lang=en_US">English</a></li>
                    <li><a href="?lang=zh_TW">繁體中文 (臺灣/中華民國)</a></li>
                    <!--<li><a href="#">Help us for translation!</a></li>-->
                </ul>
            </li>
            <li :class="pathname == '/'? 'active' : ''"><a href="/#home">{{ $t("nav_home") }}</a></li>
            <li><a href="#features">{{ $t("nav_features") }}</a></li>
            <li><a href="#authors">{{ $t("nav_authors") }}</a></li>
            <li :class="pathname == '/downloads'? 'active' : ''"><a href="downloads">{{ $t("nav_downloads") }}</a></li>
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
        return {pathname: ""}
    },
    mounted() {
        this.pathname = window.location.pathname;
    }
};
</script>
