<script>
import { timeDatas } from '~/datas/timeData.js'
import index from '~/pages/index.vue'

export default {
    data(){
        return{
            index: index,
            timeDatas: timeDatas
        }
    },
    methods: {
        test:function(){
            alert('hiraita!!');
        }

    }
}
</script>