import { createPayment } from '../../../lib/easypay'
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res){
  if(req.method !== 'POST'){
    return res.status(405).end()
  }
  const body = req.body
  // expected fields: user_id, phone, amount (we'll default)
  const amount = body.amount || 5000
  const phone = body.phone || ''
  const reference = 'pay_' + Date.now()
  try{
    const result = await createPayment({amount, phone, reference})
    // create a payment record with status 'pending'
    await supabase.from('payments').insert([{user_id: body.user_id, amount, currency:'UGX', provider:'EASYPAY', provider_reference: reference, status:'pending'}])
    return res.status(200).json(result)
  }catch(err){
    console.error(err)
    return res.status(500).json({error: 'failed'})
  }
}
