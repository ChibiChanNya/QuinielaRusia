<template>
  <div>
    <p>Debes pagar tu inscripción para que se guarde tu quiniela.</p>
    <div id="paypal-button-container"></div>
    <div v-if="success" class="alert alert-success">
      <strong>Success!</strong> Pago completado exitosamente
    </div>
    <div v-if="error" class="alert alert-danger">
      <strong>Ooops!</strong> Sucedió un error. Intenta nuevamente.
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Paypal",

    data() {
      return {
        success: false,
        error: false
      }
    },

    methods: {
      sendDataPaypal(data) {
        return new Promise((resolve, reject) => {
            axios.post('http://quinielasports.com:3333/api/payment', data)
              .then((res) => resolve()).catch((err) => {
              return reject(err)
            })
          }
        )
      }
    },

    mounted() {

      let client = {
        sandbox: 'AXa7tZ6EUuladHZ7LeazvYj8DNFNzjIgXtkooGrLB1sjlpZMP6KNfGmKghkwyZia1yafqD6kcmN6tmJA',
      };

      let payment = (data, actions) => {
        // Make a call to the REST api to create the payment
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {total: '500.00', currency: 'MXN'},
                description: "Inscripcion a la Quiniela Rusia 2018",
                item_list: {
                  items: [
                    {
                      name: "Quiniela Mundial Rusia 2018",
                      quantity: "1",
                      price: "500",
                      sku: "1",
                      currency: "MXN"
                    }
                  ]
                }
              }
            ],
            "note_to_payer": "Ponte en contacto con nosotros si tienes alguna duda",
            // "redirect_urls": {
            //   "return_url": "http://localhost:3333/redirect",
            //   "cancel_url": "https://localhost:8080/#/cancel"
            // }
          }
        });
      };

      let onAuthorize = (data) => {
        let send_data = {
          paymentID: data.paymentID,
          payerID: data.payerID,
          amount: 500,
          user_id: localStorage.getItem('user_id')
        };

        this.sendDataPaypal({data: send_data}).then(() => {
          this.success = true; // to display the success message
          localStorage.setItem('has_paid', 'true');
          this.$emit('payment-success');

        }).catch(err => {
          this.error = true  // to display  the error message
        });
      };

      let onCancel = (data) => {
        console.log("CANCELLED", data);
      };

      let onError = (err) => {
        console.log("BEEP ERROR", err);
      };

      paypal.Button.render({
        env: 'sandbox', // sandbox | production
        commit: true,
        client,
        payment,
        onAuthorize,
        onCancel,
        onError
      }, '#paypal-button-container');
    }
  }
</script>

<style scoped>

</style>
