<template>
    <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
            <h5>Subtotal</h5>
        </td>
        <td>
            <h5>$2160.00</h5>
        </td>
    </tr>
    <tr class="out_button_area">
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
            <div class="checkout_btn_inner d-flex align-items-center">
                <router-link class="gray_btn" to="/">Continue Shopping</router-link> 
                <router-link class="primary-btn" to="/checkout/billing-details">Proceed to checkout</router-link>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name : "Footer"
}
</script>