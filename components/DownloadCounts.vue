<template>
    <div class="row" style="color: #eee;">
        <div v-if="!error" class="col-lg-3">
            <div class="circleDiv tooltip-cover2">
                {{ nFormatter(downloadCounts.totalDownloads, 3) }}
                <span class="tooltiptext2">{{ commasFormatter(downloadCounts.totalDownloads) }}</span>
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_total") }}</h2>
        </div>

        <div v-if="!error" class="col-lg-3">
            <div class="circleDiv tooltip-cover2">
                {{ nFormatter(downloadCounts.monthlyDownloads, 3) }}
                <span class="tooltiptext2">{{ commasFormatter(downloadCounts.monthlyDownloads) }}</span>
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_monthly") }}</h2>
        </div>

        <div v-if="!error" class="col-lg-3">
            <div class="circleDiv tooltip-cover2">
                {{ nFormatter(downloadCounts.weeklyDownloads, 3) }}
                <span class="tooltiptext2">{{ commasFormatter(downloadCounts.weeklyDownloads) }}</span>
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_weekly") }}</h2>
        </div>

        <div v-if="!error" class="col-lg-3">
            <div class="circleDiv tooltip-cover2">
                {{ nFormatter(downloadCounts.dailyDownloads, 3) }}
                <span class="tooltiptext2"> {{ commasFormatter(downloadCounts.dailyDownloads) }} </span>
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_daily") }}</h2>
        </div>

        <div v-if="error" class="col-lg-12">
            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="font-size: 32px; color: #F33;"></i> <br />
            <span style="font-size: 20px;">
                {{ $t("downloads_error_statistic") }}
                <a href="https://github.com/gkbm2013/tinker-IO/issues">{{ $t("downloads_error_statistic_report") }}</a>
            </span>
            <br />
            <span style="font-size: 16px;">
                {{ `${$t("downloads_error_statistic_error_msg")} ${errorMessage}` }}
            </span>
        </div>
    </div>
</template>

<script>
const GSheetReader = require('g-sheets-api');

export default {
    name: "DownloadCounts",
    props: {
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
            downloadCounts: {
                totalDownloads: "-",
                monthlyDownloads: "-",
                weeklyDownloads: "-",
                dailyDownloads: "-",
            },
            error: false,
            errorMessage: "",
        };
    },

    mounted() {
        GSheetReader({
            apiKey: this.apiKey,
            sheetId: this.sheetId,
            sheetName: this.sheetName, // if sheetName is supplied, this will take precedence over sheetNumber
            returnAllResults: false,
        }, results => {
            const statisticMap = new Map();
            results.forEach(result => {
                statisticMap.set(result.name, result.value);
            });
            this.downloadCounts = Object.fromEntries(statisticMap);
        }, error => {
            this.errorMessage = error;
            this.error = true;
        });
    },
    methods: {
        nFormatter(num, digits) {
            try {
                num = parseInt(num);
            } catch (e) {
                return num;
            }
            const lookup = [
                { value: 1, symbol: "" },
                { value: 1e3, symbol: "k" },
                { value: 1e6, symbol: "M" },
                { value: 1e9, symbol: "G" },
                { value: 1e12, symbol: "T" },
                { value: 1e15, symbol: "P" },
                { value: 1e18, symbol: "E" }
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            const item = lookup.slice().reverse().find(function (item) {
                return num >= item.value;
            });
            return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
        },
        commasFormatter(num) {
            try {
                num = parseInt(num);
            } catch (e) {
                return num;
            }
            const numStr = num.toString();
            let result = "";
            for (let j = 0; j < numStr.length; j++) {
                const i = numStr.length - 1 - j;
                if (j !== 0 && j % 3 === 0) {
                    result = "," + result;
                }
                result = numStr.charAt(i) + result;
            }
            return result;
        }
    },
}
</script>

<style>
.tooltip-cover2 {
    position: relative !important;
}

.tooltip-cover2 .tooltiptext2 {
    font-size: 16px;
    line-height: 16px;
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: 75%;
    left: 50%;
    margin-left: -60px;
}

.tooltip-cover2 .tooltiptext2::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black;
}

.tooltip-cover2:hover .tooltiptext2 {
    visibility: visible;
}
</style>
