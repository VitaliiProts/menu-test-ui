import YMenuItem from './components/menu-item/MenuItem.vue';
import YMenuItemsList from './components/menu-items-list/MenuItemsList.vue';

import ElMenuItemsList from './components/el-menu-items-list/ElMenuItemsList.vue';
import ElMenuItem from './components/el-menu-item/ElMenuItem.vue';


export default {
    data() {
        return {
            navigation: document.vueNavigation,
        };
    },

    methods: {},

    components: { YMenuItem, YMenuItemsList, ElMenuItemsList, ElMenuItem }
};
