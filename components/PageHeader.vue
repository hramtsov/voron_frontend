<template>


    <div class="media mb-5">
        <span class="breadcrumb-icon mr-4">
            <Icon :custom="icon" size="30" color="rgba(0,0,0,0.3)" />
        </span>
        <div class="media-body">
            <h1 class="page-title">{{ title }}</h1>
        </div>
    </div>




<!--    <div class="mb-5">-->

<!--        <h1><div class="page-icon"><Icon :custom="icon" size="30" color="rgba(0,0,0,0.3)" /></div>{{ title }}</h1>-->
<!--    </div>-->
</template>

<script>
    export default {
        props: [
            'title',
            'icon'
        ],
        name: "PageHeader"
    }
</script>

<style scoped lang="scss">
    .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;

        .breadcrumb-icon {
            font-size: 22px;
            width: 48px;
            height: 48px;
            line-height: 46px;
            vertical-align: middle;
            text-align: center;
            border-radius: 5px;
            margin-right: 15px;
            background-color: $gray-200;
            color: $gray-700;

            i {
                vertical-align: middle;
            }
        }

        .media-body {
            word-break: break-word;
            -ms-flex: 1;
            flex: 1;
        }

        .page-title {
            color: $black;
            margin: 0;
        }
    }


</style>