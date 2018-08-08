<template>

    <el-submenu v-if="hasSubmenuItems" :index="label">
        <template :href="href" :title="title" slot="title" class="test" @click.prevent="rootClicked(href, vueRoute)">
            {{ label }}
        </template>
        <slot></slot>
    </el-submenu>

    <el-menu-item :index="label" v-else @click="routeClicked">
        <router-link v-if="vueRoute" :to="href" class="test" :title="title">{{ label }}</router-link>
        <span v-else><a :href="href" :title="title" class="test">{{ label }}</a></span>
    </el-menu-item>

    <!--<el-menu-item v-if="hasSubmenuItems">{{ label }}</el-menu-item>-->
    <!--<el-menu-item v-else>{{ label }}</el-menu-item>-->

</template>
<script src="./index.js"></script>
