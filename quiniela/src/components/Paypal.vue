<template>
  <div>
    <p>Debes pagar tu inscripción para que se guarde tu quiniela.</p>
    <div :disabled="loading" id="paypal-button-container"></div>
    <div v-if="success" class="alert alert-success">
      <strong>Success!</strong> Pago completado exitosamente
    </div>
    <div v-if="error" class="alert alert-danger">
      <strong>Ooops!</strong> Sucedió un error. No se te ha cobrado. Intena nuevamente o ponte en contacto con nosotros.
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
        error: false,
        loading: false,
      }
    },

    methods: {
      sendDataPaypal(data) {
        return new Promise((resolve, reject) => {
            axios.post(process.env.SERVER_URL+'/api/payment', data)
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
        production: 'AY4_gNDEd9vez5TqnURWvzO0N5JmFZtspGD4XPe1B6nANrp5N7wJ430VKopRwc6gGhvvXpaOyMM-d7EL'
      };

      let payment = (data, actions) => {
        //Record action in facebook Pixel
        fbq('track', 'InitiateCheckout', {
          currency: 'MXN',
          value: 500.00,
          content_name: "Quiniela Subscription",
          type: 'Product'
        });

        // Make a call to the REST api to create the payment
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {total: '500.00', currency: 'MXN'},
                description: "Inscripcion a la Quiniela Russia 2018",
                item_list: {
                  items: [
                    {
                      name: "Quiniela Mundial Russia 2018",
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
            //   "return_url": "http://localhost/redirect",
            //   "cancel_url": "https://localhost:8080/#/cancel"
            // }
          }
        });
      };

      let onAuthorize = (data) => {
        this.loading=true;
        let send_data = {
          paymentID: data.paymentID,
          payerID: data.payerID,
          amount: 500,
          user_id: localStorage.getItem('user_id')
        };

        this.sendDataPaypal({data: send_data}).then(() => {
          this.loading = false;
          this.success = true; // to display the success message
          localStorage.setItem('has_paid', 'true');
          fbq('track', 'Purchase', {
            currency: 'MXN',
            value: 500.00,
            content_name: "Quiniela Subscription",
            type: "Product"
          });
          this.$emit('payment-success');

        }).catch(err => {
          console.log("err", err);
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
        env: process.env.PAYPAL_MODE, // sandbox | production
        commit: true,
        funding:{
          allowed: [paypal.FUNDING.CREDIT]
        },
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
