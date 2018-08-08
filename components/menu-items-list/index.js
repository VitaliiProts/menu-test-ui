import YMenuItem from '../menu-item/MenuItem.vue';

export default {
    name: 'menu-items-list',
    props: {
        items: {
            type: Array,
            required: true,
        },
        level: {
            type: Number,
            default: 1,
        }
    },

    methods: {},
    mounted() {},

    components: { YMenuItem }
}