<template>
    <ul>
        <y-menu-item
                v-for="(item, key) in items"
                :href="item.href"
                :title="item.title"
                :label="item.label"
                :vueRoute="item.vueRoute"

                :key="key"
        >
            <menu-items-list
                    v-if="item.sub.length"
                    :items="item.sub"
            ></menu-items-list>
        </y-menu-item>
    </ul>
</template>
<script src="./index.js"></script>