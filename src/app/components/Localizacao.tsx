import { IconMapPin } from "@tabler/icons-react";

export default function Localizacao() {
  return (
    <div className="flex flex-col justify-center gap-6 md:gap-0 py-10 px:12 md:px-24 items-center text-center">
      <h1
        className="text-gray-500 font-bold text-4xl"
        style={{ fontFamily: "brittany" }}
      >
        Onde vai ser?
      </h1>
      <div className="w-2/3 mt-5 text-gray-500">
        <div className="mb-3">
          <span>
            Escolhemos um lugar com a nossa cara para celebrarmos juntos!
          </span>
        </div>
        <div className="mb-3">
          <span>
            Queremos compartilhar com vocês o local especial que escolhemos para
            o nosso casamento. Optamos por um ambiente aberto, cercado pela
            natureza e cheio de encanto. Queremos que esse seja um dia
            inesquecível para todos, repleto de amor e alegria.
          </span>
        </div>
        <div className="flex justify-center content-center gap-4 w-full">
          <IconMapPin></IconMapPin>
          <span className="pt-0.5 underline underline-offset-8">
            Av. Gabriel Esperidião, 54 - Centro, Paranavaí - PR, 87703-000
          </span>
        </div>
      </div>
      <iframe
        className="mt-6"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Three%20Brothers%20Ranch%20Paranavai+(Three%20Brothers%20Ranch%20Paranavai)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="230"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}
