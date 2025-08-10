import { verifyPayment } from '../../../lib/easypay'
import { supabase } from '../../../lib/supabase'

export default async function handler(req, res){
  // EasyPay will POST here when payment is completed. Verify signature per EasyPay docs.
  const payload = req.body
  const verified = await verifyPayment(payload)
  if(!verified) return res.status(400).end('invalid')
  // find payment and mark complete, grant access
  const ref = payload.reference || payload.tx_ref
  const { data: payment } = await supabase.from('payments').select('*').eq('provider_reference', ref).single()
  if(payment){
    await supabase.from('payments').update({status:'completed', metadata: payload}).eq('id', payment.id)
    // Grant access: example updates profile flags for the payer (metadata may include payer id)
    const payerId = payment.user_id
    await supabase.from('profiles').update({ can_view_contact: true, can_chat: true }).eq('id', payerId)
  }
  res.status(200).json({ok:true})
}
