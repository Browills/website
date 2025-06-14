// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_j11eqzt',
  templateId: 'template_cfx5knc',
  publicKey: '0YzlJgtgYBgWIDhav', // Public key for EmailJS integration
  toEmail: 'info@browills.com'
};

// Template parameter mapping for EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  company: string;
  project_type: string;
  budget_range: string;
  message: string;
  submission_date: string;
  to_email: string;
}

// Instructions for setting up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account or log in
// 3. Go to Email Services and connect your email service (Gmail, Outlook, etc.)
// 4. Go to Email Templates and create a new template using the HTML template provided
// 5. Use the template variables: {{from_name}}, {{from_email}}, {{company}}, {{project_type}}, {{budget_range}}, {{message}}, {{submission_date}}
// 6. Go to Integration and copy your Public Key
// 7. Public key has been configured: 0YzlJgtgYBgWIDhav 