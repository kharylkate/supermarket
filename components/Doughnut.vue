<script>
import { Doughnut } from 'vue-chartjs'
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  extends: Doughnut,
  data() {
    return {
      dataSet: null,
      options: null,
      inv: {}
    };
  },
  computed: {
    ...mapGetters({
        inventoryList: "inventoryList"
    })
  },
  async beforeCreate(){
    await this.$store.dispatch("fetchInventoryList")
  },
  async created(){
    var item_label = []
    var item_qty = []
    for(var i = 0; i < this.inventoryList.length; i++){
      if(this.inventoryList[i].quantity > 0) {
        item_label.push(this.inventoryList[i].product_description)
        item_qty.push(this.inventoryList[i].quantity)
      }
    }

    this.dataSet = {
      labels: item_label,
        datasets: [{
            borderWidth: 1,
            // borderColor: [
            // 'rgba(255,99,132,1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)'                
            // ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',  
            'rgba(102,204,153,0.2)'    
            ],
            data: item_qty
        }]
    }

    this.options = {
      legend: { display: true }, 
        responsive: true,
        maintainAspectRatio: false 
    }
  },
  async mounted() {

    // this.renderChart([ this.dataSet, this.options ])
    var item_label = []
    var item_qty = []
    for(var i = 0; i < this.inventoryList.length; i++){
      if(this.inventoryList[i].quantity > 0) {
        item_label.push(this.inventoryList[i].product_description)
        item_qty.push(this.inventoryList[i].quantity)
      }
    }

    this.renderChart({
        labels: item_label,
        datasets: [{
            borderWidth: 1,
            // borderColor: [
            // 'rgba(255,99,132,1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)'                
            // ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',  
            'rgba(102,204,153,0.2)'    
            ],
            data: item_qty
        }]
    },
    { legend: { display: true }, 
        responsive: true,
        maintainAspectRatio: false 
    });
  },
};
</script>
