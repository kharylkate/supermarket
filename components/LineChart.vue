<script>
import { Doughnut } from 'vue-chartjs'
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  extends: Doughnut,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  computed: {
    ...mapGetters({
        deliveryList: "deliveryList",
        inventoryList: "inventoryList"
    })
  },
  mounted() {

    var item_label = []
    var item_qty = []
    for(var i = 0; i < this.inventoryList.length; i++){
        item_label.push(this.inventoryList[i].product_description)
        item_qty.push(this.inventoryList[i].qty)
    }

    this.renderChart({
        labels: item_label,
        datasets: [{
            borderWidth: 1,
            borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'                
            ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',                
            ],
            data: item_qty
        }]
    },
    { legend: { display: true }, 
        responsive: true,
        maintainAspectRatio: false 
    });









      //=================================================================================================

    // this.gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // this.gradient2 = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);

    // this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    // this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    // this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    // // get qty of all delivery
    // var delivery = []
    // for(var i = 0; i < this.deliveryList.length; i++){
    //     if(this.deliveryList[i].items.length > 1){
    //         for(var j = 0; j < this.deliveryList[i].items.length; j++){
    //             delivery.push(this.deliveryList[i].items[j].qty)
    //         }
    //     }
    // }
    // console.log("qty: ", delivery);

    // // get qty of all sales
    // var sales = []
    // for(var i = 0; i < this.salesList.length; i++){
    //     if(this.salesList[i].items.length > 1){
    //         for(var j = 0; j < this.salesList[i].items.length; j++){
    //             sales.push(this.salesList[i].items[j].quantity)
    //         }
    //     }
    // }
    // console.log("qty: ", sales);


    

    // this.renderChart(
    //   {
    //     labels: [
    //       "January",
    //       "February",
    //       "March",
    //       "April",
    //     ],
    //     datasets: [
    //       {
    //         label: "Data One",
    //         borderColor: "#FC2525",
    //         pointBackgroundColor: "white",
    //         borderWidth: 1,
    //         pointBorderColor: "white",
    //         backgroundColor: this.gradient,
    //         data: delivery
    //       },
    //       {
    //         label: "Data Two",
    //         borderColor: "#05CBE1",
    //         pointBackgroundColor: "white",
    //         pointBorderColor: "white",
    //         borderWidth: 1,
    //         backgroundColor: this.gradient2,
    //         data: sales
    //       }
    //     ]
    //   },
    //   { responsive: true, maintainAspectRatio: false }
    // );
  },
//   async beforeMount(){
//     await this.$store.dispatch("fetchDTransactionList")
//     await this.$store.dispatch("fetchSalesList")
//   }
};
</script>
