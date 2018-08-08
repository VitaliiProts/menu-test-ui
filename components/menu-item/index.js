export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            default: 1,
        },
        title: {
            type: String,
        },
        vueRoute: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        hasSubmenuItems() {
            return !!this.$slots.default; // відповідає за відображення підменю
        }
    },

    methods: {
        routeClicked() {
            this.$emit('after-select-item');
        },
        rootClicked(href, isVueRoute) {
            if (isVueRoute) {
                this.$router.push(href);
                this.routeClicked();
            } else {
                location.href = href;
            }
        },
    }
};
