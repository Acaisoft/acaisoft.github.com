import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  MdKeyboardArrowRight,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import { Button } from "../ui/button";
import { CheckboxInput } from "../ui/checkbox-input";
import { Input } from "../ui/input";
import { SectionHeader } from "../ui/section-header";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { ConsentDialog } from "./consent-dialog";

export interface JoinAlumniProps {}

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
};

export const JoinAlumni: React.FC<JoinAlumniProps> = () => {
  const [consent1DialogOpen, setConsent1DialogOpen] = useState(false);
  const [consent2DialogOpen, setConsent2DialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isSubmitting },
  } = useForm<FormType>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {};

  return (
    <section className="container py-24 pb-12">
      <SectionHeader className="md:text-center">
        Join the Alumni Club
      </SectionHeader>
      <p className="mx-auto mb-10 max-w-2xl text-grey-500 md:text-center">
        If you have worked at Acaisoft, join the Alumni Program by filling out
        the form below. You will receive our Newsletter and get access to all
        the benefits.
        <br />
        <br />
        Learn more about Alumni Program here:{" "}
        <Link
          className="underline"
          href="/documents/Regulamin-Programu-Alumni-Acaisoft.pdf"
        >
          Alumni Program regulations
        </Link>
      </p>

      {isSubmitted ? (
        <div className="text-center text-lg">
          <div className="mb-8 text-2xl font-bold text-blue-800">
            Well done!
          </div>
          <MdOutlineSentimentVerySatisfied className="mb-5 inline-block text-2xl" />
          <br />
          Thank you!
          <br />
          Your application has been sent successfully :)
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-sm lg:max-w-4xl"
        >
          <div className="mb-5 text-2xl font-bold">Personal information</div>
          <TwoColumnLayout>
            <div>
              <div className="flex flex-col gap-5">
                <Input
                  label="Your name"
                  {...register("firstName", { required: true })}
                />
                <Input
                  label="Your surname"
                  {...register("lastName", { required: true })}
                />
                <Input
                  label="Email address"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
            </div>

            <div className="text-xs text-grey-500">
              <CheckboxInput
                className="mb-5"
                required
                label={
                  <div className="mt-1">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="underline"
                      onClick={() => setConsent1DialogOpen(true)}
                    >
                      GDPR information clause
                    </button>
                  </div>
                }
              />
              <CheckboxInput
                className="mb-10 lg:mb-40"
                required
                label={
                  <div className="mt-1">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="underline"
                      onClick={() => setConsent2DialogOpen(true)}
                    >
                      transfer of commercial informations
                    </button>{" "}
                    by electronic communications systems
                  </div>
                }
              />

              <Button
                type="submit"
                variant="dark"
                endIcon={<MdKeyboardArrowRight />}
                className="w-full lg:w-auto"
                disabled={isSubmitting}
              >
                JOIN
              </Button>
            </div>
          </TwoColumnLayout>

          <ConsentDialog
            title="Klauzula obowiązku informacyjnego"
            open={consent1DialogOpen}
            onClose={() => setConsent1DialogOpen(false)}
          >
            <div>
              <h4>Administrator danych</h4>
              <p>
                <strong>Administratorem danych osobowych jest</strong> Acaisoft
                Poland spółka z ograniczona odpowiedzialnością z siedzibą w
                Białymstoku (15-789) przy ul. Świętego Rocha 10/2.
              </p>
              <p>
                Poniżej znajdziesz wszelkie niezbędne informacje dotyczące
                przetwarzania Twoich danych osobowych w związku z udziałem w
                Programie Alumni.&nbsp;
              </p>
            </div>
            <div>
              <h4>Inspektor ochrony danych</h4>
              <p>
                Mogą się Państwo kontaktować z inspektorem danych osobowych pod
                adresem: <strong>rodo@acaisoft.com</strong>
              </p>
            </div>
            <div>
              <h4>Cel i podstawy przetwarzania</h4>
              <p>
                Dane osobowe przetwarzane będą w celu uczestnictwa w Programie
                Alumni na podstawie dobrowolnie wyrażonej zgody (Art. 6 ust. 1
                lit. a RODO).
              </p>
            </div>
            <div>
              <h4>Informacja o wymogu podania danych</h4>
              <p>
                Podanie danych osobowych jest dobrowolne, aczkolwiek konieczne
                do wzięcia udziału w Programie Alumni.
              </p>
            </div>
            <div>
              <h4>Okres przechowywania danych</h4>
              <p>
                Dane osobowe będą przechowywane przez okres trwania Programu
                Alumni, nie dłużej jednak niż do dnia odwołania zgody na
                przetwarzanie.
              </p>
            </div>
            <div>
              <h4>Odbiorcy danych osobowych</h4>
              <p>
                Dane osobowe nie będą przekazywane innym odbiorom. Dane osobowe
                nie będę przetwarzane poza terytorium UE. Dane nie będą
                profilowane.
              </p>
            </div>
            <div>
              <h4>Prawa osób, których dane dotyczą</h4>
              <p>
                Posiadasz prawo do żądania od Administratora danych osobowych:
              </p>
              <ul>
                <li>dostępu do danych osobowych</li>
                <li>sprostowania danych osobowych</li>
                <li>
                  usunięcia danych osobowych, jeżeli zachodzi jedna z
                  okoliczności wskazanych w art. 17 ust. 1 RODO i jeżeli
                  przetwarzanie danych osobowych nie jest niezbędne w zakresie
                  wskazanym w art. 17 ust. 3 RODO
                </li>
                <li>
                  ograniczenia przetwarzania danych osobowych w przypadkach
                  wskazanych w art. 18 ust. 1 RODO
                </li>
                <li>
                  wniesienia do administratora danych osobowych sprzeciwu wobec
                  przetwarzania danych osobowych
                </li>
                <li>przenoszenia danych osobowych</li>
                <li>
                  wniesienia skargi do organu nadzorczego, tj. do Prezesa Urzędu
                  Ochrony Danych Osobowych, w przypadku uznania, że
                  przetwarzanie moich danych osobowych narusza przepisy RODO
                </li>
                <li>
                  wycofania w dowolnym momencie zgody na przetwarzanie danych
                  osobowych
                </li>
              </ul>
            </div>
          </ConsentDialog>

          <ConsentDialog
            title="Transfer of commercial informations"
            open={consent2DialogOpen}
            onClose={() => setConsent2DialogOpen(false)}
          >
            <p>
              Yes, I agree to the transfer of commercial informations by
              electronic communication systems (Act of 18 July 2002 on the
              provision of electronic services, Journal of Laws of 2019, pos.
              123) Acaisoft sp. z o. o on the terms set out in the regulations
              of the Acaisoft Alumni Program, which I accept and accept to
              participate in the Acaisoft Alumni Program. I am aware that I can
              withdraw my consent at any time by sending a&nbsp;message to:
              hr@acaisoft.com . *
            </p>
            <p>
              *The administrator of personal data processed under the Alumni
              Program is Acaisoft sp. z o. o. Personal data will be processed in
              order to: organize and invite to events related to the Program,
              provide the Alumni newsletter and other informational
              publications, provide information about Acaisoft and conduct
              statistical analyzes of Program participants. Full information
              about the processing of personal data is available in our Privacy
              Policy.
            </p>
          </ConsentDialog>
        </form>
      )}
    </section>
  );
};
