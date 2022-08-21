<template>
    <div class="row featurette use-flexbox" style="padding:30px;">
        <div class="col-md-5 col-xs-12">
            <div class="versionDiv" :style="flagStyle">{{ flag }}</div>
        </div>
        <div class="col-md-7 table-responsive">
            <h1>{{ title }}</h1>
            <h3>
                {{ explaination }}
                <a v-if="status !== 'release'" class="github-button" href="https://github.com/gkbm2013/tinker-IO/issues" data-size="large" aria-label="Issue gkbm2013/tinker-IO on GitHub">Issue</a>
            </h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>{{ $t("downloads_table_name") }}</th>
                        <th>{{ $t("downloads_table_gameVersion") }}</th>
                        <th>{{ $t("downloads_table_uploaded") }}</th>
                        <th>{{ $t("downloads_table_downloads") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableContents" :key="index">
                        <td>{{item.name}}</td>
                        <td>{{item.gameVersion}}</td>
                        <td>{{item.updateDate}}</td>
                        <td>{{item.downloads}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DownloadsTable",
    props: {
        title: {
            type: String,
            required: true,
        },
        explaination: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        data: {
            type: Array,
            default() {
                return [];
            },
        }
    },
    data() {
        return {
            flagStyle: {
                backgroundColor: "rgb(140 175 98)"
            },
            flag: "",
            tableContents: this.data,
        };
    },
    created() {
        if (this.status === "release") {
            this.flagStyle.backgroundColor = "rgb(140 175 98)";
            this.flag = "R";
        } else if (this.status === "beta") {
            this.flagStyle.backgroundColor = "rgb(127 165 196)";
            this.flag = "B";
        } else if (this.status === "alpha") {
            this.flagStyle.backgroundColor = "rgb(228 151 136)";
            this.flag = "A";
        } else {
            throw new Error("Invalid status");
        }
    },
}
</script>
