<template>
    <div class="modal fade" id="viewTransaction" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Official Receipt</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-row justify-content-center">
                <div class="container text-center mb-2">
                  <h5>LOU GEH SUPERMARKET</h5>
                  <small>Some bldg-name, st name, road name, STATE</small>
                </div>

                <div class="container">
                  <h6 class="mr-auto">07-10-2020 09:37 PM</h6>    
                  <div class="ml-auto">kkjjh</div>             
                </div>
                
                
                

                <div class="container p-2 table-responsive mb-3">
                  <table class="table table-borderless">
                    <thead>
                        
                      <tr>
                        <th>BARCODE</th>
                        <th>DESC</th>
                        <th>QTY</th>
                        <th>UNIT PRICE</th>
                        <th>AMT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Muck n Cheeze</td>
                        <td>3</td>
                        <td>PHP98.15</td>
                        <td>PHP294.45</td>
                      </tr>
                      <tr>
                        <td>Oreo</td>
                        <td>2</td>
                        <td>PHP54.75</td>
                        <td>PHP109.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="container mb-5">
                  <table class="table-borderless">
                    <tbody>
                      <tr>
                        <td>Total</td>
                        <td>PHP710.95</td>
                      </tr>
                      <tr>
                        <td>Cash</td>
                        <td>PHP1000.00</td>
                      </tr>
                      <tr>
                        <td>Change</td>
                        <td>PHP289.05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">OK</button>
              </div>
              <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
            </form>
          </div>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'modal-viewTrans',
    components: {
        // ...mapGetters ([
        //     'items'
        // ])
    }, 
    
}
</script>