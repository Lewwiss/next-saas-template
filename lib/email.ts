import { createTransport } from "nodemailer";
import type { SendVerificationRequestParams } from "next-auth/providers/email";

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
) => {
  const { identifier, url, provider } = params;
  const { host } = new URL(url);

  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: html({ url, host }),
  });

  const failed = result.rejected;
  if (failed.length)
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
};

const html = (params: { url: string; host: string }) => {
  const { url, host } = params;

  const escapedHost = host.replace(/\./g, "&#8203;.");

  return `
  <body style="background: #ffffff;">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
  </style>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center">
        <a href="https://www.webhookforms.com/">
          <img src="https://www.webhookforms.com/logo.png" style="width: 40px;" />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 16px 0px 16px 0px; font-size: 22px; font-family: Geist, Arial, sans-serif; color: #1e293b;">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 14px;" bgcolor="#346df1"><a href="${url}" target="_blank" style="font-size: 16px; font-family: Geist, Arial, sans-serif; color: #FFFFFF; text-decoration: none; padding: 8px 18px; display: inline-block; font-weight: semibold;">Sign In Now</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 16px 0px 0px 0px; font-size: 14px; line-height: 22px; font-family: Geist, Arial, sans-serif; color: #64748b;">If you did not request this email you can safely ignore it.</td>
    </tr>
  </table>
</body>
`;
};

const text = ({ url, host }: { url: string; host: string }) => {
  return `Sign in to ${host}\n${url}\n\n`;
};
