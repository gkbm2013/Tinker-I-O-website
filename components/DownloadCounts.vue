<template>
    <div class="row" style="color: #eee;">
        <div class="col-lg-3">
            <div class="circleDiv">
                {{ dynamic = "total_downloads" }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_total") }}</h2>
        </div>

        <div class="col-lg-3">
            <div class="circleDiv">
                {{ dynamic = "monthly_downloads" }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_monthly") }}</h2>
        </div>

        <div class="col-lg-3">
            <div class="circleDiv">
                {{ dynamic = "weekly_downloads" }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_weekly") }}</h2>
        </div>

        <div class="col-lg-3">
            <div class="circleDiv">
                {{ dynamic = "daily_downloads" }}
            </div>
            <h2 class="downloads_title">{{ $t("downloads_count_daily") }}</h2>
        </div>
    </div>
</template>