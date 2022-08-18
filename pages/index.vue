<template>
  <div>
    <div class="site-wrapper">
    <div class="site-wrapper-inner">
      <div class="cover-container">

        <div id="header" class="masthead clearfix">
          <div class="inner">
            <nav>
              <ul class="nav masthead-nav">
                <!-- {{include_file="nav.html"}} -->
              </ul>
            </nav>
          </div>
        </div>

        <div class="inner cover">
          <img class="img-responsive" src="~/assets/images/logo-v2.png">
          <div class="text-background">
            <h1>index_home_title</h1>
            <p class="lead">index_home_content</p>
            <p class="lead">
              <a href="downloads/" class="btn btn-lg btn-default">btn_downloads</a>
              <a href="#features" class="btn btn-lg btn-default">btn_features</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

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
          <a href="https://minecraft.curseforge.com/projects/tinker-i-o#title-3" target="_blank" class="btn btn-lg btn-primary">btn_curseforge</a>
        </p>
      </div>
    </div>

    <hr class="featurette-divider">

  </div>

  <div style="width:100%;background-color:rgb(220 220 220);padding:30px;">
    <h1 id="author">index_authors_title</h1><br/>
    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <img class="img-circle" src="https://avatars1.githubusercontent.com/u/12233545?v=3&s=200" style="width: 140px; height: 140px;">
          <h2>index_authors_tokomikea</h2>
          <p class="lead">index_authors_tokomikea_content</p>
        </div>
        <div class="col-lg-4">
          <img class="img-circle" src="https://avatars3.githubusercontent.com/u/11485888?v=3&s=200" style="width: 140px; height: 140px;">
          <h2>index_authors_gkb</h2>
          <p class="lead">index_authors_gkb_content</p>
        </div>
        <div class="col-lg-4">
          <img class="img-circle" src="https://avatars3.githubusercontent.com/u/10683361?v=3&s=400" alt="Generic placeholder image" style="width: 140px; height: 140px;">
          <h2>index_authors_frank</h2>
          <p class="lead">index_authors_frank_content</p>
        </div>
      </div>

      <!-- {{include_file="footer.html"}} -->
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: this.$nuxt._i18n.t("index"),
    };
  },
  mounted: () => {
    // console.log(window.$nuxt)
  },
}
</script>
