<template>
  <div class="shopCart">
     <el-table
      ref="multipleTable"
      :data="goodsList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="180" align="center">
      </el-table-column>
      <el-table-column label="商品" width="550">
        <template slot-scope="scope">
          <div class="shop">
            <div class="left">
              <img src="http://img5.imgtn.bdimg.com/it/u=320064224,1309241313&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="right">
              <p class="name">{{scope.row.name}}</p>
              <p class="brand">
                <span>品牌：{{scope.row.brand}}</span>
                <span>产地：{{scope.row.location}}</span>
              </p>
              <p class="size">
                <span>规格/纯度：{{scope.row.size}}</span>
                <span>起订量：{{scope.row.number}}</span>
              </p>
              <p class="product">配送仓库：{{scope.row.send}}</p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="数量"  width="200" align="center">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="10" 
          :step="1" step-strictly size="mini"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="单价(元)" width="120" align="center">
        <template slot-scope="scope">
          ￥{{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="金额(元)" width="120" align="center">
        <template slot-scope="scope">
          ￥{{scope.row.price*scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" 
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="tabBottom">
      <div class="allDelete">
        <el-button @click="allDelete()">全部删除</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
      <div class="goBy">
        <span>您选中了{{totalNum}}件商品，共{{totalPrice}}元</span>
        <el-button type="danger" @click="gotoBy()">结算</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
       goodsList:[
        {
          name:'可乐',
          brand:'可口可乐公司',
          location:'海外',
          size:'300ml',
          number:10,
          send:'海外仓库',
          price:3,
          num:2,
        },
        {
          name:'雪碧',
          brand:'可口可乐公司',
          location:'海外',
          size:'270ml',
          number:10,
          send:'海外仓库',
          price:3,
          num:1,
    
    
        },
        {
          name:'芬达',
          brand:'可口可乐公司',
          location:'海外',
          size:'300ml',
          number:20,
          send:'海外仓库',
          price:4,
          num:4,
        },
        {
          name:'美年达',
          brand:'可口可乐公司',
          location:'海外',
          size:'300ml',
          number:16,
          send:'海外仓库',
          price:2,
          num:3,
        },
    	],
        multipleSelection: [],//存放选中的数据的数组
        totalNum:0,//总量
        totalPrice:0,//总价
        isDisable:true //是否禁用按钮
      }
    },

    methods: {
      toggleSelection(rows) {//取消全选
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {//选中
        this.multipleSelection = val;
        if(this.multipleSelection.length!=0){
          this.isDisable=false
        }else{
          this.isDisable=true
        }
        this.getNumAndPrice()
      },
      handleChange(value) {//数量改变
        // console.log(value);
        this.getNumAndPrice()
      },
      handleDelete(row) {//删除单个
        for (let i = 0; i < this.goodsList.length; i++) {
          if(this.goodsList[i]==row){
            console.log(i);
            this.goodsList.splice(i,1)
          }
        }
      },
      allDelete(){//删除全部
         for (let index = 0; index < this.multipleSelection.length; index++) {
           this.handleDelete(this.multipleSelection[index]) 
         }
      },
      getNumAndPrice(){//总量 总价
          let arr=this.multipleSelection
          this.totalNum=0
          this.totalPrice=0
          // for (let i = 0; i < this.multipleSelection.length; i++) {
          //   arr[arr.length]=this.multipleSelection[i]
          // }
          for (let index = 0; index < arr.length; index++) {
            this.totalNum+=arr[index].num
            this.totalPrice+=arr[index].price*arr[index].num
          }
        },
        gotoBy(){
          this.$router.push({//路由跳转，传参
            path:'/close',
            query:{
              totalNum:this.totalNum,
              totalPrice:this.totalPrice
            }})
        }
    }
  }
</script>
<style lang="less" scope="scoped">
 .shopCart{
   .shop{
     display: flex; 
     justify-content: left;
     align-items: center;
     .left{
       width: 110px;
       img{
         width: 100%;
       }
     }
     .right{
         .brand,.size{
           span:nth-child(1){
             margin-right:10px;
           }
         }
       }
   }
   .tabBottom{
     .allDelete{
       width: 40%;
       text-align: left;
       padding-left: 80px;
       float: left;
     }
     .goBy{
       width: 50%;
       text-align: right;
       padding-right: 50px;
       float: left;
       span{
         display: inline-block;
         margin-right: 10px;
       }
     }
   }
 }
</style>