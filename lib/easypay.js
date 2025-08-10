/**
 * EasyPay integration helper (server-side)
 * This file contains functions to initiate payment requests and verify callbacks.
 * IMPORTANT: Replace endpoints & payload with actual EasyPay docs for Uganda; this is scaffold code.
 */
import axios from 'axios'

const EASYPAY_API_URL = process.env.EASYPAY_API_URL
const CLIENT_ID = process.env.EASYPAY_CLIENT_ID
const CLIENT_SECRET = process.env.EASYPAY_CLIENT_SECRET

export async function createPayment({amount, currency='UGX', phone, reference}) {
  // scaffold: replace with actual EasyPay API request
  const res = await axios.post(`${EASYPAY_API_URL}/payments/init`, {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    amount, currency, phone, reference, callback_url: process.env.EASYPAY_CALLBACK_URL
  })
  return res.data
}

export async function verifyPayment(payload) {
  // scaffold: implement verification logic or signature checks as per EasyPay docs
  return payload
}
