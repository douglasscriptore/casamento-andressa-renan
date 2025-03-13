import GiftCard from "@/app/components/GiftCard";
import { getData } from "@/app/services/firebase";
import Navbar from "../../components/Navbar";


// {
//   id: 'txfGepPqD3uNMSIl7d57',
//   imageUrl: 'https://images.yampi.me/assets/stores/lindacasa/uploads/images/jogo-de-lencol-casal-4-pecas-percal-400-fios-ponto-palito-grafite-64c9230bde262-medium.jpg',
//   name: 'Jogo de Lençol Casal 4 Peças',
//   price: '145'
// },
// {
//   id: 'vcZr6HNvGmo7pNF7MhCS',
//   price: '395',
//   giver: 'António Carlos  e Janete ',
//   imageUrl: 'https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-tramontina-antiaderente-aluminio-grafite-10-pecas-paris/magazineluiza/235024300/93d6db38166c0491f9cb88f78e5b288c.jpg',
//   name: 'Jogo de Panela'
// },
// {
//   id: 'x9E1wbiqXWD9Ts5Kd2T5',
//   name: 'Protetor Auricular',
//   description: 'Protetor de ouvido pra Dai aguentar os ronco do Mateus rsrs',
//   giver: 'Ana Priscila Medeiros',
//   imageUrl: 'https://cf.shopee.com.br/file/6f6ab6ff67a2d69ec238dda2ae689d33',
//   price: '10'
// },
// {
//   id: 'zDOPFV9ZeEv0XxcjOOST',
//   price: '2700',
//   imageUrl: 'https://electrolux.vtexassets.com/arquivos/ids/213950-800-800?v=637719959211600000&width=800&height=800&aspect=true',
//   name: 'Geladeira Electrolux'
// }


export default async function Gifts() {
  const gifts = await getData("gifts");

  return (
    <>
      <div className="flex flex-col gap-6 min-h-screen">
        <Navbar></Navbar>
        <div className="flex justify-center gap-6 flex-col md:gap-0 py-10 px-12 md:px-24 items-center text-center">
          <h1
            className="font-bold text-4xl text-gray-500"
            style={{ fontFamily: "brittany" }}
          >
            Lista de presentes
          </h1>

          <p className="text-center md:w-2/4 mt-4">
            <span className="text-gray-500">
              <span className="border-1 border-b">
                Nos ajude a montar nosso novo lar!
              </span>{" "}
              <br />
              Por nossa plataforma você pode pagar no cartão de crédito, mas se
              desejar utilizar o pix ou você mesmo comprar o presente em uma
              loja da sua escolha, entre em contato conosco pelo whatsapp.
            </span>
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-11">
            {gifts &&
              gifts.map((gift: any) => (
                <GiftCard key={gift.id} {...gift}></GiftCard>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
