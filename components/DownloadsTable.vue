<template>
    <div class="row featurette use-flexbox" style="padding:30px;">
        <div class="col-md-5 col-xs-12">
            <div class="versionDiv" :style="flagStyle">{{ flag }}</div>
        </div>
        <div class="col-md-7 table-responsive table-div">
            <h1>{{ title }}</h1>
            <h3>
                {{ explaination }}
                <a 
                    v-if="status !== 'release'" class="github-button" href="https://github.com/gkbm2013/tinker-IO/issues"
                    data-size="large" aria-label="Issue gkbm2013/tinker-IO on GitHub">Issue</a>
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
                    <tr v-if="!loading && !error && tableContents.length == 0">
                        <td colspan="4"> No data </td>
                    </tr>
                    <tr v-if="!loading && error">
                        <td colspan="4">
                            <i 
                                class="fa fa-exclamation-triangle" aria-hidden="true"
                                style="font-size: 32px; color: #F33;"></i> <br />
                            <span style="font-size: 20px;">
                                {{ $t("downloads_error_statistic") }}
                                <a href="https://github.com/gkbm2013/tinker-IO/issues">{{
                                        $t("downloads_error_statistic_report")
                                }}</a>
                            </span>
                            <br />
                            <span style="font-size: 16px;">
                                {{ `${$t("downloads_error_statistic_error_msg")} ${errorMessage}` }}
                            </span>
                        </td>
                    </tr>
                    <tr 
                        v-for="(item, index) in tableContents"
                        :key="index"
                        :class="isOutdated(item.fileDate)? 'tooltip-cover': ''">
                        <td :class="isOutdated(item.fileDate)? 'outdated': ''"><a :href="item.url" target="_blank">{{ item.displayName }}</a></td>
                        <td :class="isOutdated(item.fileDate)? 'outdated': ''">{{ item.gameVersion }}</td>
                        <td :class="isOutdated(item.fileDate)? 'outdated': ''">{{ parseDate(item.fileDate) }}</td>
                        <td :class="isOutdated(item.fileDate)? 'outdated': ''">{{ item.downloadCount }}</td>
                        <span v-if="isOutdated(item.fileDate)" class="tooltiptext">{{ $t('downloads_out_of_date') }}</span>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
const GSheetReader = require('g-sheets-api');

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
        apiKey: {
            type: String,
            required: true,
        },
        sheetId: {
            type: String,
            required: true,
        },
        sheetName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            flagStyle: {
                backgroundColor: "rgb(140 175 98)"
            },
            flag: "",
            tableContents: [],
            loading: true,
            error: false,
            errorMessage: "",
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
    mounted() {
        GSheetReader({
            apiKey: this.apiKey,
            sheetId: this.sheetId,
            sheetName: this.sheetName, // if sheetName is supplied, this will take precedence over sheetNumber
            returnAllResults: false,
        }, results => {
            this.loading = false;
            this.tableContents = results;
        }, error => {
            this.loading = false;
            this.errorMessage = error;
            this.error = true;
        });
    },
    methods: {
        parseDate(time) {
            if (typeof time === "string") {
                time = new Date(time);
            }
            return time.getFullYear() + "-" + this.timeFix(time.getMonth() + 1) + "-" + this.timeFix(time.getDate()) + " " + this.timeFix(time.getHours()) + ":" + this.timeFix(time.getMinutes()) + ":" + this.timeFix(time.getSeconds());
        },
        timeFix(num){
            const n = parseInt(num);
            if(n < 10){
                return "0" + num;
            }else{
                return num;
            }
        },
        isOutdated(time) {
            if (this.status === "release") {
                return false;
            }

            if (typeof time === "string") {
                time = new Date(time);
            }
            
            return new Date().getTime() - time > 90 * 24 * 60 * 60 * 1000;
        }
    },
}
</script>

<style>
.table-div {
    padding-bottom: 30px;
}

.table>thead>tr>th {
    text-align: center;
}

.outdated {
    text-decoration: line-through;
    opacity: 0.3;
}

.tooltip-cover {
    position: relative !important;
}

.tooltip-cover .tooltiptext {
    width: auto;
    font-size: 16px;
    line-height: 18px;
    visibility: hidden;
    padding-left: 10px;
    padding-right: 10px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
}

.tooltip-cover .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black;
}

.tooltip-cover:hover .tooltiptext {
    visibility: visible;
}
</style>
