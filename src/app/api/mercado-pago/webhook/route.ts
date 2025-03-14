import { updateDataById } from "@/app/services/firebase";

export async function POST(req: Request) {
  try {
    const notification = await req.json();

    if (
      notification.type === "payment" &&
      notification.action === "payment.created"
    ) {
      const paymentId = notification.data.id;
      const paymentDetails = await fetchPaymentDetailsFromMercadoPago(
        paymentId
      );
      console.log("paymentDetails", paymentDetails);

      if (
        paymentDetails.status === "approved" ||
        paymentDetails.status === "pending" ||
        paymentDetails.status === "in_process"
      ) {
        const payerName = paymentDetails.metadata.payer_name;
        console.log("Name!", payerName);
        await updateDataById("gifts", paymentDetails.external_reference, {
          giver: payerName,
        });
      }
    }

    return new Response(JSON.stringify({}), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

async function fetchPaymentDetailsFromMercadoPago(paymentId: string) {
  // alert(process.env.MERCADO_PAGO_ACCESS_TOKEN);
  const paymentDetails = await fetch(
    `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=APP_USR-483cce14-d72d-4ac1-85fa-d091712dcb27`
  );

  return paymentDetails.json();
}
