export const contactWhatsApp
  = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_CONTACT_WHATSAPP)
  || '6281234567890';

export const bankAccount
  = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BANK_ACCOUNT)
  || 'BCA 1234567890 a/n PT Divistant Teknologi Indonesia';
