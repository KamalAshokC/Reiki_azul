import Section from '../ui/Section';
import Button from '../ui/Button';
import { SITE } from '../../lib/constants';

export default function Booking() {
  return (
    <Section id="book" eyebrow="Booking & Contact" title="Reserve your session">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h3 className="font-heading text-2xl text-azul-700">How to book</h3>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-azul-700/80">
            <li>
              <strong className="font-medium text-azul-700">1. Choose your package</strong> — sessions
              and trainings above.
            </li>
            <li>
              <strong className="font-medium text-azul-700">2. Reserve online</strong> — the live
              calendar shows all available times.
            </li>
            <li>
              <strong className="font-medium text-azul-700">3. Send your deposit</strong> — $50 CAD by
              Interac e-transfer to keep your spot.
            </li>
          </ol>

          <Button
            as="a"
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full sm:w-auto"
          >
            Open Booking Calendar
          </Button>

          <div className="mt-6 text-sm text-azul-700/70">
            <p>
              Trainings, gift cards and home cleansing are arranged by phone or email.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-sand/70 p-8">
            <h3 className="font-heading text-2xl text-azul-700">Payment</h3>
            <ul className="mt-5 space-y-3 text-sm text-azul-700/80">
              <li>
                Interac e-transfer →{' '}
                <a className="underline decoration-azul-300 hover:text-azul-500" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li>PayPal available on request</li>
              <li>Deposit: ${SITE.deposit} CAD, non-refundable</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-azul-500 p-8 text-white">
            <h3 className="font-heading text-2xl">Visit the studio</h3>
            <address className="mt-5 space-y-2 text-sm not-italic text-white/90">
              <p>{SITE.address}</p>
              <p>
                <a href={`tel:+1${SITE.phone.replace(/-/g, '')}`} className="hover:underline">
                  {SITE.phone}
                </a>
              </p>
              <p>{SITE.hours}</p>
            </address>
          </div>
        </div>
      </div>
    </Section>
  );
}
