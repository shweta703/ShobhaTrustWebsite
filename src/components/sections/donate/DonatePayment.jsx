import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiClipboardCopy, HiCheck, HiCreditCard } from 'react-icons/hi';
import upiQrCode from '../../../assets/QRCODE-SHOBHA-TRUSTSBI.webp';
import { donatePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import Button from '../../ui/Button';
import './DonatePayment.css';

const { payment } = donatePage;

const UPI_LINK = `upi://pay?pa=${payment.upi.id}&pn=Shobha%20Trust`;

export default function DonatePayment() {
  const [copiedField, setCopiedField] = useState(null);

  const copyValue = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleDonateSecurely = () => {
    window.location.href = UPI_LINK;
  };

  return (
    <section className="section donate-payment" id="make-a-donation">
      <div className="container">
        <SectionHeader
          label={payment.label}
          title={payment.title}
          description={payment.description}
          align="center"
        />

        <div className="donate-payment__grid">
          <AnimateIn direction="left">
            <div className="donate-payment__card donate-payment__card--bank">
              <div className="donate-payment__card-head">
                <HiCreditCard size={22} aria-hidden="true" />
                <h3>{payment.bank.title}</h3>
              </div>
              <dl className="donate-payment__fields">
                {payment.bank.fields.map((field) => (
                  <div key={field.label} className="donate-payment__field">
                    <dt>{field.label}</dt>
                    <dd>
                      <span>{field.value}</span>
                      {field.copy && (
                        <button
                          type="button"
                          className="donate-payment__copy"
                          onClick={() => copyValue(field.label, field.value)}
                          aria-label={`Copy ${field.label}`}
                        >
                          {copiedField === field.label ? (
                            <HiCheck size={18} aria-hidden="true" />
                          ) : (
                            <HiClipboardCopy size={18} aria-hidden="true" />
                          )}
                        </button>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.1}>
            <div className="donate-payment__card donate-payment__card--upi">
              <h3>{payment.upi.title}</h3>
              <p className="donate-payment__upi-label">UPI ID</p>
              <div className="donate-payment__upi-row">
                <code>{payment.upi.id}</code>
                <button
                  type="button"
                  className="donate-payment__copy"
                  onClick={() => copyValue('UPI ID', payment.upi.id)}
                  aria-label="Copy UPI ID"
                >
                  {copiedField === 'UPI ID' ? (
                    <HiCheck size={18} aria-hidden="true" />
                  ) : (
                    <HiClipboardCopy size={18} aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="donate-payment__qr">
                <img
                  src={upiQrCode}
                  alt={`Shobha Trust UPI QR code — ${payment.upi.id}`}
                  width={220}
                  height={220}
                  loading="lazy"
                />
                <span>{payment.upi.qrHint}</span>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  className="donate-payment__submit"
                  onClick={handleDonateSecurely}
                >
                  {payment.submitLabel}
                </Button>
              </motion.div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
