<template>
    <div>
        总量{{totalNum}}
        总价{{totalPrice}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            totalNum:0,
            totalPrise:0
        }
    },
    methods: {
        
    },
    created() {//接收路由传过来的参数
        this.totalNum=this.$route.query.totalNum
        this.totalPrice=this.$route.query.totalPrice
    },
}
</script>