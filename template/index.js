export default {
  name: '{{ name }}',

  components: {

  },

  data () {
    return {

    }
  },

  computed: {

  },

  asyncData ({ store, route: { params: { id } } }) {
    return store.dispatch('FETCH_TPL', { id })
  },

  metaInfo () {
    return this.$seo('{{ name }}')
  },

  beforeMount () {

  },

  beforeDestroy () {

  },

  watch: {

  },

  methods: {

  },
}
