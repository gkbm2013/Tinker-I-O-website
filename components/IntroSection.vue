<template>
    <div class="container marketing">
        <h1 id="feature">index_features_title</h1>

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">index_features_fim_title</h2>
                <p class="lead">
                    index_features_fim_content
                </p>
            </div>
            <div class="col-md-5">
                <img class="featurette-image img-responsive" src="https://imgur.com/HNCndkd.png">
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-5">
                <img class="featurette-image img-responsive" src="https://i.imgur.com/67AjKUE.png">
            </div>
            <div class="col-md-7">
                <h2 class="featurette-heading">index_features_so_title</h2>
                <p class="lead">index_features_so_content</p>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">index_features_streng_title</h2>
                <p class="lead">
                    index_features_streng_content
                </p>
            </div>
            <div class="col-md-5">
                <img class="featurette-image img-responsive" src="https://imgur.com/Jxt7Xxz.png">
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-5">
                <img class="featurette-image img-responsive" src="https://imgur.com/qucjsZy.png">
            </div>
            <div class="col-md-7">
                <h2 class="featurette-heading">index_features_oc_title</h2>
                <p class="lead">
                    index_features_oc_content
                </p>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">index_features_wabf_title</h2>
                <p class="lead">
                    index_features_wabf_content
                </p>
            </div>
            <div class="col-md-5">
                <img class="featurette-image img-responsive" src="https://imgur.com/NYq5GNv.png">
            </div>
        </div>

        <div class="row featurette">
            <div>
                <h2 class="featurette-heading">index_features_more</h2>
                <p class="lead">
                    <a href="https://minecraft.curseforge.com/projects/tinker-i-o#title-3" target="_blank"
                        class="btn btn-lg btn-primary">btn_curseforge</a>
                </p>
            </div>
        </div>

        <hr class="featurette-divider">

    </div>
</template>

<script>
import $ from 'jquery'

export default {
    mounted() {
        $(window).on('hashchange', function (e) {
            switchByTag();
        });

        $(document).ready(function () {
            switchByTag();
        });

        function switchByTag() {
            const tag = getUrlTag();
            if (tag === "features") {
                scrollTo("feature");
            } else if (tag === "authors") {
                scrollTo("author");
            }
        }

        function getUrlTag() {
            const url = decodeURIComponent(location.href);
            const idx = url.indexOf("#");
            const hash = idx !== -1 ? url.substring(idx + 1).split("#")[0] : "";
            return hash;
        }

        function scrollTo(eleId) {
            $(document).ready(function () {
                $('html, body').animate({
                    scrollTop: $("#" + eleId).offset().top
                }, 500);
            });
        }
    }
}

</script>
