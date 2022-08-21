<template>
    <div class="site-wrapper">
        <div class="site-wrapper-inner">
            <div class="cover-container">

                <div id="header" class="masthead clearfix">
                    <div class="inner">
                        <NavBar></NavBar>
                    </div>
                </div>

                <div class="inner cover">
                    <img class="img-responsive" src="~/assets/images/logo-v2.png">
                    <div class="text-background">
                        <h1>{{$t("index_home_title")}}</h1>
                        <p class="lead">{{$t("index_home_content")}}</p>
                        <p class="lead">
                            <a :href="localePath('downloads')" class="btn btn-lg btn-default">{{$t("btn_downloads")}}</a>
                            <a href="#features" class="btn btn-lg btn-default">{{$t("btn_features")}}</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import NavBar from "../components/NavBar.vue";

export default {
    components: { NavBar },
    mounted() {
        $(window).scroll(function () {
            const percent = $(document).scrollTop() / $(document).height() * 100;
            if (percent < 2) {
                $("div#header").fadeIn(400);
            } else {
                $("div#header").fadeOut(400);
            }
        });
    }
}
</script>
