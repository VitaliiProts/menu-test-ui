<template>
    <section class="fixed_nav full-width">
        <el-menu mode="horizontal" background-color="#232b2f" active-text-color="#ffd04b" text-color="#fff">
            <y-menu-items-list
                    :items="navigation.main"
                    class="nav navbar-nav"
            ></y-menu-items-list>
        </el-menu>

    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
