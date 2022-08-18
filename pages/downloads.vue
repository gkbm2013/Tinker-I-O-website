<template>
  <div width="100%">
    <div style="width:100%;background-color:rgb(175 175 175);padding:30px;">

      <div class="inner">
        <nav>
          <ul class="nav masthead-nav-light">
            <NavBar light></NavBar>
          </ul>
        </nav>
      </div>

      <div class="container marketing">
        <div class="row featurette inner">
          <div>
            <img class="img-responsive" src="~/assets/images/logo-v2.png">
          </div>
        </div>
      </div>
      <DownloadCounts :total="downloadCounts.total" :monthly="downloadCounts.monthly" :weekly="downloadCounts.weekly" :daily="downloadCounts.daily"></DownloadCounts>
    </div>

    <div class="container marketing">
      <h1>{{ $t("downloads_title") }}</h1>

      <DownloadsTable
        :title="$t('downloads_recommend_title')" :explaination="$t('downloads_recommend_content')"
        status="release" :data="downloadsData.release"></DownloadsTable>
      <hr class="featurette-divider" />

      <DownloadsTable :title="$t('downloads_beta_title')" :explaination="$t('downloads_beta_content')" status="beta">
      </DownloadsTable>
      <hr class="featurette-divider" />

      <DownloadsTable :title="$t('downloads_alpha_title')" :explaination="$t('downloads_alpha_content')" status="alpha">
      </DownloadsTable>
      <hr class="featurette-divider" />

      <DownloadsTable 
        :title="$t('downloads_popular_title')" :explaination="$t('downloads_popular_content')"
        status="release"></DownloadsTable>
    </div>

    <div>
      <h2 class="featurette-heading">{{ $t("downloads_more") }}</h2>
      <p class="lead">
        <a 
          href="https://www.curseforge.com/minecraft/mc-mods/tinker-i-o/files" target="_blank"
          class="btn btn-lg btn-primary">{{ $t("btn_curseforge") }}</a>
      </p>
    </div>

    <FooterSection></FooterSection>
  </div>
</template>

<script>
import DownloadCounts from "../components/DownloadCounts.vue";
import DownloadsTable from "../components/DownloadsTable.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "DownloadsPage",
  components: { DownloadCounts, DownloadsTable, FooterSection },
  data() {
    return {
      downloadCounts: {
        total: 0,
        monthly: 0,
        weekly: 0,
        daily: 0
      },
      downloadsData: {
        release: []
      },
    };
  }
}
</script>

<style>
a,
a:focus,
a:hover {
  color: #337ab7;
}
</style>