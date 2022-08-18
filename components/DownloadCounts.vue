<template>
    <div class="row" style="color: #eee;">
        <div class="col-lg-3">
            <div class="circleDiv">
                {{ total }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_total") }}</h2>
        </div>

        <div class="col-lg-3">
            <div class="circleDiv">
                {{ monthly }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_monthly") }}</h2>
        </div>

        <div class="col-lg-3">
            <div class="circleDiv">
                {{ weekly }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_weekly") }}</h2>
        </div>

        <div class="col-lg-3">
            <div class="circleDiv">
                {{ daily }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_daily") }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "DownloadCounts",
    props: {
        total: {
            type: Number,
            required: true,
        },
        monthly: {
            type: Number,
            required: true,
        },
        weekly: {
            type: Number,
            required: true,
        },
        daily: {
            type: Number,
            required: true,
        },
    },
}
</script>
