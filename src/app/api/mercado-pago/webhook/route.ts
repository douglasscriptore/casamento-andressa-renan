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
    `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=APP_USR-2699789299258354-031207-22c663ff0450bff7a22a158814d2f4f5-248313832`
  );

  return paymentDetails.json();
}
