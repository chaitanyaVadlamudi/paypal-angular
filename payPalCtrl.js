(function(){
    function payPalCtrl($scope){
        $scope.opts = {

            env: 'sandbox',

            client: {
                sandbox:    'AYE5FIrmZajA30xh7jkUMtcNVdZ90W_kWQoj71jekamj5sIgAMoqd9vf1Y9LAeY0WsEq8WH2IAUKZ664',
                production: 'applegopalreddy@gmail.com'
            },

            payment: function() {

                var env    = this.props.env;
                console.log("res is "+ env)
                var client = this.props.client;

                return paypal.rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: { total: '1.00', currency: 'USD' }
                        }
                    ]
                });
            },

            commit: true, // Optional: show a 'Pay Now' button in the checkout flow

            onAuthorize: function(data, actions) {

                // Optional: display a confirmation page here

                return actions.payment.execute().then(function() {
                    // Show a success page to the buyer
                });
            }
        };

    }
    angular.module("payPal")
    .controller("payPalCtrl",["$scope",payPalCtrl])
})();