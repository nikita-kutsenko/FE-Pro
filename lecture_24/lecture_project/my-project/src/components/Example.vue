<template>
    <div id="ExID">
        <p>{{title}}</p>
        <ul>
            <li v-for="item in arr" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["arr"],
        data() {
            return {
                title: 'Example title'
            }
        },
    }
</script>