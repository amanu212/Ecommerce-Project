import React from 'react'
import dayjs from 'dayjs'

function DeliveryDate({selectedDeliveryOption}) {

  //{console.log("Selected delivery option:", selectedDeliveryOption);}
  return (
    <div className="delivery-date">
      Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
    </div>
  )
}

export default DeliveryDate