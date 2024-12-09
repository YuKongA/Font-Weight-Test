<template>
    <table class="character-table">
        <thead>
            <tr>
                <th>默认</th>
                <th>简中</th>
                <th>繁中</th>
                <th>日文</th>
                <th>韩文</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="character in characters" :key="character">
                <td>{{ character }}</td>
                <td lang="zh-Hans">{{ character }}</td>
                <td lang="zh-Hant">{{ character }}</td>
                <td lang="ja">{{ character }}</td>
                <td lang="ko">{{ character }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const characters = ['处', '门', '复', '述', '直', '言']
</script>