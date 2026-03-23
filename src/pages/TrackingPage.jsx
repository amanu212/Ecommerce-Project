import React from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import dayjs from 'dayjs'
import Header from '../components/Header'
import TrackingFavicon from '../assets/images/tracking-favicon.png'
import './tracking.css'

function TrackingPage({ cart, orders }) {

  const { orderId, productId } = useParams();
  const [tracking, setTracking] = useState(null);

  useEffect(() => {
    const trackingData = async () => {
      const trackingData = await axios.get(`/api/orders/${orderId}?expand=products`)
      setTracking(trackingData.data);
    }

    trackingData()

  }, [orderId]);

  console.log(tracking);
  /*
    if (tracking) {
      const selectedItem = tracking.products
        .find((matchingItem) => {
        matchingItem.productId === productId
      })
    }
  */
  //console.log(selectedItem);
  return (
    <>

      <title>Tracking Page</title>
      <link rel="icon" type="image/svg+xml" href={TrackingFavicon} />

      <Header cart={cart} />

      {tracking ? (
        (() => {
          // Find the product the user actually clicked "Track" for
          const item = tracking.products.find(p => p.productId === productId);

          // If we can't find it (wrong productId or data issue)
          if (!item) {
            return <div>Product not found in this order</div>;
          }

          const deliveryDate = dayjs(item.estimatedDeliveryTimeMs).format('dddd, MMMM D');
          const totalDeliveryTimeMs = item.estimateDeliveryTimeMs - tracking.orderTimeMs;
          const timePassedMs = dayjs().valueOf() - tracking.orderTimeMs;
          const deliveryProgress = (timePassedMs / totalDeliveryTimeMs);
          console.log(deliveryProgress)

          return (
            <div className="tracking-page">
              <div className="order-tracking">
                <Link className="back-to-orders-link link-primary" to="/orders">
                  View all orders
                </Link>

                <div className="delivery-date">
                  Arriving on {deliveryDate}
                </div>

                <div className="product-info">
                  {item.product.name}
                </div>

                <div className="product-info">
                  Quantity: {item.quantity}
                </div>

                <img
                  className="product-image"
                  src={item.product.image}
                  alt={item.product.name}
                />

                {/* Keep progress bar unchanged for now */}
                <div className="progress-labels-container">
                  <div className="progress-label">Preparing</div>
                  <div className="progress-label current-status">Shipped</div>
                  <div className="progress-label">Delivered</div>
                </div>

                <div className="progress-bar-container">
                  <div className="progress-bar"></div>
                </div>
              </div>
            </div>
          );
        })()
      ) : (
        <div className="tracking-page">Loading order details...</div>
      )}
    </>
  )
}

export default TrackingPage