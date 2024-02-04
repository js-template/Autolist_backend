module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  name: "strapi::body",
  config: {
    formLimit: "256mb", // modify form body
    jsonLimit: "256mb", // modify JSON body
    textLimit: "256mb", // modify text body
    formidable: {
      maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
    },
  },
  "google-maps": {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 4, // Default is 5
    },
  },
  "react-icons": true,

  email: {
    provider: env("EMAIL_PROVIDER", "smtp"),
    providerOptions: {
      host: env("EMAIL_HOST"),
      port: env("EMAIL_PORT"),
      auth: {
        user: env("EMAIL_NAME"),
        pass: env("EMAIL_PASSWORD"),
      },
      secure: env("EMAIL_SECURE", 587),
    },
    settings: {
      defaultFrom: env("EMAIL_NAME"),
      defaultReplyTo: env("EMAIL_NAME"),
    },
  },
});
